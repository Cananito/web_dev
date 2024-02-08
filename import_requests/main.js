import * as nameModule from "./name.js";
import * as squareModule from "square";
import * as circleModule from "circle";

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
  body.appendChild(document.createElement("br"));

  setTimeout(() => {
    import("./age.js").then((ageModule) => {
      ageLabel.innerHTML = "Age: " + ageModule.createAge();
    });
  }, 2000);


  const squareLabel = document.createElement("span");
  squareLabel.innerHTML = squareModule.squareGreet();
  body.appendChild(squareLabel);
  body.appendChild(document.createElement("br"));

  const circleLabel = document.createElement("span");
  circleLabel.innerHTML = circleModule.circleGreet();
  body.appendChild(circleLabel);
};

function main() {
  initializeUI();
};

document.addEventListener("DOMContentLoaded", main);
