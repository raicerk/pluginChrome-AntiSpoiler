const handleCreated = tab => {
}

const init = async () => {
    chrome.tabs.onCreated.addListener(handleCreated);
}

const onUpdatedListener = async () => {

    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, tabs => {
        chrome.tabs.insertCSS(tabs[0].id, {
            file: "./asset/stylePulento.css"
        });
        chrome.tabs.executeScript(tabs[0].id, {
            file: "./util/jquery.min.js"
        }, () => {
            console.log(chrome.runtime.lastError)
        });
        chrome.tabs.executeScript(tabs[0].id, {
            file: "./util/util.js"
        }, () => {
            console.log(chrome.runtime.lastError)
        });
        chrome.tabs.executeScript(tabs[0].id, {
            file: "./util/bloquea.js"
        }, () => {
            console.log(chrome.runtime.lastError)
        });
    });
}

chrome.tabs.onActivated.addListener(onUpdatedListener);
chrome.tabs.onCreated.addListener(onUpdatedListener);
chrome.tabs.onUpdated.addListener(onUpdatedListener);

init();