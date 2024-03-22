import { authInstance } from './api';

const addComment = async ({ postId, comment }) => {
  try {
    const { data } = await authInstance.post(`/posts/${postId}/comments`, { content: comment });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getComments = async (postId) => {
  try {
    const { data } = await authInstance.get(`/posts/${postId}/comments`);

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { addComment, getComments };
