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

        array = await read(key);
        console.log(array);
        array.filter(e => e !== value)
        // chrome.storage.sync.remove(key,()=>{
        //     resolve("Se elimino correctamente")
        // });
        console.log(array);
        var res = await save(key,array);

        resolve("eliminado correctamente");
    });
}