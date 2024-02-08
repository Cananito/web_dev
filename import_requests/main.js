import * as nameModule from "./name.js";

function initializeUI() {
  const body = document.body;
  body.style.margin = "0";
  body.style.padding = "0";

  const nameLabel = document.createElement("span");
  nameLabel.innerHTML = "Name: " + nameModule.createName();
  body.appendChild(nameLabel);

  body.appendChild(document.createElement("br"));

  const ageLabel = document.createElement("span");
  ageLabel.innerHTML = "Age: loading...";
  body.appendChild(ageLabel);

  setTimeout(() => {
    import("./age.js").then((ageModule) => {
      ageLabel.innerHTML = "Age: " + ageModule.createAge();
    });
  }, 2000);
};

function main() {
  initializeUI();
};

document.addEventListener("DOMContentLoaded", main);
