import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
  gallery: document.querySelector('.gallery'),
} ;

const listItems = galleryItems.map(({preview, original, description}) => {
return `<li class='gallery__item'>
<a class='gallery__link' href='${original}'
<img class="gallery__image"
src="${preview}"
data-source='${original}'
alt='${description}'
/></a></li>`;
}).join('');

refs.gallery.insertAdjacentHTML('beforeend', listItems);

// console.log(refs.gallery);

// console.log(galleryItems);

refs.gallery.addEventListener('click', onOpenModal)

function onOpenModal(event){
  event.preventDefault();
  const currentItem = event.target;
console.log(currentItem.nodeName);
  if(currentItem.nodeName !== 'IMG'){
    return;
  }
   let instance = basicLightbox.create(`
      <img width="1400" height="900" src="${currentItem.dataset.source}">
    `);
    instance.show()
    console.dir(currentItem.nodeName);
}

