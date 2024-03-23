/* eslint-disable no-console */
import { authInstance } from './api';

const addLike = async ({ postId }) => {
  try {
    await authInstance.post(`/posts/${postId}/likes`);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default addLike;
