import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryConteiner = document.querySelector('.gallery');
const cardsGallery = createImgCards(galleryItems);
galleryConteiner.insertAdjacentHTML('beforeend',cardsGallery );

function createImgCards (cards){
    return cards.map(({ preview,original,description }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    
}).join('');
};
galleryConteiner.addEventListener("click", galleryCardClick);


function galleryCardClick(event) {
    event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  };
  console.log("Hi");
  
  const instance = basicLightbox.create(`
       <img src="${event.target.dataset.source}" width="800" height="600"> `)
  
  instance.show()
  

}
console.log(createImgCards(galleryItems));
console.log(galleryItems);





