# Blockchain Challenge

Hello there! This is my solution of my solution to the Blockchain Challenge on 2hats!

It works!!! Thanks to the helps from the friendly Perlin discord channel!
I left a default Secret ID and a Contract ID for you to play with, which you can directly click on the buttons to continue. 

## Build wasm file

```
cd backend
cargo build --release --target=wasm32-unknown-unknown
```

## Run front end

```
cd frontend
npm install
npm run serve
```

It does not have a nice UI, and the concentration is to get the distributed election system working.
[interface](screenshot/interface.png)

## Not compiling 
Because the newest nightly has issues.
Do:

```
rustup default nightly-2019-07-04
rustup target add wasm32-unknown-unknown
```