# Creations of Vani

A small, growing keepsake site for Vani's creative work — beginning with a
hand-copied Hanuman Chalisa from her Bal Vihar days.

## Live site

Once GitHub Pages is enabled on this repo, the site will be available at:

**https://mayank201181.github.io/CreationsofVani/**

### Enabling GitHub Pages (one-time)

1. Go to the repo's **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Pick the branch you want to publish (e.g. `main` after merging this PR) and
   the `/ (root)` folder.
4. Save. GitHub will publish the site in a minute or two.

## Structure

```
index.html          Home page with section tiles
chalisa.html        Hanuman Chalisa flip-book
writing.html        Writing & Poems (placeholder for future work)
art.html            Art & Drawings (placeholder for future work)
assets/css/         Stylesheet
assets/js/          Flip-book content & init
```

## Chalisa pages

Photos of each page of Vani's hand-written notebook live in
`assets/chalisa/` (named `image00.jpeg` through `image45.jpeg`). The list
loaded into the flip-book is hard-coded in `assets/js/chalisa.js` — to
add, remove, or re-order pages, edit the `PAGES` array there.

## Local preview

Just open `index.html` in a browser — no build step needed.
