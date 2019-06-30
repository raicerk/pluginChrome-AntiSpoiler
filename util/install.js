chrome.runtime.onInstalled.addListener(async () => {
    var lista = []
    var dato = await save("ListaPalabras", lista);
});