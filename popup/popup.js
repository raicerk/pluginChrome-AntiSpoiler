$(document).ready(async () => {

  lista = await read("ListaPalabras");

  lista.forEach(element => {
    $("#listPalabras").append(`<li class='Palabras'>${element}</li>`);
  });

  $("#btnPintar").click(async () => {

    $("#listPalabras").html("");

    lista.push($("#txtNombre").val())
    let resultado = await save("ListaPalabras", lista);
    var response = await read("ListaPalabras");
    console.log(response);
    for (item in response) {
      $("#listPalabras").append(`<li class='Palabras'>${response[item]}</li>`);
    }
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.insertCSS(tabs[0].id, { file: "./asset/stylePulento.css" });
      chrome.tabs.executeScript(tabs[0].id, { file: "./util/bloquea.js" });
    });
  });

  $(document).on("click", ".Palabras", async function () {
    var palabra = $(this).html();
    console.log(palabra)
    $(this).remove();
    var res = await remove("ListaPalabras",palabra);
    var kk = await read("ListaPalabras");
    console.log(res)
    console.log(kk)
    console.log(lista)
    chrome.tabs.query({}, tabs => {
      for (tab in tabs) {
        chrome.tabs.executeScript(tab.id, { code: `$(":contains('` + palabra + `'):not(:has(:contains('` + palabra + `')))").removeClass('bloqueado')` });
      }
    });

  });

});

