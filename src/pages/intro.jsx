/* eslint-disable*/
import { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import LabelInput from '../components/LabelInput';
import { useNavigate } from 'react-router-dom';

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
        <span>Pinterest </span>
        <span>탐색 </span>
      </div>
      <div>
        <span>소개 </span>
        <span>비즈니스 </span>
        <span>언론 </span>
        <Button LightRed onClick={handleLogin}>
          로그인
        </Button>
        <Button Gray onClick={handleSignup}>
          가입하기
        </Button>
      </div>

      {isModalOpen && <LoginSignupModal closeModal={closeModal} isLogin={isLogin} />}
    </IntroHeader>
  );
}

function LoginSignupModal({ closeModal, isLogin }) {
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
  // const handleGoogle = () => {
  //   closeModal();
  //   window.open('https://www.google.co.kr/', '_blank');
  // };

  const userInfo = {
    email,
    password,
  };

  const newUserInfo = {
    email,
    password,
    birthday,
  };

  return (
    <ModalWrapper>
      <ModalContent>
        <ModalCloseButton onClick={closeModal}>X</ModalCloseButton>
        <h2>Pinterest에 오신 것을 환영합니다</h2>
        {!isLogin && <div>시도해 볼만한 새로운 아이디어 찾기</div>}
        <InputName>이메일</InputName>
        <LabelInput placeholder={'이메일'} onChange={handleEmailChange} />
        <InputName>비밀번호</InputName>
        <LabelInput type={'password'} placeholder={'비밀번호'} onChange={handlePasswordChange} />
        {isLogin ? (
          <StrongComment>비밀번호를 잊으셨나요?</StrongComment>
        ) : (
          <>
            <InputName>생년월일</InputName>
            <LabelInput type={'date'} onChange={handleBirthdayChange} />
          </>
        )}
        <Button LightRed onClick={handleLoginToMain}>
          로그인
        </Button>
        {isLogin && (
          <>
            <OrComment>또는</OrComment>
            <Button Blue onClick={handleFaceBook}>
              Facebook으로 계속하기
            </Button>
          </>
        )}
        {/* <Button onClick={handleGoogle}>
          Google 계정으로 계속하기
        </Button> */}
        <ServiceComment>
          계속 진행하면 Pinterest <strong>서비스 약관에</strong> 동의하고 <strong>개인정보 보호정책</strong>을 읽었음을
          인정하는 것으로 간주됩니다. <strong>컬렉션 알림.</strong>
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

const IntroHeader = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin: 20px;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 240px;
  height: 450px;
  padding: 90px;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0 0 5px;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  color: black;
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const InputName = styled.div`
  text-align: left;
  padding: 10px 0px 0px 10px;
  font-size: 13px;
`;

const StrongComment = styled.div`
  text-align: left;
  padding: 5px 0px 20px 0px;
  font-size: 12px;
  font-weight: bold;
`;

const ServiceComment = styled.div`
  padding: 15px;
  font-size: 10px;
`;

const OrComment = styled.div`
  padding: 10px;
  font-size: 13px;
  font-weight: bold;
`;

const ChangeModalComment = styled.div`
  font-size: 12px;
`;

export default Intro;
