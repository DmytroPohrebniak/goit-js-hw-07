import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryColection = document.querySelector('.gallery');
const createGallery = onCreateGalleryItems(galleryItems);

galleryColection.insertAdjacentHTML('beforeend', createGallery);
galleryColection.addEventListener('click', onImageClick);

function onCreateGalleryItems(item) {
    return item.map(({ preview, description, original }) => {
        return `<div class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img class="gallery__image" src="${preview}" 
                        data-source="${original}"
                        alt="${description}" />
                    </a>
                </div>`;
    }).join('');  
}


function onImageClick(e) {
    e.preventDefault();

    if (e.target.nodeName!=='IMG') {
      return;
    }

    const imgSize = e.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${imgSize}" width="800" height="600">`,
        {
            onShow: () => window.addEventListener("keydown", listener),
            onClose: () => window.removeEventListener("keydown", listener),
        }
    );

    instance.show();   


    function listener(elm) {
        if (elm.code === "Escape") {
            instance.close();
            window.removeEventListener("keydown", listener);
        }
    }
}
