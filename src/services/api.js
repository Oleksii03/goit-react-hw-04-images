import axios from 'axios';

export const requestPhotos = async (query, page) => {
  const {
    data: { hits, totalHits },
  } = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=33184193-09093e83ff1c2949d43a02918&image_type=photo&orientation=horizontal&per_page=12`
  );
  return { hits, totalHits };
};
