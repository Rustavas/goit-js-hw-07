import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
  gallery: document.querySelector('.gallery'),
} ;

const listItems = galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
  `;
  })
  .join('');


refs.gallery.insertAdjacentHTML('beforeend', listItems);

let lightbox = new SimpleLightbox('.gallery a', { 
captions: true,
captionDelay: 250,
captionPosition: 'bottom',
captionsData: 'alt', 
});


console.log(galleryItems);
