class EmailInfo extends HTMLElement {
  constructor() {
    super();
    this._fromLabel = document.createElement("span");
    this._fromLabel.innerHTML = "From: ";
    this._fromValue = document.createElement("span");
    this._fromValue.innerHTML = "rogelio@gudino.com";
    this._fromValue.style.backgroundColor = "var(--from-bg-color, cyan)";
    this._subject = document.createElement("span");
    this._subject.innerHTML = "This is the subject";
    this._subject.style.backgroundColor = "var(--subject-bg-color, magenta)";
  }

  connectedCallback() {
    this.appendChild(this._fromLabel);
    this.appendChild(this._fromValue);
    this.appendChild(document.createElement("br"));
    this.appendChild(this._subject);
  }
}
customElements.define("email-info", EmailInfo);

function initializeUI() {
  const body = document.body;
  body.style.margin = "0";
  body.style.padding = "0";

  const emailInfoGreenRed = document.createElement("email-info");
  emailInfoGreenRed.style.setProperty("--from-bg-color", "green");
  emailInfoGreenRed.style.setProperty("--subject-bg-color", "red");

  const emailInfoDefault = document.createElement("email-info");

  body.appendChild(emailInfoGreenRed);
  body.appendChild(emailInfoDefault);
};

function main() {
  initializeUI();
};

document.addEventListener("DOMContentLoaded", main);
