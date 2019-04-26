const pintar = color => {
  console.log("me hicieron Click")
  // chrome.tabs.executeScript({
  //   code: `document.body.style.backgroundColor="${color}"`
  // });
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('btnPintar').addEventListener('click', pintar('blue'));
});