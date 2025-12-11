// src/js/render-functions.js
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const refs = {
gallery: document.querySelector('.gallery'),
loader: document.querySelector('.loader'),
loadMoreBtn: document.querySelector('.load-more'),
};


const lightbox = new SimpleLightbox('.gallery a', {
captionsData: 'alt',
captionDelay: 250,
});


export function createGallery(images) {
const markup = images
.map(
img => `
<li class="gallery-item">
<a class="gallery-link" href="${img.largeImageURL}">
<img class="gallery-image" src="${img.webformatURL}" alt="${img.tags}" loading="lazy" />
</a>
<div class="info">
<p><b>Likes:</b> ${img.likes}</p>
<p><b>Views:</b> ${img.views}</p>
<p><b>Comments:</b> ${img.comments}</p>
<p><b>Downloads:</b> ${img.downloads}</p>
</div>
</li>`
)
.join('');


// Додаємо всі нові елементи за одну операцію
refs.gallery.insertAdjacentHTML('beforeend', markup);
lightbox.refresh();
}


export function clearGallery() {
refs.gallery.innerHTML = '';
}


export function showLoader() {
refs.loader.classList.add('visible');
}


export function hideLoader() {
refs.loader.classList.remove('visible');
}


export function showLoadMoreButton() {
refs.loadMoreBtn.classList.remove('hidden');
}


export function hideLoadMoreButton() {
refs.loadMoreBtn.classList.add('hidden');
}