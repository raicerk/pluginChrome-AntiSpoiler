const alerta = (nombre) => {
  alert(`Saludiwis ${nombre}`);
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('btnPintar').addEventListener('click', alerta.bind(null,"juan"));
});