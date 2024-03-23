import { authInstance } from './api';

const addPin = async (postId) => {
  try {
    await authInstance.post(`/pins/${postId}`);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getPins = async () => {};

export { addPin, getPins };
