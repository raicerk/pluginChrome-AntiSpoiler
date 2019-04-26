
var data = () => {
  // Called when the user clicks on the browser action.
  chrome.browserAction.onClicked.addListener(function (tab) {
    // No tabs or host permissions needed!
    console.log('Turning ' + tab.url + ' red!');
    chrome.tabs.executeScript({
      code: 'document.body.style.backgroundColor="red"'
    });
  });
}

function pintar() {
  console.log("pinte");
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="red"'
  });
}

function data() {
  // Called when the user clicks on the browser action.
  chrome.browserAction.onClicked.addListener(function (tab) {
    // No tabs or host permissions needed!
    console.log('Turning ' + tab.url + ' red!');
    chrome.tabs.executeScript({
      code: 'document.body.style.backgroundColor="red"'
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("btnPintar").addEventListener("click", pintar);
});


//'unsafe-inline'

function init() {
  data();
}

init();