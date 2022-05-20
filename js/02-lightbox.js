import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryConteiner = document.querySelector('.gallery');
const cardsGallery = createImgCards(galleryItems);
galleryConteiner.insertAdjacentHTML('beforeend',cardsGallery );

function createImgCards (cards){
    return cards.map(({ preview,original,description }) => {
        return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;
    
}).join('');
};
var lightbox = new SimpleLightbox('.gallery a', 
{ 
    
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
    captionClass: "center" });

// var lightbox = $('.gallery a').simpleLightbox({ /* options */ });

// console.log(galleryItems);
