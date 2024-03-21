import instance from './api';

const signupUser = async (newUserInfo) => {
  try {
    const response = await instance.post('/signup', newUserInfo);
    return response;
  } catch (error) {
    console.log(error.response);
    throw error; // 에러를 throw하여 상위에서 처리할 수 있도록 함
  }
};

const loginUser = async (userInfo) => {
  try {
    const response = await instance.post('/login', userInfo);
    return response;
  } catch (error) {
    console.log(error.response);
    throw error; // 에러를 throw하여 상위에서 처리할 수 있도록 함
  }
};

export { signupUser, loginUser };
