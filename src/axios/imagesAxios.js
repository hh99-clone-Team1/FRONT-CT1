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

const postImage = async (imageFile) => {
  try {
    const formData = new FormData();
    formData.append('image', imageFile);
    const response = await authInstance.post(`/images`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(response.data);
    return response.url;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const postPost = async (formData) => {
  try {
    const response = await authInstance.post(`/posts`, formData);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { getPosts, getMyImages, getMyPins, postImage, postPost };
