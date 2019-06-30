$(document).ready(async () => {

  lista = await read("ListaPalabras");

  lista.forEach(element => {
    document.getElementById("listPalabras").appendChild(`<li class='Palabras'>${element}</li>`);
  });

  $("#btnPintar").click(async () => {

    var newPalabra = document.getElementById("txtNombre").value;

    document.getElementById("listPalabras").innerHTML = "";

    var index = lista.findIndex(x => x == newPalabra)

    if (index === -1) {
      lista.push(newPalabra)
    } else {
      console.log("La palabra ya existe")
    }

    let resultado = await save("ListaPalabras", lista);

    var response = await read("ListaPalabras");

    for (item in response) {
      document.getElementById("listPalabras").appendChild(`<li class='Palabras'>${response[item]}</li>`);
    }

    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, tabs => {
      chrome.tabs.insertCSS(tabs[0].id, {
        file: "./asset/stylePulento.css"
      });
      chrome.tabs.executeScript(tabs[0].id, {
        file: "./util/bloquea.js"
      }, () => {
        console.log(chrome.runtime.lastError)
      });
    });
  });

  document.addEventListener('click', async (event) => {

    if (event.target.className == "Palabras") {
      
      var palabra = event.target.innerText;

      event.target.remove();

      lista = lista.filter(item => item !== palabra)

      var res = await remove("ListaPalabras", palabra);

      var kk = await read("ListaPalabras");

      chrome.tabs.query({}, tabs => {
        for (tab in tabs) {
          chrome.tabs.executeScript(tabs[tab].id, {
            code: `$(":contains('${palabra}'):not(:has(:contains('${palabra}')))").removeClass('bloqueado')`
          }, () => {
            console.log(chrome.runtime.lastError)
          });
        }
      });
    }


  });
});

