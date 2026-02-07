$(document).ready(async () => {
  let lista = await read("ListaPalabras");
  if (!Array.isArray(lista)) lista = [];

  function renderLista(lista) {
    const ul = document.getElementById("listPalabras");
    ul.innerHTML = "";
    if (lista.length === 0) {
      $("#emptyList").show();
    } else {
      $("#emptyList").hide();
    }
    lista.forEach(element => {
      const li = document.createElement('li');
      li.textContent = element;
      // Botón eliminar
      const btn = document.createElement('button');
      btn.className = 'delete-btn';
      btn.title = 'Eliminar';
      btn.innerHTML = '<i class="fa fa-trash"></i>';
      btn.onclick = async (e) => {
        e.stopPropagation();
        // Leer lista actualizada antes de eliminar
        let listaActual = await read("ListaPalabras");
        if (!Array.isArray(listaActual)) listaActual = [];
        listaActual = listaActual.filter(item => item !== element);
        await save("ListaPalabras", listaActual);
        renderLista(listaActual);
        await notificarBloqueo();
        lista = listaActual; // Actualizar variable local
      };
      li.appendChild(btn);
      ul.appendChild(li);
    });
  }

  renderLista(lista);

  async function notificarBloqueo() {
    try {
      await new Promise((resolve, reject) => {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
          if (!tabs[0]) return resolve();
          chrome.tabs.sendMessage(tabs[0].id, { action: "aplicarBloqueo" }, function(response) {
            resolve();
          });
        });
      });
    } catch (e) {}
  }

  $("#btnPintar").click(async () => {
    const input = document.getElementById("txtNombre");
    const feedback = document.getElementById("feedback");
    let newPalabra = input.value.trim();
    // Leer lista actualizada antes de agregar
    let listaActual = await read("ListaPalabras");
    if (!Array.isArray(listaActual)) listaActual = [];
    if (!newPalabra) {
      feedback.textContent = "Por favor, escribe una palabra.";
      feedback.style.display = "block";
      input.focus();
      return;
    }
    if (listaActual.some(x => x.toLowerCase() === newPalabra.toLowerCase())) {
      feedback.textContent = "La palabra ya está en la lista.";
      feedback.style.display = "block";
      input.value = "";
      input.focus();
      return;
    }
    feedback.style.display = "none";
    listaActual.push(newPalabra);
    await save("ListaPalabras", listaActual);
    renderLista(listaActual);
    await notificarBloqueo();
    input.value = "";
    input.focus();
    lista = listaActual; // Actualizar variable local
  });

  $("#txtNombre").on('keydown', function(e) {
    if (e.key === 'Enter') {
      $("#btnPintar").click();
    }
  });
});

