import instance from './api';

const addComment = async ({ postId, comment }) => {
  try {
    const { data } = await instance.post(
      `/posts/${postId}/comments`,
      { content: comment },
      { headers: { Authorization: `Bearer ${process.env.REACT_APP_TOKEN}` } },
    );
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getComments = async (postId) => {
  try {
    const { data } = await instance.get(`/posts/${postId}/comments`, {
      headers: { Authorization: `Bearer ${process.env.REACT_APP_TOKEN}` },
    });

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { addComment, getComments };
