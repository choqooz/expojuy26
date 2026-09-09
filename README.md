# ExpoJuy 2026 — Prototipo navegable

Prototipo de una experiencia digital para ExpoJuy 2026. Demuestra arquitectura de información, identidad visual, navegación y planificación local; no es un sitio oficial ni un sistema operativo del evento.

Demo: https://choqooz.github.io/expojuy26/

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

## Instituciones y patrocinios

La interfaz separa explícitamente los roles:

- **Organizadores:** Ministerio de Desarrollo Económico y Producción de Jujuy / Dirección Provincial de Servicios Basados en el Conocimiento; Cámara de Comercio Exterior de Jujuy.
- **Acompañamiento institucional:** ClusteAR — Cámara de Empresas TICs.
- **Sponsors de muestra:** cuatro marcas originales y demostrativas inspiradas en sectores productivos de Jujuy. No son empresas reales ni sponsors confirmados.

No se presentan a organizadores o instituciones acompañantes como sponsors. Las marcas de muestra usan símbolos geométricos originales, no logotipos externos ni identidades de empresas reales.

## Diseño, accesibilidad y respuesta

La dirección visual usa la tipografía Ambit y la paleta autorizada de cyan, violeta, lila y grafito. Incluye objetivos táctiles mínimos de 44 px, navegación por teclado, foco visible, enlace para saltar al contenido, landmarks semánticos, `aria-live` para Mi Expo, FAQ nativo y respeto por preferencias de reducción de movimiento y ahorro de datos.

## Fuera de alcance

No incluye backend, CMS, autenticación, analítica, seguimiento, servicios de mapas, formularios, pagos, integraciones externas, publicación de datos oficiales ni gestión de contenidos de producción.
