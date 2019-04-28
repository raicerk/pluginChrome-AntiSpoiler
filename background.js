const alerta = () => {

  let nombre = document.getElementById('txtNombre').value;

  chrome.storage.local.get("nombre", item => {
    alert(`Saludiwis ${nombre} ${item.nombre}`);
  });

}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('btnPintar').addEventListener('click', alerta);
});