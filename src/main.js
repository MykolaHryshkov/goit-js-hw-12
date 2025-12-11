
query = value;
page = 1;
clearGallery();
hideLoadMoreButton();
showLoader();


try {
const data = await getImagesByQuery(query, page);
totalHits = data.totalHits;


if (!data.hits || data.hits.length === 0) {
iziToast.info({ title: 'Пошук', message: 'За вашим запитом нічого не знайдено.' });
hideLoader();
return;
}


createGallery(data.hits);
iziToast.success({ title: 'Готово', message: `Знайдено ${data.totalHits} зображень.` });


const totalPages = Math.ceil(totalHits / PER_PAGE);
if (page < totalPages) {
showLoadMoreButton();
} else {
hideLoadMoreButton();
iziToast.info({
title: 'Кінець',
message: "We're sorry, but you've reached the end of search results.",
});
}
} catch (error) {
iziToast.error({ title: 'Помилка', message: error.message });
} finally {
hideLoader();
}


async function onLoadMore() {
page += 1;
showLoader();
hideLoadMoreButton();


try {
const data = await getImagesByQuery(query, page);
createGallery(data.hits);


// Плавна прокрутка
const firstCard = refs.gallery.querySelector('.gallery-item');
if (firstCard) {
const { height: cardHeight } = firstCard.getBoundingClientRect();
window.scrollBy({ top: cardHeight * 2, behavior: 'smooth' });
}


const totalPages = Math.ceil(totalHits / PER_PAGE);
if (page < totalPages) {
showLoadMoreButton();
} else {
hideLoadMoreButton();
iziToast.info({
title: 'Кінець',
message: "We're sorry, but you've reached the end of search results.",
});
}
} catch (error) {
iziToast.error({ title: 'Помилка', message: error.message });
} finally {
hideLoader();
}
}