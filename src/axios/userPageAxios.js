import { authInstance } from './api';

const getUserImgs = async (userId) => {
  console.log(userId);
  try {
    const { data } = await authInstance.get(`/posts/user/${userId}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log('choi error');
    throw error;
  }
};

export default getUserImgs;
