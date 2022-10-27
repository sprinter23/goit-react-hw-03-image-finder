
import axios from 'axios';

const API_KEY = '29802833-db1c413127348c77efcba7da3';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (searchQuery, page = 1) => {
  const response = await axios.get('', {
    params: {
      q: searchQuery,
      page: page,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
  return response.data;
};