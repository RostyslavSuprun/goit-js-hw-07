import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const markup = galleryItems.map((image) => `<div><img class= js-img src=${image.preview} alt = "${image.description}"></div>`)
  .join("");

// img.style.objectFit = contain;
gallery.insertAdjacentHTML("beforeend", markup);

console.log(galleryItems);
