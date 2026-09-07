# WoofHome — Landing del MVP

Landing estática del proyecto académico **WoofHome**, una casa inteligente e insonorizada para perros sensibles a ruidos fuertes. Construida con React + Vite y preparada para publicarse automáticamente en GitHub Pages.

## Verla en tu computador

Necesitas tener [Node.js](https://nodejs.org/) 20 o superior.

```bash
npm install
npm run dev
```

Abre la dirección local que aparece en la terminal. Para comprobar la versión final:

```bash
npm run build
npm run preview
```

## Crear el repositorio y publicar

1. Entra a [github.com/new](https://github.com/new).
2. Escribe un nombre, por ejemplo `woofhome-landing`.
3. Elige **Public**. No agregues README, `.gitignore` ni licencia, porque el proyecto ya los incluye.
4. Pulsa **Create repository**.
5. Desde esta carpeta, ejecuta los comandos que muestra GitHub en el bloque **…or push an existing repository from the command line**. Se verán parecidos a estos (reemplaza `TU-USUARIO`):

```bash
git init
git add .
git commit -m "Crea landing de WoofHome"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/woofhome-landing.git
git push -u origin main
```

6. En el repositorio abre **Settings → Pages**.
7. En **Build and deployment → Source**, selecciona **GitHub Actions**.
8. Abre la pestaña **Actions**. El flujo “Publicar WoofHome en GitHub Pages” empezará automáticamente. Cuando termine, mostrará la dirección pública del sitio.

Cada nuevo `push` a la rama `main` actualizará la landing de forma automática.

## Personalización rápida

- Contenido y estructura: `src/main.jsx`
- Colores, tipografía y estilos: `src/styles.css`
- Ícono del sitio: `public/favicon.svg`
- Automatización de publicación: `.github/workflows/deploy.yml`

El formulario incluido es una demostración visual y no almacena datos. Para recibir contactos reales puede conectarse después con Formspree, Google Forms, Airtable u otro servicio.
