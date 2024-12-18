let resultLabel;
let helloLabel;
let wasmObj;

function string_from_pointer(pointer, length) {
  const wasmBuffer = wasmObj.instance.exports.memory.buffer;
  const string_bytes = new Uint8Array(wasmBuffer, pointer, length);
  let string = new TextDecoder().decode(string_bytes);
  return string;
}

function r_js_print(message, message_length) {
  helloLabel.innerHTML = string_from_pointer(message, message_length);
}

function initializeUI() {
  const body = document.body;

  resultLabel = document.createElement("span");
  resultLabel.innerHTML = "Loading...";
  body.appendChild(resultLabel);

  body.appendChild(document.createElement("br"));

  helloLabel = document.createElement("span");
  helloLabel.innerHTML = "Loading...";
  body.appendChild(helloLabel);
}

function main() {
  initializeUI();

  const importObject = {
    env: {
      "print": r_js_print,
    },
  };

  const wasmPromise = WebAssembly.instantiateStreaming(fetch("some.wasm"),
                                                       importObject);
  wasmPromise.then(function (obj) {
    wasmObj = obj;

    const exports = obj.instance.exports;

    const result = exports.r_sum(1, 6);
    resultLabel.innerHTML = "Result: " + result;

    exports.r_call_me_back();
  });
};
document.addEventListener("DOMContentLoaded", main);
