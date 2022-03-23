## Run rust code in browser

Run rust code in browser.

## Try it out

* Make sure you have installed the enviroment of rust.
* And run the following command in your terminal.

### Development local

```
$ git clone git@github.com:peterroe/wasm-rust-demo.git
$ cd wasm-rust-demo
```

### Install complier tool

For complation, We need another complation target `wasm-unknown-unknown`.

```shell
$ rustup target add wasm32-unknown-unknown
```

### Build

Now you can build the project.

```shell
$ cargo build --target wasm32-unknown-unknown
```

The above command will generate `digets.wasm` file in `target/wasm32-unknown-unknown/debug/` directory.

### Convert wasm to javascript

Your need install a another tool to convert wasm to javascript.

```shell
$ cargo install wasm-bindgen-cli
```

And then convert the wasm file.

```shell
$ wasm-bindgen-cli target/wasm32-unknown-unknown/debug/digets.wasm --out-dir ./web --web
```

Now you will see the directory structure as below.

```shell
├─ src  
│  └─ lib.rs
├─ target
│  └─ wasm32-unknown-unknown
│     └─ debug
│        └─ digets.wasm
├─ web
│  └─ digets.js
└─ index.html
```

## Start Web Server

I recommend you to use `vite` to start the web server.

```shell
$ npm install -g vite   # install vite
$ vite -v               # check the version of vite
vite/2.7.10 win32-x64 node-v14.18.2 
$ vite --port 3000      # open the dev server
```

Just run and visit http://localhost:3000
