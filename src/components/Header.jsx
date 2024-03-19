import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const Header = () => {
  const [isShadow, setIsShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 1) {
        setIsShadow(true);
      } else {
        setIsShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <HeaderLayout className={isShadow && 'scrolled'}>
      <IconBox>1</IconBox>
      <NaviButton>홈</NaviButton>
      <NaviButton>만들기</NaviButton>
      <Input />
      <IconBox>2</IconBox>
      <IconBox>3</IconBox>
      <IconBox>4</IconBox>
      <DropDownIcon>.</DropDownIcon>
    </HeaderLayout>
  );
};

export default Header;

const HeaderLayout = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  padding: 4px 16px;
  background: #fff;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;

  &.scrolled {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 8px -8px;
    transition: box-shadow 300ms ease-in-out;
  }
`;

const IconBox = styled.div`
  min-width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  background-color: gray;
`;

const NaviButton = styled(Button)`
  min-width: 60px;
  background: #fff;
  color: #111;
  font-size: 16px;
  font-weight: 600;

  &:hover {
    background: #111;
  }
`;

const Input = styled.input`
  width: 100%;
`;

const DropDownIcon = styled.div`
  width: 24px;
  height: 24px;
  background-color: red;
  border-radius: 25px;
`;
