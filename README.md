<div align="center">

<img src="public/img/logo-mark.png" alt="Logo de Green Center Bolivia" width="96" />

# Green Center Bolivia

**Sitio web oficial de movilidad eléctrica en Bolivia.**
Motos, bicicletas, trimotos, autos y maquinaria eléctrica, con sucursales en Santa Cruz y Cochabamba.

[**Ver sitio en vivo →**](https://greencenterbolivia.com)

<br />

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-14-0055FF?logo=framer&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-11-F69220?logo=pnpm&logoColor=white)
![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-desplegado-F38020?logo=cloudflare&logoColor=white)

</div>

<!--
  Opcional: agrega una captura del sitio para que el README luzca aún mejor.
  1) Guarda la imagen en docs/screenshot.png
  2) Descomenta la línea de abajo:
  <p align="center"><img src="docs/screenshot.png" alt="Vista previa del sitio" width="900" /></p>
-->

---

## Contenido

- [Acerca del proyecto](#acerca-del-proyecto)
- [Características](#características)
- [Tecnologías](#tecnologías)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Primeros pasos](#primeros-pasos)
- [Variables de entorno](#variables-de-entorno)
- [Cómo editar el contenido](#cómo-editar-el-contenido)
- [Optimización de imágenes](#optimización-de-imágenes)
- [Despliegue en Cloudflare Pages](#despliegue-en-cloudflare-pages)
- [SEO y rendimiento](#seo-y-rendimiento)
- [Scripts disponibles](#scripts-disponibles)
- [Créditos y licencia](#créditos-y-licencia)

---

## Acerca del proyecto

Green Center Bolivia es una empresa importadora y comercializadora de vehículos eléctricos. Este repositorio contiene su sitio web: una _landing_ de una sola página, pensada primero para celular, que presenta la marca, el catálogo completo, comparativas para quien no sabe de motos, una calculadora de ahorro y las sucursales con acceso directo a WhatsApp.

El objetivo del diseño es transmitir una marca **ecológica, premium y cercana**, con animaciones suaves que acompañan la lectura sin estorbarla.

## Características

- **Hero animado** con arcos que se expanden de forma automática y acompañan al titular.
- **Catálogo con filtros** por categoría (motos y scooters, bicicletas y bicimotos, trimotos, autos y maquinaria industrial), con panel lateral de detalle por modelo: especificaciones, colores, garantía y botón de consulta.
- **"¿Para qué la vas a usar?"**, un selector que recomienda el tipo de vehículo según el uso, para quien no conoce de motos.
- **Calculadora de ahorro** con controles ajustables: compara el gasto en gasolina con el de un vehículo eléctrico y estima el ahorro anual.
- **Comparativa** lado a lado entre tipos de vehículo y sección de beneficios.
- **Sucursales** con esquema animado de la ciudad, mapa real de Google Maps y botones de "Cómo llegar" y WhatsApp por sucursal.
- **WhatsApp en todo el sitio**: botón flotante, barra de navegación y mensajes prellenados con el modelo consultado.
- **Diseño responsive** y respeto por `prefers-reduced-motion`.
- **SEO técnico**: metadatos, Open Graph, `sitemap.xml`, `robots.txt` y datos estructurados (JSON-LD) de las sucursales.

## Tecnologías

| Área               | Herramienta                                                             |
| ------------------ | ----------------------------------------------------------------------- |
| Framework          | [Next.js 16](https://nextjs.org/) (App Router) con exportación estática |
| UI                 | [React 19](https://react.dev/)                                          |
| Estilos            | [Tailwind CSS 4](https://tailwindcss.com/)                              |
| Animaciones        | [Framer Motion](https://www.framer.com/motion/)                         |
| Iconos             | [Lucide React](https://lucide.dev/)                                     |
| Imágenes           | [sharp](https://sharp.pixelplumbing.com/) para convertir a WebP         |
| Gestor de paquetes | [pnpm](https://pnpm.io/)                                                |
| Hosting            | [Cloudflare Pages](https://pages.cloudflare.com/)                       |

## Estructura del proyecto

```text
green-center-web/
├── public/
│   ├── icons/                 # Iconos SVG (WhatsApp)
│   └── img/
│       ├── autos/             # Fotos por categoría (WebP)
│       ├── bicicletas/
│       ├── maquinaria/
│       ├── motos/
│       ├── trimotos/
│       ├── variados/          # Fotos de la galería
│       └── logo-*.png         # Variantes del logo
├── src/
│   ├── app/
│   │   ├── layout.jsx         # Metadatos, fuentes, JSON-LD
│   │   ├── page.jsx           # Composición de las secciones
│   │   ├── globals.css        # Tema (colores, animaciones)
│   │   ├── not-found.jsx      # Página 404
│   │   ├── robots.txt
│   │   ├── sitemap.js
│   │   └── icon.png           # Favicon
│   ├── components/
│   │   ├── layout/            # Navbar, Footer
│   │   ├── sections/          # Hero, Story, Catalog, Selector, Benefits,
│   │   │                      # Calculator, Comparison, Steps, Gallery,
│   │   │                      # Branches, CTA, Ribbon
│   │   ├── ui/                # Button, FAB, ProductCard, ProductDrawer,
│   │   │                      # SplitHeading, NoiseScope
│   │   └── Providers.jsx
│   ├── data/
│   │   ├── products.js        # Catálogo y categorías
│   │   ├── branches.js        # Sucursales
│   │   └── siteConfig.js      # Nombre, contacto, URL, horarios
│   ├── hooks/                 # useScrollNav
│   └── lib/
│       └── whatsapp.js        # Generador de enlaces de WhatsApp
├── convert-webp.mjs           # Script para optimizar imágenes
├── next.config.mjs            # Exportación estática
└── package.json
```

La regla es simple: **el contenido vive en `src/data/`** y los componentes solo lo muestran. Para cambiar un precio o agregar una sucursal no hace falta tocar ningún componente.

## Primeros pasos

### Requisitos

- Node.js 20.9 o superior (recomendado: Node 22)
- [pnpm](https://pnpm.io/installation) 11 (la versión exacta está fijada en `packageManager` de `package.json`)

### Instalación

```bash
# 1. Clona el repositorio
git clone https://github.com/Ju4mpizel/green-center-web.git
cd green-center-web

# 2. Instala las dependencias
pnpm install

# 3. (Opcional) crea tu archivo de entorno
cp .env.example .env.local

# 4. Inicia el servidor de desarrollo
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

### Probar la versión de producción

El proyecto se exporta como sitio estático, por lo que `pnpm start` no aplica. Para ver el resultado final:

```bash
pnpm build                # genera la carpeta /out
pnpm dlx serve out        # sirve /out en http://localhost:3000
```

## Variables de entorno

Todas son opcionales: si no existen, se usan los valores por defecto de `src/data/siteConfig.js`.

| Variable                      | Descripción                                            | Valor por defecto                |
| ----------------------------- | ------------------------------------------------------ | -------------------------------- |
| `NEXT_PUBLIC_SITE_URL`        | URL pública del sitio (canonical, Open Graph, sitemap) | `https://greencenterbolivia.com` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número de WhatsApp en formato internacional, sin `+`   | `59160006336`                    |

> Las variables `NEXT_PUBLIC_*` se incrustan **al compilar**. En Cloudflare Pages se configuran en _Settings → Variables and Secrets_ y requieren un nuevo despliegue para aplicarse.

## Cómo editar el contenido

### Agregar o modificar un producto

Edita `src/data/products.js`. Cada producto tiene esta forma:

```js
{
  id: "valkiria",                         // único, en minúsculas
  name: "Valkiria Eléctrica",
  tag: "Potencia 2.000 W",                // etiqueta corta
  cat: "Motos y scooters",                // debe existir en CATEGORIES
  price: "Bs 15.900",
  line: "2.000 W · hasta 70 km/h · 72V 32Ah",   // resumen de la tarjeta
  desc: "Descripción larga que se ve en el panel de detalle.",
  imgs: ["/img/motos/moto-valkiria.webp"],      // una o varias fotos
  lg: true,                               // opcional: tarjeta grande
  warranty: "+1 Año por motor eléctrico",
  colors: ["Plomo"],
  specs: [
    { label: "Potencia de motor", val: "2.000 W" },
    { label: "Autonomía", val: "60 a 70 km por carga" },
  ],
}
```

1. Sube la foto a la carpeta correspondiente dentro de `public/img/`.
2. Agrega el objeto al arreglo `PRODUCTS`.
3. Para crear una categoría nueva, añádela primero a `CATEGORIES`.

> **Importante:** el nombre del archivo en el código debe coincidir **exactamente** (mayúsculas incluidas) con el del repositorio. Windows no distingue mayúsculas, pero Cloudflare Pages (Linux) sí: una diferencia de una letra produce una imagen rota en producción.

### Sucursales

Edita `src/data/branches.js`: nombre, dirección, enlace de Google Maps y la posición del pin en el esquema de la ciudad.

### Contacto, horarios y datos generales

Edita `src/data/siteConfig.js` (nombre, URL, teléfono, Instagram, horarios y rango de precios para SEO).

### Número de WhatsApp

Cámbialo con la variable `NEXT_PUBLIC_WHATSAPP_NUMBER`, o directamente en `siteConfig.js`. Todos los botones usan el helper `src/lib/whatsapp.js`, así que basta con un solo cambio.

## Optimización de imágenes

Las fotos del sitio se publican en **WebP** (máximo 1200 px de ancho, calidad 80) para que la página cargue rápido. Como se usa exportación estática, el optimizador de `next/image` no está disponible, por lo que **las imágenes deben subirse ya optimizadas**.

Para convertir fotos nuevas:

1. Coloca los `.jpg` o `.png` originales en la carpeta de la categoría.
2. Revisa en `convert-webp.mjs` el arreglo `directories` y agrega las carpetas que quieras procesar.
3. Ejecuta:

```bash
node convert-webp.mjs
```

4. Referencia el `.webp` generado en `products.js` y elimina el original si no lo necesitas en el sitio.

> Guarda los originales fuera de `public/`: todo lo que está ahí se publica en el sitio.

## Despliegue en Cloudflare Pages

El sitio se genera como HTML estático (`output: "export"`), por lo que no necesita servidor.

| Ajuste                 | Valor                        |
| ---------------------- | ---------------------------- |
| Framework preset       | Next.js (Static HTML Export) |
| Build command          | `pnpm build`                 |
| Build output directory | `out`                        |
| Variable de entorno    | `NODE_VERSION` = `22`        |

Con el repositorio conectado a Cloudflare Pages, cada `git push` a la rama `main` genera un despliegue automático.

**Dominio:** `greencenterbolivia.com`. Después de conectarlo en _Custom domains_, conviene:

- Redirigir `www` al dominio principal (o al revés) con una regla de redirección.
- Mantener SSL/TLS en modo **Full (strict)** y activar _Always Use HTTPS_.
- Verificar el dominio en Google Search Console y enviar `https://greencenterbolivia.com/sitemap.xml`.

## SEO y rendimiento

- Metadatos, `canonical`, Open Graph y Twitter Cards configurados en `layout.jsx`.
- Datos estructurados JSON-LD de la empresa y sus sucursales.
- `sitemap.xml` y `robots.txt` incluidos.
- Imágenes en WebP y carga diferida fuera de pantalla.
- Fuentes con `next/font` (sin parpadeo ni peticiones extra a Google en el navegador).
- Animaciones con `prefers-reduced-motion` respetado.

## Scripts disponibles

| Comando                 | Qué hace                                     |
| ----------------------- | -------------------------------------------- |
| `pnpm dev`              | Inicia el servidor de desarrollo             |
| `pnpm lint`             | Revisa el código con ESLint                  |
| `pnpm build`            | Compila y exporta el sitio estático a `/out` |
| `node convert-webp.mjs` | Convierte imágenes a WebP optimizado         |

> Antes de subir cambios, ejecuta `pnpm lint` y `pnpm build`: son las mismas comprobaciones que hace el despliegue.

## Créditos y licencia

Sitio desarrollado por [Ju4mpizel](https://github.com/Ju4mpizel) para **Green Center Bolivia**.

Las fotos de productos, el nombre y el logo de Green Center Bolivia pertenecen a sus propietarios. © 2026 Green Center Bolivia. Todos los derechos reservados.

<div align="center">

<sub>Hecho en Bolivia 🇧🇴 con cuidado por la movilidad limpia.</sub>

</div>
