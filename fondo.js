const saludo = () => {
    
    console.log("holwis")

    chrome.storage.local.set({ "nombre": "juan" }, () => {
        console.log("datos almacenados");
    });

}

const init = () => {
    saludo();
}

init();