/* eslint-disable*/
import { useState } from 'react';
import Button from '../../components/Button';
import LoginSignupModal from './LoginSignupModal';
import { HeaderContainer, IntroHeaderLayout, HeaderLogoBox, HearderSearchBox, HeaderChoiceBox } from './Intro.module';
import InfoArea from './InfoArea';

function IntroHeader() {
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
    <HeaderContainer>
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
      </IntroHeaderLayout>
      {isModalOpen && <LoginSignupModal closeModal={closeModal} isLogin={isLogin} setIsLogin={setIsLogin} />}
    </HeaderContainer>
  );
}

export default IntroHeader;
