import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import IconBox from '../../components/IconBox';

function Header() {
  const test = 'test'; // Todo: path에 따라 버튼 스타일 변경
  return (
    <HeaderLayout>
      <IconBox>1</IconBox>
      <div style={{ width: '60px' }}>
        <NaviButton className={test !== 'test' && 'header__navi-button--selected'}>홈</NaviButton>
      </div>
      <div style={{ width: '72px' }}>
        <NaviButton className={test === 'test' && 'header__navi-button--selected'}>만들기</NaviButton>
      </div>
      <Input />
      <IconBox>2</IconBox>
      <IconBox>3</IconBox>
      <IconBox>4</IconBox>
      <DropDownIcon>.</DropDownIcon>
    </HeaderLayout>
  );
}

export default Header;

const HeaderLayout = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 16px;
  width: 100%;
`;

const NaviButton = styled(Button)`
  min-width: 60px;
  width: 100%;
  background: #fff;
  color: #111;
  font-size: 16px;
  font-weight: 600;

  &.header__navi-button--selected {
    color: #fff;
    background: #111;
  }
`;

const Input = styled.input`
  flex: 1 1 auto;
  box-sizing: border-box;
  min-width: 407px;
  padding: 0 8px;
`;

const DropDownIcon = styled.div`
  width: 24px;
  height: 24px;
  background-color: red;
  border-radius: 25px;
`;
