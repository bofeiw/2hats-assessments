# Blockchain Challenge

## Build wasm file

`cargo build --release --target=wasm32-unknown-unknown`

## Not compiling 
Because the newest nightly has issues.
Do:

```
rustup default nightly-2019-07-04
rustup target add wasm32-unknown-unknown
```