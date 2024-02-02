class EmailInfo extends HTMLElement {
  constructor() {
    super();
    this._fromLabel = document.createElement("span");
    this._fromLabel.innerHTML = "From: ";
    this._fromValue = document.createElement("span");
    this._fromValue.innerHTML = "rogelio@gudino.com";
    this._fromValue.style.backgroundColor = "var(--from-bg-color)";
    this._subject = document.createElement("span");
    this._subject.innerHTML = "This is the subject";
    this._subject.style.backgroundColor = "var(--subject-bg-color)";
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
  const html = document.body;
  html.style.margin = "0";
  html.style.padding = "0";

  const emailInfo = document.createElement("email-info");
  emailInfo.style.setProperty("--from-bg-color", "green");
  emailInfo.style.setProperty("--subject-bg-color", "red");

  const body = document.body;
  body.appendChild(emailInfo);
};

function main() {
  initializeUI();
};

document.addEventListener("DOMContentLoaded", main);
