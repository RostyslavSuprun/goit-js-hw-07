import { galleryItems } from './gallery-items.js';
// Change code below this line



console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, description, original }) =>`<li><a class="gallery__item" href="${original}"><img class= "gallery__image" src=${preview} alt = "${description}"></a></li>`)
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});

// {/* <a class="gallery__item" href="large-image.jpg">
//   <img class="gallery__image" src="small-image.jpg" alt="Image description" />
// </a>
//  */}

// let gallery = new SimpleLightbox('.gallery a');
// gallery.on('show.simplelightbox', function () {
// 	// do something…
// });