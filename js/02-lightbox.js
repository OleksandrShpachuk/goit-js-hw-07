import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryElement = document.querySelector(".gallery");

const markupForGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`
  )
  .join("");

galleryElement.insertAdjacentHTML("beforeend", markupForGallery);

galleryElement.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;
});
new SimpleLightbox(".gallery a", {
  captions: true,
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

console.log(galleryItems);
