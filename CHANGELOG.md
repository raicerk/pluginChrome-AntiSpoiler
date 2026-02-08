# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

## [1.0.20] - 2026-02-08

### 🎉 Características Principales

#### Agregado
- ✨ **Soporte para contenido dinámico**: MutationObserver detecta cambios en SPAs (React, Angular, Vue)
- ✨ **Blur en campos de texto**: Funciona en inputs, textareas y elementos editables
- ✨ **Interfaz moderna**: Popup renovado con diseño limpio, Font Awesome y validación en tiempo real
- ✨ **Búsqueda optimizada**: TreeWalker API para recorrido eficiente de nodos de texto
- ✨ **Bloqueo preciso**: Solo desenfoca el elemento específico que contiene la palabra
- 🗑️ **Eliminación de palabras**: Botón de papelera para cada palabra con feedback inmediato
- 💾 **Persistencia local**: Chrome Storage API para guardar palabras entre sesiones

#### Corregido
- 🐛 Fixed TrustedHTML error al migrar a Manifest V3
- 🐛 Fixed clase `.bloqueado` no se aplicaba correctamente al DOM
- 🐛 Fixed blur se aplicaba a elementos padre en lugar del elemento específico
- 🐛 Fixed palabras eliminadas reaparecían al agregar nuevas palabras
- 🐛 Fixed blur no funcionaba en navegación SPA sin recargar página
- 🐛 Fixed palabras en inputs/textareas no se detectaban

#### Mejorado
- ⚡ Rendimiento optimizado con TreeWalker en lugar de búsquedas recursivas
- 🎯 Lógica de escalado jerárquico para evitar bloquear iconos y botones
- 🔄 Re-aplicación automática de blur al detectar cambios en el DOM
- 📝 Validación de entrada: previene duplicados y palabras vacías
- 🎨 UI moderna con Roboto font y animaciones suaves

#### Técnico
- 📦 Migración completa a **Manifest V3**
- 🔒 Content Security Policy actualizado
- 📋 Content scripts declarados estáticamente en manifest
- 🧹 Código limpio y optimizado
- 📚 Documentación ampliada

### 🔒 Seguridad y Privacidad
- ✅ Sin transmisión de datos externos
- ✅ Almacenamiento 100% local
- ✅ Sin tracking ni analytics
- ✅ Política de privacidad incluida

---

## [1.0.0] - [Fecha Inicial]

### Agregado
- 🎬 Funcionalidad base de bloqueo de spoilers
- 📝 Agregar palabras a lista de bloqueo
- 🎨 Efecto de blur mediante CSS
- 💾 Almacenamiento local de palabras
- 🔧 Popup básico para gestión

---

## Tipos de Cambios

- `Agregado` para nuevas características
- `Cambiado` para cambios en funcionalidad existente
- `Obsoleto` para características que serán removidas
- `Eliminado` para características removidas
- `Corregido` para corrección de bugs
- `Seguridad` para vulnerabilidades

---

## Roadmap

### [1.1.0] - Próxima versión

#### Planificado
- [ ] Publicación en Chrome Web Store
- [ ] Capturas de pantalla oficiales
- [ ] Soporte multiidioma (ES/EN/PT)
- [ ] Configuración de intensidad de blur
- [ ] Contador de palabras bloqueadas
- [ ] Exportar/importar lista de palabras

### [1.2.0] - Futuro

#### En Consideración
- [ ] Sincronización entre dispositivos vía Chrome Sync
- [ ] Expresiones regulares en palabras
- [ ] Categorías de palabras (películas, deportes, etc.)
- [ ] Estadísticas de uso
- [ ] Modo whitelist
- [ ] Atajos de teclado personalizables
- [ ] Diferentes estilos de censura (pixelado, negro, difuminado)

### [2.0.0] - Largo plazo

#### Visión
- [ ] Soporte para Firefox y Edge
- [ ] Machine Learning para detección automática de spoilers
- [ ] Comunidad: compartir listas curadas
- [ ] API pública para integraciones
- [ ] Modo temporal: bloquear palabras por tiempo limitado

---

**Nota**: Las fechas y características del roadmap son tentativas y pueden cambiar según las necesidades de los usuarios y contribuciones de la comunidad.

[1.0.20]: https://github.com/raicerk/pluginChrome-AntiSpoiler/releases/tag/v1.0.20
[1.0.0]: https://github.com/raicerk/pluginChrome-AntiSpoiler/releases/tag/v1.0.0
