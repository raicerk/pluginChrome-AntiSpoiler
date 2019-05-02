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