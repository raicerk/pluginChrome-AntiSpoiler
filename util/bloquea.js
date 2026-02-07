// Limpia el estado anterior antes de aplicar el blur
function aplicarBloqueo() {
    console.log('[AntiSpoiler] Ejecutando aplicarBloqueo...');
    $(".bloqueado").removeClass("bloqueado");
    read("ListaPalabras").then(res => {
        if (!Array.isArray(res)) res = [];
        // Busca todos los nodos de texto visibles
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode: function(node) {
                // Solo nodos de texto con contenido visible
                if (node.parentElement && $(node.parentElement).is(":visible") && node.nodeValue.trim().length > 0) {
                    return NodeFilter.FILTER_ACCEPT;
                }
                return NodeFilter.FILTER_REJECT;
            }
        });
        let node;
        let encontrados = 0;
        while ((node = walker.nextNode())) {
            const texto = node.nodeValue.toLowerCase();
            for (let palabra of res) {
                if (palabra && texto.includes(palabra.toLowerCase())) {
                    // Sube en la jerarquía hasta encontrar un span, div, o el primer elemento visual relevante
                    let el = node.parentElement;
                    while (el && (el.tagName === 'MAT-ICON' || el.tagName === 'BUTTON' || el.tagName === 'SVG' || el.tagName === 'SPAN' && el.textContent.trim() === '')) {
                        el = el.parentElement;
                    }
                    if (el) {
                        $(el).addClass("bloqueado");
                        encontrados++;
                        console.log(`[AntiSpoiler] Bloqueado: '${palabra}' en`, el, 'Texto:', texto);
                    }
                    break;
                }
            }
        }
        if (encontrados === 0) {
            console.log('[AntiSpoiler] No se encontraron coincidencias para bloquear.');
        }
    });
}

// Ejecutar solo cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', aplicarBloqueo);
} else {
    aplicarBloqueo();
}

// Escuchar mensajes desde el popup para volver a aplicar el bloqueo
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "aplicarBloqueo") {
        aplicarBloqueo();
    }
});