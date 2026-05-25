/* Hanuman Chalisa — flip book of Vani's hand-written pages */

// All 45 uploaded pages, in numerical order.
// image05 was not in the upload — left out for now.
const PAGES = [
  { src: "assets/chalisa/image00.jpeg", label: "Cover" },
  { src: "assets/chalisa/image01.jpeg", label: "Opening Doha I" },
  { src: "assets/chalisa/image02.jpeg", label: "Opening Doha II" },
  { src: "assets/chalisa/image03.jpeg", label: "Chaupai 1" },
  { src: "assets/chalisa/image04.jpeg", label: "Chaupai 2" },
  { src: "assets/chalisa/image07.jpeg", label: "Chaupai 3" },
  { src: "assets/chalisa/image06.jpeg", label: "Chaupai 4" },
  { src: "assets/chalisa/image08.jpeg", label: "" },
  { src: "assets/chalisa/image09.jpeg", label: "" },
  { src: "assets/chalisa/image10.jpeg", label: "" },
  { src: "assets/chalisa/image11.jpeg", label: "" },
  { src: "assets/chalisa/image12.jpeg", label: "" },
  { src: "assets/chalisa/image13.jpeg", label: "" },
  { src: "assets/chalisa/image14.jpeg", label: "" },
  { src: "assets/chalisa/image15.jpeg", label: "" },
  { src: "assets/chalisa/image16.jpeg", label: "" },
  { src: "assets/chalisa/image17.jpeg", label: "" },
  { src: "assets/chalisa/image18.jpeg", label: "" },
  { src: "assets/chalisa/image19.jpeg", label: "" },
  { src: "assets/chalisa/image20.jpeg", label: "" },
  { src: "assets/chalisa/image21.jpeg", label: "" },
  { src: "assets/chalisa/image22.jpeg", label: "" },
  { src: "assets/chalisa/image23.jpeg", label: "" },
  { src: "assets/chalisa/image24.jpeg", label: "" },
  { src: "assets/chalisa/image25.jpeg", label: "" },
  { src: "assets/chalisa/image26.jpeg", label: "" },
  { src: "assets/chalisa/image27.jpeg", label: "" },
  { src: "assets/chalisa/image28.jpeg", label: "" },
  { src: "assets/chalisa/image29.jpeg", label: "" },
  { src: "assets/chalisa/image30.jpeg", label: "" },
  { src: "assets/chalisa/image31.jpeg", label: "" },
  { src: "assets/chalisa/image32.jpeg", label: "" },
  { src: "assets/chalisa/image33.jpeg", label: "" },
  { src: "assets/chalisa/image34.jpeg", label: "" },
  { src: "assets/chalisa/image35.jpeg", label: "" },
  { src: "assets/chalisa/image36.jpeg", label: "" },
  { src: "assets/chalisa/image37.jpeg", label: "" },
  { src: "assets/chalisa/image38.jpeg", label: "" },
  { src: "assets/chalisa/image39.jpeg", label: "" },
  { src: "assets/chalisa/image40.jpeg", label: "" },
  { src: "assets/chalisa/image41.jpeg", label: "" },
  { src: "assets/chalisa/image42.jpeg", label: "Chaupai 39" },
  { src: "assets/chalisa/image43.jpeg", label: "Chaupai 40" },
  { src: "assets/chalisa/image44.jpeg", label: "Closing Doha" },
  { src: "assets/chalisa/image45.jpeg", label: "Jai Mantra" },
];

function renderPage(page, isCover) {
  const cls = isCover ? "book-page image-page cover-image" : "book-page image-page";
  const label = page.label ? `<div class="image-page-label">${page.label}</div>` : "";
  return `
    <div class="${cls}">
      <img src="${page.src}" alt="${page.label || "Page from Vani's Hanuman Chalisa"}" loading="lazy" />
      ${label}
    </div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const bookEl = document.getElementById("chalisa-book");
  const html = PAGES.map((p, i) => renderPage(p, i === 0)).join("");
  bookEl.innerHTML = html;

  const pageFlip = new St.PageFlip(bookEl, {
    width: 480,
    height: 360,
    size: "stretch",
    minWidth: 280,
    maxWidth: 640,
    minHeight: 210,
    maxHeight: 480,
    maxShadowOpacity: 0.45,
    showCover: true,
    mobileScrollSupport: true,
    drawShadow: true,
    flippingTime: 700,
    usePortrait: true,
    autoSize: true,
  });

  pageFlip.loadFromHTML(bookEl.querySelectorAll(".book-page"));

  document.getElementById("prev-page").addEventListener("click", () => {
    pageFlip.flipPrev();
  });
  document.getElementById("next-page").addEventListener("click", () => {
    pageFlip.flipNext();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") pageFlip.flipPrev();
    if (e.key === "ArrowRight") pageFlip.flipNext();
  });
});
