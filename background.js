
const guardaPalabras = async (palabra) => {
  var estado = await save("listaPalabras", palabra);
  console.log(estado);
}

$(document).ready(() => {

  $("#listPalabras").append("<li>hooooooo</li>");

  $("#btnPintar").click(() => {
    guardaPalabras($("#txtNombre").val());
  });

});