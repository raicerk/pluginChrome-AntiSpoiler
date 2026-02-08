# 🛡️ Anti-Spoiler Chrome Extension

> Extensión para Chrome que protege tu experiencia web bloqueando automáticamente spoilers y palabras no deseadas.

[![Chrome Web Store](https://img.shields.io/badge/Chrome-Web%20Store-blue?logo=google-chrome)](https://chrome.google.com/webstore)
[![Version](https://img.shields.io/badge/version-1.0.20-green.svg)](https://github.com/raicerk/pluginChrome-AntiSpoiler)
[![Manifest](https://img.shields.io/badge/manifest-v3-orange.svg)](https://developer.chrome.com/docs/extensions/mv3/intro/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 📖 Descripción

**Anti-Spoiler** es una extensión liviana y eficiente para Google Chrome que te permite crear una lista personalizada de palabras o frases que deseas bloquear en cualquier sitio web. Cuando la extensión encuentra estas palabras, aplica automáticamente un **efecto de desenfoque (blur)** sobre el texto, protegiéndote de spoilers y contenido no deseado.

Perfecto para:
- 🎬 Evitar spoilers de películas y series
- 📺 Protegerte de resultados deportivos antes de ver el partido
- 🎮 Evitar revelar tramas de videojuegos
- 📰 Filtrar contenido sensible o no deseado
- 🔍 Navegar sin preocupaciones por temas específicos

## ✨ Características

- ✅ **Bloqueo en tiempo real**: Detecta y bloquea palabras instantáneamente al cargar la página
- 🔄 **Compatible con SPAs**: Funciona en sitios modernos con contenido dinámico (React, Angular, Vue)
- 📝 **Campos de texto incluidos**: Bloquea palabras en inputs, textareas y contenido editable
- 🎯 **Bloqueo preciso**: Solo desenfoca el elemento específico que contiene la palabra, no toda la página
- 💾 **Persistencia local**: Tus palabras bloqueadas se guardan localmente en tu navegador
- 🎨 **Interfaz moderna**: Popup limpio e intuitivo para gestionar tu lista
- ⚡ **Rendimiento optimizado**: Usa TreeWalker y MutationObserver para máxima eficiencia
- 🔒 **100% privado**: No envía datos externos, todo funciona localmente

## 📸 Capturas de Pantalla

### Popup de la Extensión
![Popup](.github/screenshots/popup.png)
*Interfaz simple para agregar y eliminar palabras bloqueadas*

### Blur en Acción
![Blur Effect](.github/screenshots/blur-example.png)
*Las palabras bloqueadas aparecen desenfocadas automáticamente*

## 🚀 Instalación

### Desde Chrome Web Store (Recomendado)

1. Visita la [página de la extensión en Chrome Web Store](#) *(próximamente)*
2. Haz clic en **"Añadir a Chrome"**
3. Confirma los permisos solicitados
4. ¡Listo! El icono aparecerá en tu barra de herramientas

### Instalación Manual (Desarrollo)

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/raicerk/pluginChrome-AntiSpoiler.git
   cd pluginChrome-AntiSpoiler
   ```

2. **Abre Chrome y ve a las extensiones**:
   - Escribe `chrome://extensions/` en la barra de direcciones
   - O ve a Menú ⋮ → Más herramientas → Extensiones

3. **Activa el Modo de Desarrollador**:
   - Activa el switch en la esquina superior derecha

4. **Carga la extensión**:
   - Haz clic en **"Cargar extensión sin empaquetar"**
   - Selecciona la carpeta del proyecto clonado
   - La extensión se instalará y aparecerá en tu barra de herramientas

## 📚 Uso

### Agregar Palabras Bloqueadas

1. Haz clic en el icono de la extensión en la barra de herramientas
2. Escribe la palabra o frase que deseas bloquear
3. Presiona el botón **+** o la tecla **Enter**
4. La palabra se agregará a tu lista y comenzará a bloquearse inmediatamente

### Eliminar Palabras

1. Abre el popup de la extensión
2. Encuentra la palabra que deseas eliminar
3. Haz clic en el icono de **papelera** (🗑️) junto a la palabra
4. La palabra se eliminará y el blur se removerá automáticamente

### Ver el Efecto

- Navega cualquier sitio web
- Cuando la extensión detecte una palabra bloqueada, aplicará un efecto de blur
- El blur se aplica en tiempo real, incluso en contenido que carga dinámicamente

## 🛠️ Tecnologías Utilizadas

- **Manifest V3**: La última versión del sistema de extensiones de Chrome
- **JavaScript (ES6+)**: Lógica principal de la extensión
- **jQuery 3.x**: Manipulación del DOM y selectores eficientes
- **Chrome Storage API**: Almacenamiento local persistente
- **TreeWalker API**: Recorrido eficiente de nodos de texto
- **MutationObserver API**: Detección de cambios dinámicos en el DOM
- **CSS3**: Efectos de blur y estilos modernos
- **Font Awesome**: Iconografía de la interfaz

## 📁 Estructura del Proyecto

```
pluginChrome-AntiSpoiler/
├── manifest.json           # Configuración de la extensión (Manifest V3)
├── README.md              # Este archivo
├── PRIVACY.md             # Política de privacidad
│
├── asset/                 # Recursos estáticos
│   ├── logo.png          # Icono de la extensión (128x128)
│   └── stylePulento.css  # Estilos CSS para el blur
│
├── popup/                 # Interfaz del popup
│   ├── popup.html        # Estructura HTML
│   └── popup.js          # Lógica de gestión de palabras
│
└── util/                  # Scripts de utilidad
    ├── bloquea.js        # Lógica principal de bloqueo
    ├── util.js           # Funciones auxiliares
    └── jquery.min.js     # jQuery 3.x minificado
```

## ⚙️ Cómo Funciona (Técnico)

### Content Script Injection
La extensión utiliza **Manifest V3** con content scripts declarados estáticamente para evitar problemas de CSP:

```javascript
"content_scripts": [{
  "matches": ["<all_urls>"],
  "js": ["util/jquery.min.js", "util/util.js", "util/bloquea.js"],
  "css": ["asset/stylePulento.css"]
}]
```

### Algoritmo de Detección

1. **Lectura de palabras bloqueadas**: Obtiene la lista desde `chrome.storage.local`

2. **Recorrido de texto con TreeWalker**: 
   ```javascript
   const walker = document.createTreeWalker(
     document.body,
     NodeFilter.SHOW_TEXT,
     null,
     false
   );
   ```

3. **Escalado de jerarquía**: Desde el nodo de texto, sube en el árbol DOM hasta encontrar el elemento visual más interno (evitando iconos, botones, SVG)

4. **Aplicación de clase CSS**: Agrega `.bloqueado` al elemento, que tiene `filter: blur(7px)`

5. **Detección en inputs**: Verifica atributos `value` de inputs y textareas

6. **MutationObserver**: Observa cambios en el DOM para re-aplicar blur en SPAs:
   ```javascript
   const observer = new MutationObserver(() => aplicarBloqueo());
   observer.observe(document.body, {
     childList: true,
     subtree: true,
     characterData: true
   });
   ```

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar esta extensión:

1. **Fork** el proyecto
2. Crea una **rama** para tu feature (`git checkout -b feature/mejora-increible`)
3. **Commit** tus cambios (`git commit -m 'Agrega mejora increíble'`)
4. **Push** a la rama (`git push origin feature/mejora-increible`)
5. Abre un **Pull Request**

### Ideas para Contribuir

- [ ] Importar/exportar listas de palabras
- [ ] Diferentes niveles de blur (leve, medio, fuerte)
- [ ] Soporte para expresiones regulares
- [ ] Modo whitelisting (bloquear todo excepto ciertas palabras)
- [ ] Sincronización entre dispositivos
- [ ] Estadísticas de palabras bloqueadas
- [ ] Temas personalizables

## 🐛 Reportar Bugs

Si encuentras un error o tienes una sugerencia:

1. Ve a la sección [Issues](https://github.com/raicerk/pluginChrome-AntiSpoiler/issues)
2. Verifica que no exista un issue similar
3. Crea un nuevo issue con:
   - Descripción clara del problema
   - Pasos para reproducirlo
   - Capturas de pantalla (si aplica)
   - Versión de Chrome y del sistema operativo

## 🗺️ Roadmap

### Versión 1.1
- [ ] Publicación en Chrome Web Store
- [ ] Capturas de pantalla oficiales
- [ ] Soporte multiidioma (ES/EN)

### Versión 1.2
- [ ] Niveles de blur configurables
- [ ] Sincronización con cuenta de Google
- [ ] Importar/exportar listas

### Versión 2.0
- [ ] Soporte para Firefox
- [ ] Machine Learning para detectar spoilers automáticamente
- [ ] Categorías de palabras (películas, deportes, etc.)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 👤 Autor

**Raicerk**

- GitHub: [@raicerk](https://github.com/raicerk)
- Proyecto: [pluginChrome-AntiSpoiler](https://github.com/raicerk/pluginChrome-AntiSpoiler)

## 🙏 Agradecimientos

- [Chrome Extensions Documentation](https://developer.chrome.com/docs/extensions/)
- [jQuery](https://jquery.com/)
- [Font Awesome](https://fontawesome.com/)
- A todos los usuarios que prueben y mejoren esta extensión

---

⭐ Si esta extensión te ha sido útil, ¡considera darle una estrella en GitHub!

**Hecho con ❤️ para proteger tu experiencia web**