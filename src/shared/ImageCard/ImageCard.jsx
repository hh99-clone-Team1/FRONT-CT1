import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import usePins from '../../customHooks/usePins';
import palette from '../../styles/palette';
import Profile from '../../components/Profile';

function ImageCard({ optimizedData, mainboard }) {
  const { handleSetPin, isContained } = usePins(optimizedData.postId);

  const navigation = useNavigate();
  return (
    <ImageWrapper onClick={() => navigation(`/detail/${optimizedData.postId}`)} key={optimizedData.postId}>
      <ImageContainer $isContained={isContained}>
        <ElementWrapper>
          <img src={optimizedData.url} loading="lazy" alt="이미지" />
          {mainboard && (
            <>
              <Button onClick={handleSetPin} LightRed>
                {isContained ? '저장됨' : '저장'}
              </Button>
              <ImageName>{optimizedData.title}</ImageName>
              <UserNameContainer>
                <MainLink to={`/mypage/${optimizedData.nickname}`}>
                  <MainProfile num={optimizedData.userId % 10}>{optimizedData.nickname[0]}</MainProfile>
                </MainLink>
                <MainLink>
                  <UserName>{optimizedData.nickname}</UserName>
                </MainLink>
              </UserNameContainer>
            </>
          )}
        </ElementWrapper>
      </ImageContainer>
    </ImageWrapper>
  );
}

export default ImageCard;

const ElementWrapper = styled.div`
  top: 0px;
  left: 0px;
  margin-bottom: 20px;
  position: relative;
  display: block;
  overflow: hidden;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 236px;
  position: relative;

  img {
    display: flex;
    width: 100%;
    border-radius: 16px;
    object-fit: cover;
  }

  button {
    position: absolute;
    top: 25px;
    right: -15px;
    transform: translate(-50%, -50%);
    z-index: 1;
    opacity: 0;
    background: ${({ $isContained }) => ($isContained ? '#000' : palette.red[3])};

    &:hover {
      background: ${({ $isContained }) => ($isContained ? '#000' : palette.red[3])};
    }
  }

  &:hover button {
    opacity: 1;
  }

  &:hover img {
    cursor: pointer;
    filter: brightness(60%);
  }
`;

const ImageName = styled.div`
  position: relative;
  padding: 5px 10px;
  font-size: 14px;
  font-weight: bold;
  margin-top: 4px;
`;

const UserNameContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 10px;
  gap: 8px;
`;

const UserName = styled.div`
  font-size: 14px;
`;

const MainProfile = styled(Profile)`
  width: 30px;
  height: 30px;
  font-size: 14px;
`;

const MainLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;
