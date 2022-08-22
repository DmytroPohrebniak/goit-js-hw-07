import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryColection = document.querySelector('.gallery');
const createGallery = onCreateGalleryItems(galleryItems);

galleryColection.insertAdjacentHTML('beforeend', createGallery);

function onCreateGalleryItems(item) {
    return item.map(({ preview, description, original }) => {
        return `<a class="gallery__link" href="${original}">
                        <img class="gallery__image" src="${preview}" 
                        data-source="${original}"
                        alt="${description}" />
                    </a>`;
    }).join('');
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
console.log(galleryItems);
