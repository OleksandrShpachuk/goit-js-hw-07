import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryElement = document.querySelector(".gallery");

const markupForGallery = galleryItems
  .map(
    ({ preview, original, description }) => `
  <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
    </a>
  </div>
`
  )
  .join("");

galleryElement.insertAdjacentHTML("beforeend", markupForGallery);

galleryElement.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`
  );
  instance.show();

  galleryElement.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
});

console.log(galleryItems);
