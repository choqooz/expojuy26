# Manual de ejecución y revisión

## Requisitos

- Node.js compatible con las dependencias incluidas.
- npm.

## Ejecutar el prototipo

```bash
npm ci
npm run dev
```

Abrir la URL local que informe Vite. Para revisar la versión de producción:

```bash
npm run check
npm run build
npm run preview
```

## Recorrido de revisión

1. Verificar navegación por anclas, enlace para saltar al contenido y menú móvil.
2. Guardar intereses, agenda o expositores en “Mi Expo”; recargar; reiniciar y comprobar que solo se elimina la clave local del prototipo.
3. Abrir “Entradas”, cerrar el diálogo y confirmar que el foco vuelve al activador.
4. Revisar el reel: en condiciones normales se reproduce localmente, sin controles, texto ni superposiciones; con reducción de movimiento permanece pausado.
5. Revisar la vista móvil en un viewport de 390 × 844 px y confirmar que no existe desplazamiento horizontal. La captura de página completa resultante es `evidencia/movil-390x844.png` y mide 375 × 13237 px; no representa el tamaño del viewport.

## Límites conocidos y deliberados

No hay backend, CMS, autenticación, analítica, formularios, pagos, servicios de mapas, redes sociales ni información oficial operativa. Las imágenes locales son ilustrativas; sus fuentes y licencias se documentan en `public/media/ATTRIBUTION.md`.
