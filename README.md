<div align="center">

  <h1><code>Hex WebAssembly</code></h1>

<strong>A solo hex game based on <a href="https://github.com/rustwasm/wasm-pack">wasm-pack</a>.</strong>

</div>

## Dependencies

### Rust & Rustup

Rust minimal version : Rust 1.30 
Refer to your distribution documentation for how to install Rust. We recommand to use <a href="https://github.com/rust-lang/rustup">Rustup</a>.

### NPM

You can go to <a href="https://www.npmjs.com/get-npm">the NPM website</a> to know how to install NPM.

### wasm-pack

Run the following command in terminal :

```
curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh
```

### Rust toolchain

If you don't have rust stable toolchain installed, you can do it with this command :

```
rustup default stable
```

## Usage

### Build with make (wasm-pack build)

```
make install
```

### Run in browser

```
make start

```

### Run in browser with debug and hot reloading

```
make dev

```

You can now see the running app into <a href="http://localhost:8080/">your default web browser</a>.

### Test in Headless Browsers with `wasm-pack test`

```
make test
```
