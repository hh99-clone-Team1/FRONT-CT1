import instance from './api';

const addComment = async ({ postId, comment }) => {
  try {
    const { data } = instance.post(
      `/posts/${postId}/comments`,
      { comment },
      { headers: { Authorization: `Bearer ${process.env.REACT_APP_TOKEN}` } },
    );
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getComments = async () => {};

export { addComment, getComments };
