// UI elements.

let backButton;
let forwardButton;
let pushButton;
let popToRootButton;
let historyIndexInfoSpan;
let historyCountInfoSpan;


// Event handling.

function handlePopStateEvent(e) {
  updateUI();
};

function handleBackButtonClick(e) {
  history.back();
};

function handleForwardButtonClick(e) {
  history.forward();
};

function handlePushButtonClick(e) {
  let historyIndex = 1;
  let currentState = history.state;
  if (currentState.historyIndex) {
    historyIndex = currentState.historyIndex + 1;
  }
  currentState.historyIndex = historyIndex;
  history.pushState(currentState, null, null);
  const popStateEvent = new PopStateEvent('popstate', { state: currentState });
  dispatchEvent(popStateEvent);
};

function handlePopToRootButtonClick(e) {
  const currentState = history.state;
  const historyIndex = currentState.historyIndex;
  history.go(-historyIndex);
};


// Rendering.

function updateUI() {
  const currentState = history.state;
  const historyIndex = currentState.historyIndex;
  const historyCount =
      (history.length - currentState.firstKnownHistoryLength) + 1;

  if (historyIndex < 1) {
    backButton.disabled = true;
    popToRootButton.disabled = true;
  } else {
    backButton.disabled = false;
    popToRootButton.disabled = false;
  }
  if (historyIndex == historyCount - 1) {
    forwardButton.disabled = true;
  } else {
    forwardButton.disabled = false;
  }
  historyIndexInfoSpan.innerHTML = "historyIndex: " + historyIndex;
  historyCountInfoSpan.innerHTML = "historyCount: " + historyCount;
};

function initializeUI() {
  const bodyContentDiv = document.createElement("div");

  // back button
  backButton = document.createElement("button");
  backButton.innerHTML = "Back";
  backButton.addEventListener("click", handleBackButtonClick);
  bodyContentDiv.appendChild(backButton);

  // forward button
  forwardButton = document.createElement("button");
  forwardButton.innerHTML = "Forward";
  forwardButton.addEventListener("click", handleForwardButtonClick);
  bodyContentDiv.appendChild(forwardButton);

  // push button
  pushButton = document.createElement("button");
  pushButton.innerHTML = "Push +1";
  pushButton.addEventListener("click", handlePushButtonClick);
  bodyContentDiv.appendChild(pushButton);

  // pop button (does same as back)
  popToRootButton = document.createElement("button");
  popToRootButton.innerHTML = "Pop to root";
  popToRootButton.addEventListener("click", handlePopToRootButtonClick);
  bodyContentDiv.appendChild(popToRootButton);

  // line breaks
  bodyContentDiv.appendChild(document.createElement("br"));
  bodyContentDiv.appendChild(document.createElement("br"));

  // history length info span
  historyIndexInfoSpan = document.createElement("span");
  bodyContentDiv.appendChild(historyIndexInfoSpan);
  bodyContentDiv.appendChild(document.createElement("br"));

  // history state info span
  historyCountInfoSpan = document.createElement("span");
  bodyContentDiv.appendChild(historyCountInfoSpan);
  bodyContentDiv.appendChild(document.createElement("br"));

  const body = document.body;
  body.appendChild(bodyContentDiv);
};


// Start-up.

async function main() {
  if (!history.state) {
    const initialState = {
        historyIndex: 0,
        firstKnownHistoryLength: history.length
    };
    await history.replaceState(initialState, null, null);
  }
  initializeUI();
  updateUI();
  window.addEventListener("popstate", handlePopStateEvent);
};
document.addEventListener("DOMContentLoaded", main);










// TODO: Re-take this re-vamp:
/*

// UI elements.

let _backButton;
let _forwardButton;
let _pushButton;
let _popToRootButton;
let _historyLengthInfoSpan;
let _historyStateInfoSpan;
let _windowLocationInfoSpan;
let _lastEventSpan;


// Event handling.

function handlePopStateEvent(e) {
  // TODO: might need to combine this with pushState to keep track of
  // history index (history.length is all of the tab's history).
};

function handleBackButtonClick(e) {
  history.back();
  updateUI();
};

function handleForwardButtonClick(e) {
  history.forward();
  updateUI();
};

function handlePushButtonClick(e) {
  // TODO
  // * history.pushState()
  // OR?
  // * window.location
    // * set
  updateUI();
};

function handlePopToRootButtonClick(e) {
  // TODO
  // history.go()
  updateUI();
};


// Rendering.

function updateInfoSpansWithLastEvent(lastEvent) {
  _historyLengthInfoSpan.innerHTML = "history.length: " + history.length;
  _historyStateInfoSpan.innerHTML = "history.state: " + history.state;
  _windowLocationInfoSpan.innerHTML = "window.location: " + window.location.toString();
  _lastEventSpan.innerHTML = "Last event: " + lastEvent;
};

function updateUI() {
  // TODO: length includes all of the tab's history, so won't work.
  if (history.length < 2) {
    _backButton.disabled = true;
    _forwardButton.disabled = true;
    _popToRootButton.disabled = true;
  }
  updateInfoSpansWithLastEvent(null);
};

function initializeUI() {
  const bodyContentDiv = document.createElement("div");

  // back button
  _backButton = document.createElement("button");
  _backButton.innerHTML = "Back";
  _backButton.addEventListener("click", handleBackButtonClick);
  bodyContentDiv.appendChild(_backButton);

  // forward button
  _forwardButton = document.createElement("button");
  _forwardButton.innerHTML = "Forward";
  _forwardButton.addEventListener("click", handleForwardButtonClick);
  bodyContentDiv.appendChild(_forwardButton);

  // push button
  _pushButton = document.createElement("button");
  _pushButton.innerHTML = "Push +1";
  _pushButton.addEventListener("click", handlePushButtonClick);
  bodyContentDiv.appendChild(_pushButton);

  // pop button (does same as back)
  _popToRootButton = document.createElement("button");
  _popToRootButton.innerHTML = "Pop to root";
  _popToRootButton.addEventListener("click", handlePopToRootButtonClick);
  bodyContentDiv.appendChild(_popToRootButton);

  // line breaks
  bodyContentDiv.appendChild(document.createElement("br"));
  bodyContentDiv.appendChild(document.createElement("br"));

  // history length info span
  _historyLengthInfoSpan = document.createElement("span");
  bodyContentDiv.appendChild(_historyLengthInfoSpan);
  bodyContentDiv.appendChild(document.createElement("br"));

  // history state info span
  _historyStateInfoSpan = document.createElement("span");
  bodyContentDiv.appendChild(_historyStateInfoSpan);
  bodyContentDiv.appendChild(document.createElement("br"));

  // window location info span
  _windowLocationInfoSpan = document.createElement("span");
  bodyContentDiv.appendChild(_windowLocationInfoSpan);
  bodyContentDiv.appendChild(document.createElement("br"));

  // last event span
  _lastEventSpan = document.createElement("span");
  bodyContentDiv.appendChild(_lastEventSpan);
  bodyContentDiv.appendChild(document.createElement("br"));

  const body = document.body;
  body.appendChild(bodyContentDiv);

  updateUI();
};


// Start-up.

function main() {
  initializeUI();
  window.addEventListener("popstate", handlePopStateEvent);
};
document.addEventListener("DOMContentLoaded", main);
*/
