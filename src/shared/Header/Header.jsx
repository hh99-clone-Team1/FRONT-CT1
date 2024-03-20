import styled from 'styled-components';
import Button from '../../components/Button';
import IconBox from '../../components/IconBox';
import palette from '../../styles/palette';
import { ChatIcon, DropdownIcon, LogoIcon, NoticeIcon } from '../../img/HeaderIcons';

function Header() {
  const test = 'test'; // Todo: path에 따라 버튼 background 변경
  return (
    <HeaderLayout>
      <IconBox>
        <LogoIcon color={palette.red[3]} />
      </IconBox>
      <NaviButton className={test !== 'test' && 'header__navi-button--selected'}>홈</NaviButton>
      <NaviButton className={test === 'test' && 'header__navi-button--selected'}>만들기</NaviButton>
      <Input />
      <IconBox>
        <NoticeIcon color={palette.gray[3]} />
      </IconBox>
      <IconBox>
        <ChatIcon color={palette.gray[3]} />
      </IconBox>
      <IconBox>
        <Profile>s</Profile>
      </IconBox>
      <IconStyles>
        <DropdownIcon color={palette.gray[3]} />
      </IconStyles>
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
  background: #fff;
  color: #111;
  font-size: 16px;
  padding: 10px 16px;

  &.header__navi-button--selected {
    color: #fff;
    background: ${palette.black[0]};
  }
`;

const Input = styled.input`
  flex: 1 1 auto;
  box-sizing: border-box;
  min-width: 407px;
  padding: 0 8px;
`;

const Profile = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 25px;
  background: skyblue;
`;

const IconStyles = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: ${palette.gray[2]};
  }
`;
