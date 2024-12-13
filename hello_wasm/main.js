let resultLabel;

function initializeUI() {
  resultLabel = document.createElement("span");
  resultLabel.innerHTML = "Loading...";
  const body = document.body;
  body.appendChild(resultLabel);
}

function main() {
  initializeUI();
  WebAssembly.instantiateStreaming(fetch("some.wasm"), {}).then(function (obj) {
    const result = obj.instance.exports.r_sum(1, 6);
    resultLabel.innerHTML = "Result: " + result;
  });
};
document.addEventListener("DOMContentLoaded", main);
