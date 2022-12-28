import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const cardGallery = createGalerry(galleryItems);
galleryContainer.addEventListener('click', onGalleryContainerClick);
galleryContainer.innerHTML = cardGallery;
new SimpleLightbox('.gallery a');
function createGalerry(items) {
    return items
        .map(
            ({preview,original,description}) => `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a>
    `).join("");
}


function onGalleryContainerClick(event) {
    if (event.target.Nodename !== img) {
        return;
    }
    event.preventDefauly();
}


