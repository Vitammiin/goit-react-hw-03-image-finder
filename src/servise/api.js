import axios from 'axios';

export const fetchPosts = async () => {
  const { data } = await axios.get(
    'https://pixabay.com/api/?q=cat&page=1&key=38618051-849992b0d6a216be8fb72e7cb&image_type=photo&orientation=horizontal&per_page=12'
  );
  return data;
};
