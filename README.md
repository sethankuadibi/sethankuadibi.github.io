# Seth Adibi Anku — Portfolio

A static portfolio for GitHub Pages, built with plain HTML, CSS, and JavaScript.
The design direction is documented in [`design.md`](./design.md) ("Working Drawing").

## Structure

- `index.html` — page content, metadata, and structured data
- `styles.css` — design tokens, layout, responsive rules, and motion
- `script.js` — schematic draw-in, scroll reveals, section navigation, header state
- `design.md` — design tokens, signature elements, and quality floor
- `assets/` — CV download, favicon, and social card (`og.png`)
- `robots.txt` and `sitemap.xml` — crawler metadata

## Preview locally

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Deploy

This folder is the `sethankuadibi.github.io` repository. Commit and push to `main`; GitHub Pages serves the site from the repository root.

## Content notes

- Public project links point to `traced`, `payment-gateway`, `tweet-audit`, and `seth-agent-skills`.
- The applied ML and product case studies are private repositories, so they are presented with a `PRIVATE` stamp instead of links.
- The hero schematic is an illustration based on shipped work, not a live dashboard.
- Replace `assets/seth-adibi-anku-cv.pdf` whenever the CV changes.
- `assets/og.png` is the 1200×630 social preview card.

## Quality checks

The page targets zero axe violations at 320, 390, 768, 1100, and 1440 px, zero W3C validation messages, no horizontal overflow, and full legibility with `prefers-reduced-motion: reduce`.
