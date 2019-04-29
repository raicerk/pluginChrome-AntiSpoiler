const init = async () => {

    var lista = []
    var dato = await save("ListaPalabras", lista);

    /**
     * Funciona cuando se abre una nueva pestaña
     * @param {*} tab 
     */
    function handleCreated(tab) {
        console.log(tab.id);
    }

    chrome.tabs.onCreated.addListener(handleCreated);
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
}


chrome.tabs.onActivated.addListener(onUpdatedListener);