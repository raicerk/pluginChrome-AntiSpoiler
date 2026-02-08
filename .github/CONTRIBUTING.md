# Guía de Contribución

¡Gracias por tu interés en contribuir a Anti-Spoiler Chrome Extension! 🎉

## Cómo Contribuir

### Reportar Bugs 🐛

Si encuentras un bug:

1. Verifica que no exista un issue similar en [Issues](https://github.com/raicerk/pluginChrome-AntiSpoiler/issues)
2. Crea un nuevo issue incluyendo:
   - Título descriptivo
   - Descripción detallada del problema
   - Pasos para reproducir el bug
   - Comportamiento esperado vs comportamiento actual
   - Capturas de pantalla (si aplica)
   - Versión de Chrome y sistema operativo
   - Consola de errores (F12 → Console)

### Sugerir Mejoras 💡

Para proponer nuevas características:

1. Abre un issue con la etiqueta `enhancement`
2. Describe la funcionalidad que te gustaría ver
3. Explica por qué sería útil
4. Proporciona ejemplos de uso si es posible

### Pull Requests 🔀

#### Antes de Empezar

1. **Fork** el repositorio
2. **Clona** tu fork localmente
3. Crea una **rama** desde `master`:
   ```bash
   git checkout -b feature/nombre-descriptivo
   ```

#### Desarrollo

1. **Instala la extensión** en modo desarrollo:
   - Abre `chrome://extensions/`
   - Activa "Modo de desarrollador"
   - Carga la carpeta del proyecto

2. **Realiza tus cambios**:
   - Sigue el estilo de código existente
   - Comenta código complejo
   - Prueba tus cambios exhaustivamente

3. **Verifica que funcione**:
   - Prueba en diferentes sitios web
   - Verifica la consola de errores
   - Recarga la extensión para confirmar cambios

#### Commits

Usa mensajes de commit descriptivos:

```bash
# Bueno ✅
git commit -m "Agrega soporte para expresiones regulares en palabras bloqueadas"

# Malo ❌
git commit -m "fix"
```

Formato recomendado:
- `feat:` Nueva característica
- `fix:` Corrección de bug
- `docs:` Cambios en documentación
- `style:` Cambios de formato (sin afectar código)
- `refactor:` Refactorización de código
- `test:` Agregar/modificar tests
- `chore:` Mantenimiento general

#### Enviar PR

1. **Push** tu rama:
   ```bash
   git push origin feature/nombre-descriptivo
   ```

2. Abre un **Pull Request** en GitHub

3. **Completa la plantilla** del PR:
   - Descripción clara de los cambios
   - Referencia a issues relacionados (#123)
   - Capturas de pantalla para cambios visuales
   - Lista de verificación completada

4. **Espera la revisión** y responde a comentarios

## Estándares de Código

### JavaScript

- Usa **ES6+** cuando sea posible
- **Indentación**: 2 espacios (no tabs)
- **Punto y coma**: Obligatorio
- **Comillas**: Simples `'` para strings
- **Nombres**: camelCase para variables/funciones

Ejemplo:
```javascript
// Bueno ✅
const palabrasBloqueadas = [];

function aplicarBloqueo(elemento) {
  if (elemento.textContent) {
    elemento.classList.add('bloqueado');
  }
}

// Malo ❌
var PalabrasBloqueadas = []

function AplicarBloqueo(elemento)
{
    if(elemento.textContent)
        elemento.classList.add('bloqueado')
}
```

### HTML/CSS

- **Indentación**: 2 espacios
- **Clases CSS**: kebab-case
- **IDs**: camelCase
- **Comentarios**: Para secciones complejas

### Estructura de Archivos

- `util/`: Scripts de utilidad y lógica principal
- `popup/`: Interfaz del popup
- `asset/`: Recursos estáticos (imágenes, CSS)
- `manifest.json`: Configuración de la extensión

## Manifest V3

Este proyecto usa **Manifest V3**. Consideraciones importantes:

- ❌ **No usar** `eval()` o `new Function()`
- ❌ **No usar** scripts inline en HTML
- ✅ **Declarar** todos los scripts en `manifest.json`
- ✅ **Usar** Content Security Policy correcto

## Testing

Antes de enviar tu PR, prueba:

- ✅ Funciona en páginas estáticas
- ✅ Funciona en SPAs (React, Angular, Vue)
- ✅ Funciona en inputs y textareas
- ✅ No genera errores en consola
- ✅ El popup abre y cierra correctamente
- ✅ Las palabras se guardan/eliminan correctamente
- ✅ El blur se aplica/remueve correctamente

### Sitios de Prueba Recomendados

- Wikipedia (contenido estático)
- Twitter/X (SPA con contenido dinámico)
- Reddit (comentarios dinámicos)
- YouTube (descripción y comentarios)
- Gmail (inputs y textareas)

## Permisos

Si tu cambio requiere nuevos permisos de Chrome:

1. Agrégalos a `manifest.json`
2. Documenta **por qué** son necesarios
3. Actualiza `PRIVACY.md` si afecta privacidad

## Documentación

Si modificas comportamiento existente:

- 📝 Actualiza el README.md
- 📝 Actualiza comentarios en código
- 📝 Agrega ejemplos si es necesario

## Código de Conducta

- 🤝 Sé respetuoso y constructivo
- 💬 Comunicate claramente
- 🌍 Recuerda que hay personas detrás del código
- 🎯 Enfócate en mejorar el proyecto

## ¿Necesitas Ayuda?

- 📖 Lee la [documentación de Chrome Extensions](https://developer.chrome.com/docs/extensions/)
- 💬 Abre un issue con la etiqueta `question`
- 📧 Contacta al mantenedor

## Reconocimientos

Todos los contribuidores serán agregados al README en la sección de agradecimientos.

---

¡Gracias por hacer de Anti-Spoiler una mejor extensión! 🚀
