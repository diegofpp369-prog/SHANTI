# Shanti Ibarra — Sitio web

Sitio web premium de bienestar para **Shanti Ibarra** (Ibarra, Ecuador).
Yoga, brunch consciente, ceremonias, talleres, círculos y retiros en los Andes de Imbabura.

- **Dominio objetivo:** shantiibarra.com
- **CTA principal:** Reservar por WhatsApp → https://wa.me/593988706699
- **Instagram:** https://www.instagram.com/shanti.ibarra/
- **Idioma:** español (todo el contenido visible)

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | **La página web ya construida.** Súbela junto con la carpeta `assets/`. |
| `assets/` | Fotografías y logotipo. **Necesaria** para que se vean las imágenes. Súbela siempre junto a `index.html`. |
| `Shanti Ibarra.dc.html` | Archivo fuente editable (se abre y edita en el editor de diseño). |
| `CNAME` | Dominio personalizado para GitHub Pages. |
| `robots.txt`, `sitemap.xml` | SEO. |

> ⚠️ **Sube siempre `index.html` **y** la carpeta `assets/` juntos.** Sin `assets/` las imágenes de Galería, Experiencias e Instagram no se verán.

> El sitio es una sola página con navegación instantánea entre secciones
> (Inicio · Experiencias · Eventos · Galería · Nosotros · Contacto).

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub (por ejemplo `shanti-ibarra`).
2. Sube a la raíz del repositorio: **`index.html`**, la **carpeta `assets/` completa**, `CNAME`, `robots.txt` y `sitemap.xml`.
3. Ve a **Settings → Pages**.
4. En **Source** elige la rama `main` y la carpeta `/ (root)`. Guarda.
5. En **Custom domain** escribe `shantiibarra.com` y guarda (el archivo `CNAME` ya lo deja listo).
6. Marca **Enforce HTTPS** cuando esté disponible.

En pocos minutos el sitio estará en línea.

## Alternativa: Vercel

1. Entra a vercel.com → **Add New → Project** e importa el repositorio.
2. Framework preset: **Other**. No hace falta build. Deploy. (Asegúrate de que el repositorio incluya `index.html` y la carpeta `assets/`.)
3. En **Settings → Domains** añade `shantiibarra.com`.

## Conectar el dominio en Namecheap

En Namecheap → **Domain List → Manage → Advanced DNS**, añade:

**Para GitHub Pages:**

| Tipo | Host | Valor |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | `TU-USUARIO.github.io.` |

**Para Vercel** (más simple): usa los registros que Vercel te indique, normalmente:

| Tipo | Host | Valor |
|---|---|---|
| A | @ | 76.76.21.21 |
| CNAME | www | `cname.vercel-dns.com.` |

La propagación DNS puede tardar de minutos a 24–48 horas.

## Cómo editar el contenido

Abre `Shanti Ibarra.dc.html` en el editor y cambia textos, fotos, experiencias,
eventos o testimonios directamente. Después vuelve a exportar `index.html`.

Los **eventos** son tarjetas de ejemplo editables; actualiza fechas y textos cuando definas la agenda.

## Reemplazar fotografías

Las imágenes viven en `assets/`. Sustituye un archivo por otro con el mismo nombre
(por ejemplo `assets/hero-yoga.jpg`) manteniendo una proporción similar y vuelve a exportar.
Formato recomendado: JPG optimizado, ancho ~1600–1920px.

---

Hecho con calma entre los Andes. 🤍
