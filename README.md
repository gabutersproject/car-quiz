# GabutersTech Quiz

A short motorcycle and automotive quiz. It is a static site: HTML, CSS, and JavaScript, with no build step.

Each run asks 10 questions drawn from a larger bank, in a new order. After every answer, the page explains the correct choice.

## Play locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8080
```

Then visit http://localhost:8080

## GitHub Pages

Pushes to `master` publish the site with [GitHub Actions](.github/workflows/pages.yml).

After this workflow is on `master`, open **Settings → Pages** and set **Source** to **GitHub Actions** if GitHub has not selected it already. The site is then served at:

https://gabutersproject.github.io/car-quiz/

Paths are relative, so the same files also work if the site is hosted from the repository root.
