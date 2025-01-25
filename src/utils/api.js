import axios from 'axios';
import { API_KEY, BASE_URL } from './constants';

export const fetchTrendingVideos = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/videos`, {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 10,
        regionCode: 'US',
        key: API_KEY,
      },
    });
    return response.data.items.map((item) => ({
      id: item.id,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.high.url,
    }));
  } catch (error) {
    console.error('Error fetching trending videos:', error);
    return [];
  }
};
