import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, description, original }) => `<div class= gallery__item><img class= gallery__image src=${preview} alt = "${description}"  data-source = ${original}></div>`)
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

const imgEl = document.querySelectorAll('.gallery__image');
const datasource = document.querySelector('[data-source]');

function onclick(event) {
  console.log(this.dataset.source)
  basicLightbox.create(`<img width="1400" height="900" src='${this.dataset.source}'>`).show()

}
datasource.addEventListener("click", onclick);


imgEl.forEach(img => {img.addEventListener("click", onclick)
  }
);

document.addEventListener('keydown', (event) => {
 const close = document.querySelector('.basicLightbox')
  if (event.key === "Escape") {
    close.remove()
  }
});

