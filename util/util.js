const read = key => {
    return new Promise((resolve, reject) => {
        chrome.storage.sync.get(key, item => {
            resolve(item[key])
        });
    });
}

const save = (key, value) => {
    return new Promise((resolve, reject) => {
        chrome.storage.sync.set({ [key]: value }, () => {
            resolve("Datos almacenados correctamente");
        });
    });
}

const remove = (key, value) => {
    return new Promise(async (resolve, reject) => {
        var array = []
        var arrayFiltrado = []
        array = await read(key);
        arrayFiltrado = array.filter(e => e !== value)
        let res = await save(key, arrayFiltrado);
        resolve("eliminado correctamente");
    });
}