# Hello, WASM

## Instructions

Prerequisite: a Clang version that supports WASM output. Notably the one that comes from Xcode command line tools doesn't.

1. cd into this directory.

2. Compile the C code to WASM:

```
clang --target=wasm32 -nostdlib -Wl,--no-entry -Wl,--export-all -Wl,--allow-undefined -o some.wasm some.c
```

3. Start a webserver to serve this directory:

```
python3 -m http.server 9999
```

4. In a browser, navigate to http://localhost:9999/
