$(document).ready(async () => {

  lista = await read("ListaPalabras");

  lista.forEach(element => {
    $("#listPalabras").append(`<li>${element}</li>`);
  });

  $("#btnPintar").click(async () => {

    $("#listPalabras").html("");

    lista.push($("#txtNombre").val())
    let resultado = await save("ListaPalabras", lista);
    var response = await read("ListaPalabras");
    console.log(response);
    for (item in response) {
      $("#listPalabras").append(`<li>${response[item]}</li>`);
    }
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      console.log(tabs);
      chrome.tabs.executeScript(tabs[0].id, { file: "./util/bloquea.js" });
    });

  });

});