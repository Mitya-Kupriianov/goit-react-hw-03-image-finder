const axios = require('axios');
const BASE_URL = 'https://pixabay.com/api/';

const searchParams = new URLSearchParams({
  key: '29286447-e0acda4b7f54a964b1d886463',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 12,
});

export default async function searchImages(searchQuery = '', page = 1) {
  const url = `${BASE_URL}?${searchParams}&q=${searchQuery}&page=${page}`;
  return await axios.get(url);
}
