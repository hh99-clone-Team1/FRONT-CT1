import { authInstance } from './api';

const getPosts = () => {};

const getPostDetail = async (id) => {
  const { data } = await authInstance.get(`/posts/${id}`);
  // Todo : image 정보 들어오면 return 변경
  return {
    ...data,
    image: 'https://i.pinimg.com/564x/63/2e/6b/632e6b7d7e460e2b19f0a679dda0f500.jpg',
    nickname: 'test',
  };
};

export { getPosts, getPostDetail };
