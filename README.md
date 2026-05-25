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

## Replacing the Chalisa placeholders with Vani's real pages

The flip-book currently shows the traditional Hanuman Chalisa text in
Devanagari on each page, with a small note that Vani's hand-written version
will replace it. To swap in her real pages, you have two options:

1. **Photographs of each page** — save them as `assets/chalisa/page-01.jpg`,
   `page-02.jpg`, ... and we'll update `assets/js/chalisa.js` to render an
   `<img>` per verse.
2. **A single PDF** — drop it at `assets/chalisa/vani-chalisa.pdf` and we'll
   render each PDF page as a flip-book page using `pdf.js`.

## Local preview

Just open `index.html` in a browser — no build step needed.
