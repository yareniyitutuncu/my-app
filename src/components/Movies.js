// components/Movies.js
import axios from 'axios';
import BASE_URL from './Api';

export const fetchMovies = async (selectedCity = null, selectedCinema = null) => {
  try {
    let url = `${BASE_URL}/api/movies`; // Temel URL

    // Eğer şehir seçildiyse, URL'ye şehir filtresi ekle
    if (selectedCity) {
      url += `?city=${selectedCity.name}`;
    }

    // Eğer sinema seçildiyse, URL'ye sinema filtresi ekle
    if (selectedCinema) {
      url += `&cinema=${selectedCinema}`;
    }

    const response = await axios.get(url);
    console.log('API response:', response.data); // 👈 debug için

    const data = response.data.data || response.data; // API'den dönen veri
    if (!Array.isArray(data)) throw new Error('API data is not an array');

    // Film verilerini işleyip döndürme
    return data.map((movie) => ({
      id: movie.id.toString(),
      title: movie.title,
      image: { uri: movie.poster_url },
      category: movie.genre?.split(',')[0] || 'Bilinmiyor',
      city: selectedCity?.name || 'Bilinmeyen Şehir',
      cinema: movie.cinema_name || 'Bilinmeyen Sinema',
      description: movie.description,
      imdb: movie.imdb_raiting
    }));
  } catch (error) {
    console.error('Film verileri çekilirken hata:', error);
    return [];
  }
};
