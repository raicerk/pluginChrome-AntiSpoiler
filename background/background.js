const handleCreated = tab => {
    console.log(tab.id);
}

const init = async () => {
    console.log("se inicia otra vez")
    chrome.tabs.onCreated.addListener(handleCreated);
}

const onUpdatedListener = async () => {

    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        chrome.tabs.insertCSS(tabs[0].id,{file: "./asset/stylePulento.css"});
        chrome.tabs.executeScript(tabs[0].id,{file: "./util/jquery.min.js"});
        chrome.tabs.executeScript(tabs[0].id,{file: "./util/util.js"});
        chrome.tabs.executeScript(tabs[0].id,{file: "./util/bloquea.js"});
    });
}

chrome.tabs.onActivated.addListener(onUpdatedListener);
chrome.tabs.onCreated.addListener(onUpdatedListener);
chrome.tabs.onUpdated.addListener(onUpdatedListener);

init();