// components/Movies.js
import axios from 'axios';
import BASE_URL from './Api';

export const fetchMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/movies`);
    console.log('API response:', response.data); // 👈 debug için

    const data = response.data.data || response.data; // ikisinden biri çalışır
    if (!Array.isArray(data)) throw new Error('API data is not an array');

    return data.map((movie) => ({
      id: movie.id.toString(),
      title: movie.title,
      image: { uri: movie.poster_url },
      category: movie.genre?.split(',')[0] || 'Bilinmiyor',
      city: global.selectedCity?.name || 'Bilinmeyen Şehir',
      cinema: movie.cinema_name || 'Bilinmeyen Sinema',
      description: movie.description,
      imdb: movie.imdb_raiting
    }));
  } catch (error) {
    console.error('Film verileri çekilirken hata:', error);
    return [];
  }
};
