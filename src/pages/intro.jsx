/* eslint-disable*/
import { useState } from 'react';
import Button from '../components/Button';
import LabelInput from '../components/LabelInput';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { signupUser, loginUser } from '../axios/LoginSignupAxios';
import {
  IntroHeaderLayout,
  HeaderLogoBox,
  HearderSearchBox,
  HeaderChoiceBox,
  ModalWrapper,
  ModalContent,
  ModalCloseButton,
  InputName,
  IdeaComment,
  StrongComment,
  ServiceComment,
  OrComment,
  ChangeModalComment,
} from './intro.module';
import { setLocalStorage } from '../utils/storageUtils';

function Intro() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLogin = () => {
    setIsLogin(true);
    openModal();
  };
  const handleSignup = () => {
    setIsLogin(false);
    openModal();
  };

  return (
    <IntroHeaderLayout>
      <div>
        <HeaderLogoBox>Pinterest </HeaderLogoBox>
        <HearderSearchBox>탐색 </HearderSearchBox>
      </div>
      <div>
        <HeaderChoiceBox>소개 </HeaderChoiceBox>
        <HeaderChoiceBox>비즈니스 </HeaderChoiceBox>
        <HeaderChoiceBox>언론 </HeaderChoiceBox>
        <Button LightRed type="button" onClick={handleLogin}>
          로그인
        </Button>
        <Button LightGray type="button" onClick={handleSignup}>
          가입하기
        </Button>
      </div>

      {isModalOpen && <LoginSignupModal closeModal={closeModal} isLogin={isLogin} setIsLogin={setIsLogin} />}
    </IntroHeaderLayout>
  );
}

function LoginSignupModal({ closeModal, isLogin, setIsLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleBirthdayChange = (e) => {
    const birthday = e.target.value;
    setBirthday(birthday);
  };

  const validateEmail = (email) => {
    const eamilRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return eamilRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,15}$/;
    return passwordRegex.test(password);
  };

  const handleFaceBook = () => {
    window.open('https://www.facebook.com/', '_blank');
  };

  const userInfo = {
    email,
    password,
  };

  const newUserInfo = {
    email,
    password,
    birthday,
  };

  // 회원가입 통신
  const signupMutation = useMutation({
    mutationFn: signupUser,
    onSuccess: (data) => {
      if (data.status === 200) {
        alert('회원가입에 성공했습니다.');
        setIsLogin(true);
      }
    },
    onError: (error) => {
      console.log(data);
      alert('회원가입 실패 : ', error);
    },
  });

  // 로그인 통신
  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      const refreshToken = data.headers.refreshToken;
      const accessToken = data.data.accessToken;
      console.log(data);
      console.log(refreshToken);

      if (data.status === 200) {
        setLocalStorage(accessToken);
        /*
        setCookie('refreshToken', refreshToken);
        */
        localStorage.setItem('email', email);
        alert(`${email}님 로그인 성공!`);
        navigate('/main');
      }
    },
    onError: (error) => {
      alert('로그인 실패 : ', error);
    },
  });

  // 폼 제출
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(newUserInfo);

    if (email.trim() !== '' && !validateEmail(email)) {
      alert('유효한 이메일 주소를 입력하세요.');
    }

    if (password.trimEnd() !== '' && !validatePassword(password)) {
      alert('비밀번호는 영어 대소문자와 숫자를 사용하여 6~15자로 입력하세요.');
    }

    if (isLogin) {
      // 로그인 처리
      loginMutation.mutate(userInfo);
    } else {
      // 회원가입 처리
      signupMutation.mutate(newUserInfo);
    }
  };

  return (
    <ModalWrapper>
      <ModalContent onSubmit={handleFormSubmit}>
        <ModalCloseButton onClick={closeModal}>X</ModalCloseButton>
        <h2>Pinterest에 오신 것을 환영합니다</h2>
        {!isLogin && <IdeaComment>시도해 볼만한 새로운 아이디어 찾기</IdeaComment>}
        <InputName>이메일</InputName>
        <LabelInput type={'email'} placeholder={'이메일'} value={email} onChange={handleEmailChange} />
        <InputName>비밀번호</InputName>
        <LabelInput type={'password'} placeholder={'비밀번호'} value={password} onChange={handlePasswordChange} />
        {isLogin ? (
          <>
            <StrongComment>비밀번호를 잊으셨나요?</StrongComment>
            <Button LightRed type="submit">
              로그인
            </Button>
          </>
        ) : (
          <>
            <InputName>생년월일</InputName>
            <LabelInput type={'date'} value={birthday} onChange={handleBirthdayChange} />
            <Button LightRed type="submit">
              계속하기
            </Button>
          </>
        )}

        {isLogin && (
          <>
            <OrComment>또는</OrComment>
            <Button Blue onClick={handleFaceBook}>
              Facebook으로 계속하기
            </Button>
          </>
        )}
        <ServiceComment>
          계속 진행하면 Pinterest <strong>서비스 약관에 </strong>동의하고
          <strong>
            <br />
            개인정보 보호정책
          </strong>
          을 읽었음을 인정하는 것으로 간주 됩니다. <strong>컬렉션 알림.</strong>
        </ServiceComment>
        {isLogin ? (
          <ChangeModalComment>아직 Pinterest를 사용하고 있지 않으신가요? 가입하기</ChangeModalComment>
        ) : (
          <ChangeModalComment>이미 회원이신가요? 로그인</ChangeModalComment>
        )}
      </ModalContent>
    </ModalWrapper>
  );
}

export default Intro;
