<template>
    <div id="app">
        <div id="load">
            <p>[Node]    </p><input type="text" id="node" value="https://testnet.perlin.net"/><br>
            <p>[Secret]  </p><input type="text" id="secret" value="a6c82664cfebc00595ed4c4c2425dc5059296c686f26fc02ec0e42d312015c79b2e8e3167a6665386dd226cc7f3b693d9d44f760ff146424789aff3e707927c1"/><button @click="setconnect()">Connect</button> <br>
            <p>[Contract]</p><input type="text" id="contract" value="11a3081c85355ef10a875388ec12e35dcaf74db92b6b0a94c58616d9c704bb98"/><button id="contract-button" type="button" disabled @click="setcontract()">Load Ballot Paper</button> <br>
        </div>

        <div id="result">
            <h2>CURRENT VOTING RESULTS</h2>
            <ol>
                <li v-for="(vote, idx) in votes">
                    <p>{{ vote.name }}</p>
                    <p>{{ vote.points }} Points</p>
                </li>
            </ol>
        </div>

        <div id="vote">
            <H2>BALLOT PAPER</H2>
            <ol id="choose">
                <li v-for="(vote, idx) in votes">
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <p>{{ vote.name }}</p>
                </li>
            </ol>
            <button @click="vote">Submit Vote</button>
        </div>
    </div>
</template>

<script>
    import JSBI from "jsbi";
    import Vue from 'vue'
    import {Contract, Wavelet} from "wavelet-client";

    export default {
        name: 'app',
        mounted() {
            // this.init();
        },
        data() {
            return {
                logged: false,
                votes: [],
            }
        },
        methods: {
            setconnect() {
                document.getElementById('contract-button').disabled = false;
            },
            setcontract() {
                const clientAddr = document.getElementById("node").value;
                const secretAddr = document.getElementById("secret").value;
                const contractAddr = document.getElementById("contract").value;
                const client = new Wavelet(clientAddr);
                const wallet = Wavelet.loadWalletFromPrivateKey(secretAddr);
                const contract = new Contract(client, contractAddr);

                Vue.use({
                    install (Vue) {
                        Vue.prototype.$contract = contract;
                        Vue.prototype.$wallet = wallet;
                        Vue.prototype.$client = client
                    }
                });
                this.logged = true;
                this.init();
            },

            async init() {
                const that = this;
                return await this.$contract.init().then(() => {
                    that.getVotes();
                    that.listen();
                })
            },
            getVotes() {
                if (! this.logged) return;
                const raw = this.$contract.test(this.$wallet, 'get_votes', JSBI.BigInt(0));
                console.log(raw);
                console.log("done");

                if (raw.logs[0]) {
                    this.votes = raw.logs[0].split(';').map((a, aidx) => {
                        var matched = a.split(':');
                        return {
                            name: matched[0],
                            points: parseInt(matched[1])
                        }
                    }).sort((a, b) => a.points - b. points);
                    console.log(this.votes);
                } else {
                    this.votes = []
                }
            },
            async listen() {
                if (! this.logged) return;
                var self = this
                await this.$client.pollConsensus({
                    onRoundEnded: () => {
                        (async () => {
                            await self.$contract.fetchAndPopulateMemoryPages();
                            self.getVotes();
                        })();
                    }
                });
            },
            async vote() {
                if (! this.logged) return;
                const data = [];
                document.getElementById("choose").childNodes.forEach(node => {
                   const innerData = node.childNodes;
                   data.push({preference: parseInt(innerData[0].value), name: innerData[1].innerHTML})
                });
                data.sort((a, b) => b.preference - a.preference);
                console.log(data);

                var self = this
                return await this.$contract.call(
                    this.$wallet,
                    'vote',
                    JSBI.BigInt(0),
                    JSBI.BigInt(250000),
                    JSBI.BigInt(0),
                    {type: "string", value: data[0].name},
                    {type: "string", value: data[1].name},
                    {type: "string", value: data[2].name},
                    {type: "string", value: data[3].name},
                    {type: "string", value: data[4].name},
                )
            },
        }
    }
</script>

<style>
    html, body, pre, code, kbd, samp {
        font-family: "Press Start 2P";
    }

    body {
        background: #20262E;
        padding: 20px;
    }

    #app {
        background: #fff;
        border-radius: 4px;
        padding: 20px;
        transition: all 0.2s;
        margin: 2rem;
        padding: 2rem;
    }

    ol {
        margin-left: 16px;
    }

    li {
        margin: 8px 0;
    }

    h2 {
        font-weight: bold;
        margin-bottom: 15px;
    }

    del {
        color: rgba(0, 0, 0, 0.3);
    }

    .nes-btn {
        padding: 0px 4px;
        margin: 0px;
    }

    .spacer {
        height: 1rem;
    }

    textarea {
        width: 100%;
        border: none;
        height: 200px;
    }
</style>