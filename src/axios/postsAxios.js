/* eslint-disable no-console */
import { authInstance } from './api';

const getPosts = () => {};

const getPostDetail = async (id) => {
  try {
    const { data } = await authInstance.get(`/posts/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { getPosts, getPostDetail };
