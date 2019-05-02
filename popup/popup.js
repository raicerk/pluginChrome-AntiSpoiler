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

  $(document).on("click", ".Palabras", function () {
    var clickedBtnID = $(this).html();
    chrome.tabs.query({}, tabs => {
      for (tab in tabs) {
        chrome.tabs.executeScript(tab.id, { code: `$(":contains('` + clickedBtnID + `'):not(:has(:contains('` + clickedBtnID + `')))").removeClass('bloqueado')` });
      }
    });

  });

});

