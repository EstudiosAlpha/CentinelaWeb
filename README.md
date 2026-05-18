# Centinela: Navegación Táctica

Landing page profesional, responsive y estática para la app iOS **Centinela: Navegación Táctica**.

## Estructura

```text
.
├── index.html
├── especificaciones.html
├── styles.css
├── script.js
├── assets
│   ├── icons
│   │   └── apple-touch-icon.png
│   ├── images
│   │   ├── centinela-app-icon.png
│   │   └── og-centinela-placeholder.svg
│   └── videos
└── README.md
```

## Ejecutar en local

No requiere instalación ni build. Puedes abrir `index.html` directamente en el navegador.

También puedes servirlo con un servidor local:

```bash
python3 -m http.server 8080
```

Luego abre:

```text
http://localhost:8080
```

## Personalización

Busca los comentarios `TODO` en `index.html` para cambiar:

- Captura real del hero: guarda la segunda captura como `assets/images/hero-app-map.png`.
- Vídeo del hero: guarda el vídeo principal como `assets/videos/inicio.MP4`.
- Capturas reales de iPhone e iPad si quieres sustituir otros mockups CSS.
- Enlaces de YouTube, Vimeo o vídeos `.mp4`.
- Enlace real de App Store.
- Enlaces de privacidad y contacto.
- Imagen Open Graph en `assets/images`.
- Formatos y capacidades técnicas en `especificaciones.html`.

## Despliegue

### GitHub Pages

1. Sube estos archivos a un repositorio.
2. En GitHub, ve a `Settings > Pages`.
3. Selecciona la rama principal y la carpeta raíz.
4. Guarda los cambios.

### Vercel o Netlify

1. Importa el repositorio.
2. No configures comando de build.
3. Usa la raíz del proyecto como directorio de publicación.

## Notas técnicas

- HTML, CSS y JavaScript puro.
- Diseño blanco fijo, sin selector de modo claro/oscuro.
- Tutoriales presentados dentro de una maqueta vertical de iPhone.
- Selector de tutoriales que cambia el vídeo directamente dentro del iPhone.
- Página independiente de especificaciones técnicas.
- Referencia al ecosistema TAK.
- SEO básico, Open Graph y favicon preparados.
- Animaciones con soporte para `prefers-reduced-motion`.
