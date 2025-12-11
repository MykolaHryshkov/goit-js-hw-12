// src/js/pixabay-api.js
import axios from 'axios';


const API_KEY = import.meta.env.VITE_PIXABAY_KEY;
const BASE_URL = 'https://pixabay.com/api/';


const axiosInstance = axios.create({
baseURL: BASE_URL,
params: {
key: API_KEY,
image_type: 'photo',
orientation: 'horizontal',
safesearch: true,
per_page: 15,
},
});


export async function getImagesByQuery(query = '', page = 1) {
try {
const response = await axiosInstance.get('', { params: { q: query, page } });
return response.data; // повертаємо data об'єкт
} catch (error) {
// кинути помилку вгору, щоб обробити її в main.js
throw error;
}
}