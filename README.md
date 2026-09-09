# ExpoJuy 2026 — Prototipo navegable

Prototipo de una experiencia digital para ExpoJuy 2026. Demuestra arquitectura de información, identidad visual, navegación y planificación local; no es un sitio oficial ni un sistema operativo del evento.

## Inicio rápido

```bash
npm install
npm run dev
```

## Comandos

| Comando | Uso |
| --- | --- |
| `npm run dev` | Inicia el entorno local de Vite. |
| `npm run check` | Verifica TypeScript estricto sin generar archivos. |
| `npm run build` | Ejecuta la verificación y genera la versión estática en `dist/`. |
| `npm run preview` | Permite revisar localmente la compilación generada. |

## Alcance del prototipo

- Navegación por anclas y mapa conceptual de conexiones territoriales de Jujuy.
- `Mi Expo`: selección local de intereses, actividades y expositores demostrativos, persistida en `localStorage` sin cuentas, backend ni datos personales.
- Estado accesible `Próximamente` para entradas. No simula pagos, proveedores ni procesos de compra.

## Política de imágenes de Jujuy

Las fotografías locales son imágenes contextuales e ilustrativas de Jujuy. No documentan ExpoJuy 2026, su sede, agenda, expositores, autoridades, patrocinadores ni participantes. Cada uso visible se identifica como **Imagen ilustrativa** y conserva un texto alternativo factual.

La procedencia, las licencias, los enlaces de fuente, los hashes SHA-256, los recortes y los textos alternativos están documentados en [`public/media/ATTRIBUTION.md`](public/media/ATTRIBUTION.md). El inventario de consumo local está en [`public/media/sections/manifest.json`](public/media/sections/manifest.json). No se realizan solicitudes de imágenes remotas en tiempo de ejecución.

No se reutilizó ningún medio de los cuatro sitios de referencia: ExpoJuy 2024, Expo Industrias, Expo Logisti-k y Argentina Mining. Tampoco se reutilizaron sus fotografías, videos, logos, ilustraciones, CSS, código, textos ni layouts.

## Instituciones y patrocinios

La interfaz separa explícitamente los roles:

- **Organizadores:** Ministerio de Desarrollo Económico y Producción de Jujuy / Dirección Provincial de Servicios Basados en el Conocimiento; Cámara de Comercio Exterior de Jujuy.
- **Acompañamiento institucional:** ClusteAR — Cámara de Empresas TICs.
- **Sponsors de muestra:** cuatro marcas originales y demostrativas inspiradas en sectores productivos de Jujuy. No son empresas reales ni sponsors confirmados.

No se presentan a organizadores o instituciones acompañantes como sponsors. Las marcas de muestra usan símbolos geométricos originales, no logotipos externos ni identidades de empresas reales.

## Límites provisionales

No se inventan fechas, sede, precios, participantes, patrocinios, noticias, estadísticas, URLs oficiales ni proveedores. Las actividades, los expositores, el mapa y las novedades permanecen identificados como contenido demostrativo, conceptual o provisional hasta recibir confirmación oficial.

`Territorio en movimiento` es una adaptación audiovisual conceptual, silenciosa y original, editada exclusivamente a partir de cinco imágenes locales de Jujuy con atribución documentada. Se reproduce automáticamente y en bucle cuando el navegador no solicita reducción de movimiento ni ahorro de datos; en esos modos permanece pausada. No reutiliza metraje, audio ni gráficos de sitios de referencia y no es una grabación de ExpoJuy 2026. Sus archivos, fuentes, licencia CC BY-SA 4.0 y exclusión de las marcas oficiales constan en [`public/media/ATTRIBUTION.md`](public/media/ATTRIBUTION.md).

## Diseño, accesibilidad y respuesta

La dirección visual usa la tipografía Ambit y la paleta autorizada de cyan, violeta, lila y grafito. Incluye objetivos táctiles mínimos de 44 px, navegación por teclado, foco visible, enlace para saltar al contenido, landmarks semánticos, `aria-live` para Mi Expo, FAQ nativo y respeto por preferencias de reducción de movimiento y ahorro de datos.

## Fuera de alcance

No incluye backend, CMS, autenticación, analítica, seguimiento, servicios de mapas, formularios, pagos, integraciones externas, publicación de datos oficiales ni gestión de contenidos de producción.

## Entrega

La memoria descriptiva obligatoria, la declaración de uso de IA, las instrucciones de ejecución y los controles de presentación se encuentran en [`docs/entrega/README.md`](docs/entrega/README.md).
