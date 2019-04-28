const RescataListaPalabras = () => {
    chrome.storage.sync.get("listaPalabras", item => {
        console.log(item);
    });
}

const init = () => {

    /**
     * Funciona cuando se abre una nueva pestaña
     * @param {*} tab 
     */
    function handleCreated(tab) {
        console.log(tab.id);
    }

    chrome.tabs.onCreated.addListener(handleCreated);

    $(document).ready(() => {

        $("#btnPintar").click(() => {
            RescataListaPalabras();
        });
    });
}

init();

const onUpdatedListener = () => {
    chrome.tabs.query({
        active: true,
        windowType: "normal",
        currentWindow: true
    }, x => {
        console.log(x);
    })
    RescataListaPalabras();
}


chrome.tabs.onActivated.addListener(onUpdatedListener);