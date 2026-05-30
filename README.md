# Líderes del Valle — Sitio web (Next.js)

Sitio web del proyecto educativo **Líderes del Valle** (Cochabamba, Bolivia).
Construido con **Next.js 14** (App Router) y **React 18**.

## Requisitos
- Node.js 18.18 o superior

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre <http://localhost:3000> en tu navegador.

Para una compilación de producción:

```bash
npm run build
npm start
```

## Estructura

```
app/
  layout.js            Layout raíz: fuentes (next/font), Nav y Footer
  globals.css          Sistema de diseño completo (paleta, tipografía, componentes)
  page.js              Inicio
  programa/page.js     El Programa (pilares + 3 módulos)
  convocatoria/page.js Convocatoria 2026 (cronograma expandible)
  equipo/page.js       Equipo / Directiva (tarjetas halftone)
  postulacion/page.js  Formulario de postulación con validación
  contacto/page.js     Contacto
components/
  Nav.js               Barra de navegación (responsive)
  Footer.js            Pie de página
  ui.js                Hooks y piezas compartidas (reveal, Counter, Logo, etc.)
lib/
  data.js              TODO el contenido editable (módulos, cronograma, equipo…)
public/
  logo.png             Logo de la marca
```

## Editar el contenido

Casi todo el texto del sitio vive en **`lib/data.js`**: módulos, cronograma,
beneficios, criterios de evaluación, pasos de postulación, equipo y datos de
contacto. Edita ahí sin tocar los componentes.

## Personalizar

- **Colores y tipografía:** variables CSS al inicio de `app/globals.css`
  (`--burgundy`, `--navy`, `--accent`, `--cream`, etc.).
- **Estilo de portada:** en `app/page.js`, cambia la constante `HERO_VARIANT`
  a `"A"` (editorial) o `"B"` (tipográfica con montañas).
- **Imágenes:** los bloques `.ph` son marcadores de posición; reemplázalos por
  `<Image>` de Next.js con fotos reales.

## Pendientes sugeridos

- Conectar el formulario de postulación a un backend, correo o Google Form
  (hoy valida y muestra confirmación en el cliente).
- Reemplazar las estadísticas de ejemplo (340+, 48, 120, 18) por datos reales.
- Sustituir los marcadores de foto por imágenes reales del proyecto.
