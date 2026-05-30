/* Vani's art gallery — add a new entry to ARTWORKS to publish a new piece. */

const ARTWORKS = [
  // {
  //   src: "assets/art/guitar.jpeg",
  //   title: "Acoustic Guitar",
  //   medium: "Acrylic on canvas",
  //   year: "2026",
  // },
];

function render() {
  const gallery = document.getElementById("art-gallery");

  if (ARTWORKS.length === 0) {
    gallery.innerHTML = `
      <div class="empty-state">
        <div class="glyph">❀</div>
        <h2>The easel is set</h2>
        <p>The first painting is on its way &mdash; check back soon.</p>
        <p>Until then, turn to the <a href="chalisa.html" style="color: var(--saffron);">Hanuman Chalisa</a>.</p>
      </div>`;
    return;
  }

  gallery.innerHTML = ARTWORKS.map((art) => `
    <figure class="artwork">
      <a href="${art.src}" target="_blank" rel="noopener">
        <img src="${art.src}" alt="${art.title}" loading="lazy" />
      </a>
      <figcaption>
        <h3>${art.title}</h3>
        ${art.medium ? `<p class="medium">${art.medium}</p>` : ""}
        ${art.year ? `<p class="year">${art.year}</p>` : ""}
      </figcaption>
    </figure>
  `).join("");
}

document.addEventListener("DOMContentLoaded", render);
