import styled from 'styled-components';
import { useState } from 'react';
import Button from '../../../components/Button';
import palette from '../../../styles/palette';
import MadenImgs from './MadenImgs';
import SavedImgs from './SavedImgs';

function MyPageContents() {
  const username = localStorage.getItem('username');
  const userEmail = localStorage.getItem('email');
  const usernameFirstChar = userEmail.charAt(0).toUpperCase();
  const [selectedButton, setSelectedButton] = useState('MadenButton');

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <>
      <MyIcon>{usernameFirstChar}</MyIcon>
      <MyName>{username}</MyName>
      <MyEmail>{userEmail}</MyEmail>
      <Following>팔로잉 132명</Following>
      <ButtonsBox>
        <Button Gray>공유</Button>
        <Button Gray>프로필 수정</Button>
      </ButtonsBox>
      <SelectImgType>
        <MadenButton onClick={() => handleButtonClick('MadenButton')} selected={selectedButton === 'MadenButton'}>
          생성됨
        </MadenButton>
        <SavedButton onClick={() => handleButtonClick('SavedButton')} selected={selectedButton === 'SavedButton'}>
          저장됨
        </SavedButton>
      </SelectImgType>
      {selectedButton === 'MadenButton' ? <MadenImgs /> : <SavedImgs />}
    </>
  );
}

const MyIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  width: 120px;
  height: 120px;
  background-color: ${palette.gray[0]};
  border-radius: 100px;
  font-size: 48px;
  font-weight: 500;
`;

const MyName = styled.div`
  margin: 5px;
  font-size: 36px;
  font-weight: bold;
`;

const MyEmail = styled.div`
  margin: 5px;
  font-size: 14px;
  color: ${palette.gray[3]};
`;

const Following = styled.div`
  margin: 5px;
  font-size: 16px;
`;

const ButtonsBox = styled.div`
  margin: 15px;

  Button {
    margin-right: 8px;
  }
`;

const SelectImgType = styled.div`
  display: flex;
  margin: 20px 0px 10px 0px;
`;

const MadenButton = styled.div`
  margin: 8px;
  padding: 8px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: ${(props) => (props.selected ? 'underline' : 'none')};
  cursor: pointer;

  &:hover {
    background-color: ${palette.gray[0]};
  }
`;

const SavedButton = styled.div`
  margin: 8px;
  padding: 8px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: ${(props) => (props.selected ? 'underline' : 'none')};
  cursor: pointer;

  &:hover {
    background-color: ${palette.gray[0]};
  }
`;

export default MyPageContents;
