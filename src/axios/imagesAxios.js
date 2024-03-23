import { authInstance } from './api';

const getPosts = async () => {
  try {
    const response = await authInstance.get(`/posts`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getImages = async () => {
  try {
    const response = await authInstance.get(`/posts`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { getPosts, getImages };
