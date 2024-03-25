import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import palette from '../../styles/palette';
import Profile from '../../components/Profile';
import { useUser } from '../../customHooks/useUserContext';

function HeaderDropDown() {
  const navigation = useNavigate();
  const { user } = useUser();

  return (
    <DropDownBox>
      <DropDown>
        <p className="dropdown__section-title">현재 로그인 계정</p>
        <ProfileBox onClick={() => navigation(`/mypage/${user.userId}`)}>
          <DropdownProfile>s</DropdownProfile>
          <ProfileTextBox>
            <h4>{user.nickname}</h4>
            <p>개인</p>
            <p>{user.email}</p>
          </ProfileTextBox>
        </ProfileBox>
        <p className="dropdown__section-title">옵션 더 보기</p>
        <PopupButton>로그아웃</PopupButton>
      </DropDown>
    </DropDownBox>
  );
}

export default HeaderDropDown;

const DropDownBox = styled.div`
  position: relative;
`;

const DropDown = styled.div`
  position: absolute;
  top: 20px;
  right: 0;
  box-sizing: border-box;
  min-width: 180px;
  min-height: 40px;
  padding: 8px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  position: absolute;
  z-index: 2;

  .dropdown__section-title {
    margin: 8px;
    font-size: 12px;
  }
`;

const ProfileBox = styled.div`
  box-sizing: border-box;
  padding: 8px;
  margin-bottom: 20px;
  border-radius: 8px;
  display: flex;
  gap: 8px;
  cursor: pointer;

  &:hover {
    background: ${palette.gray[2]};
  }
`;

const DropdownProfile = styled(Profile)`
  width: 60px;
  height: 60px;
  border-radius: 40px;
  font-size: 32px;
  font-weight: 400;
  align-items: center;
  padding-bottom: 8px;
  box-sizing: border-box;
`;

const ProfileTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h4 {
    margin: 0;
    font-weight: 600;
  }

  p {
    font-size: 14px;
    margin: 0;
    color: ${palette.gray[3]};
  }
`;

const PopupButton = styled.button`
  height: 36px;
  width: 100%;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: ${palette.gray[2]};
  }
`;
