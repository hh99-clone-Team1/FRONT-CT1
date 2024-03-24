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

const getMyImages = async () => {
  try {
    const response = await authInstance.get(`/images`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getMyPins = async (userId) => {
  try {
    const response = await authInstance.get(`/pins/${userId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { getPosts, getMyImages, getMyPins };
