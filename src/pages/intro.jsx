/* eslint-disable*/
import { useState } from 'react';
import Button from '../components/Button';
import LabelInput from '../components/LabelInput';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { signupUser, loginUser } from '../axios/LoginSignupAxios';
import {
  IntroHeader,
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
    <IntroHeader>
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
    </IntroHeader>
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

  const handleLoginToMain = () => {
    closeModal();
    navigate('/main');
  };

  const handleFaceBook = () => {
    closeModal();
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
      console.log('회원가입 실패 : ', error);
    },
  });

  // 폼 제출
  const handleFormSubmit = async (e) => {
    console.log('choi');
    console.log(newUserInfo);
    e.preventDefault();

    if (isLogin) {
      // 로그인 처리
    } else {
      // 회원가입 처리
      signupMutation.mutate(newUserInfo);
    }
  };

  return (
    <ModalWrapper>
      <ModalContent onSubmit={handleFormSubmit}>
        <ModalCloseButton type="button" onClick={closeModal}>
          X
        </ModalCloseButton>
        <h2>Pinterest에 오신 것을 환영합니다</h2>
        {!isLogin && <IdeaComment>시도해 볼만한 새로운 아이디어 찾기</IdeaComment>}
        <InputName>이메일</InputName>
        <LabelInput type={'email'} placeholder={'이메일'} value={email} onChange={handleEmailChange} />
        <InputName>비밀번호</InputName>
        <LabelInput type={'password'} placeholder={'비밀번호'} value={password} onChange={handlePasswordChange} />
        {isLogin ? (
          <>
            <StrongComment>비밀번호를 잊으셨나요?</StrongComment>
            <Button LightRed type="submit" onClick={closeModal}>
              로그인
            </Button>
          </>
        ) : (
          <>
            <InputName>생년월일</InputName>
            <LabelInput type={'date'} value={birthday} onChange={handleBirthdayChange} />
            <Button LightRed type="submit" onClick={closeModal}>
              계속하기
            </Button>
          </>
        )}

        {isLogin && (
          <>
            <OrComment>또는</OrComment>
            <Button Blue type="button" onClick={handleFaceBook}>
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
