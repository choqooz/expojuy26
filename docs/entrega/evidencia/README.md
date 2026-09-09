# Evidencia de interfaz

| Archivo | Contexto de verificación |
| --- | --- |
| `escritorio.png` | Captura de página completa desde viewport de escritorio 1440 × 900 px; PNG de salida 1425 × 9733 px. |
| `movil-390x844.png` | Captura de página completa desde viewport móvil 390 × 844 px; PNG de salida 375 × 13237 px. |

Las capturas se obtuvieron de la compilación de producción local después de simplificar el reel. Las dimensiones de salida corresponden al recorrido completo y no al viewport de captura. En escritorio y móvil se verificó ausencia de desplazamiento horizontal; el reel se reprodujo sin controles, poster, texto ni superposiciones. Con `prefers-reduced-motion: reduce`, el reel permaneció pausado sin restaurar controles ni poster.
