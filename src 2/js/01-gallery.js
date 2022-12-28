import { galleryItems } from './gallery-items.js';
const galleryRef = document.querySelector('.gallery');
const cardMarkup = makeGalerry(galleryItems);
galleryRef.addEventListener('click', showModal);
galleryRef.innerHTML = cardMarkup;
function makeGalerry(items) {
    return items
        .map(
            (item) => `<div class="gallery__item">
            <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>
    `).join("");
}


function showModal(event) {
    if (event.target.Nodename !== img) {
        return;
    }
    event.preventDefault();
    const insctance = basicLightbox.create(
        `<div class="modal">
        <img src = "${event.target.dataset.source}" width="800" heigth="600">
        </div>`)
    insctance.show();
    
}

window.addEventListener('keydown', closemodal);
function closemodal(event) {
    if (event.code === "Escape") {
        insctance.close();
    }
}
console.log(galleryItems);
