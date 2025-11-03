# ZHENG QI — AI + Design + Human Factors (Static Site)

Pure static single-page site: HTML + CSS + JS. Minimalist black/white academic style with a theme toggle on the tagline.

## Structure
- `index.html` — all sections and content
- `css/styles.css` — theme tokens, typography and layout
- `js/main.js` — theme toggle, smooth scroll, sticky nav shadow

## Run locally
Use any static server. Quickest (Python):

```bash
python -m http.server 5500
```

Then open `http://localhost:5500/`.

## Deploy to Netlify
1. Drag-and-drop the project folder into Netlify Dashboard, or connect a Git repo.
2. Build command: (leave empty)
3. Publish directory: `/` (project root)

## Replace placeholders
- Images: replace `https://placehold.co/...` URLs in `index.html` with your images or add files under `assets/` and update the `src` attributes.
- CV: update the CV link in the CV section.
- Social links: update LinkedIn/GitHub/Google Scholar `href` values.

## Fonts
- Titles: Ibarra Real Nova
- Body: Spectral

## License
All code MIT. Content © ZHENG QI.

