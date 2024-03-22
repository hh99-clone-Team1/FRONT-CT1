import { useEffect, useState } from 'react';
import styled from 'styled-components';
import './Imageboard.css';
import Button from '../../components/Button';

function Imageboard({ images, mainboard }) {
  const [optimizedImages, setOptimizedImages] = useState([]);

  useEffect(() => {
    // 이미지 매핑
    const optimizeImages = async () => {
      const optimizedUrls = await Promise.all(
        images.map(async (imageUrl) => {
          const img = new Image();
          img.src = imageUrl;
          await img.decode();
          const newWidth = img.naturalWidth * 0.66;
          const newHeight = img.naturalHeight * 0.66;
          const quality = 80;
          const format = 'webp';
          const optimizedUrl = `${imageUrl}?w=${newWidth}&h=${newHeight}&q=${quality}&fm=${format}&fit=crop`;
          return optimizedUrl;
        }),
      );
      setOptimizedImages(optimizedUrls);
    };

    optimizeImages();
  }, [images]);

  return (
    <Wrapper>
      <Container className="mainboard">
        {optimizedImages.map((optimizedUrl) => (
          <ImageWrapper>
            <ImageContainer>
              <ElementWrapper>
                <img src={optimizedUrl} loading="lazy" alt="이미지" />
                {mainboard && (
                  <>
                    <Button LightRed>저장</Button>
                    <ImageName>이미지 이름</ImageName>
                    <UserNameContainer>
                      <Profile>S</Profile>
                      <UserName>유저이름</UserName>
                    </UserNameContainer>
                  </>
                )}
              </ElementWrapper>
            </ImageContainer>
          </ImageWrapper>
        ))}
      </Container>
    </Wrapper>
  );
}

export default Imageboard;

const Wrapper = styled.div`
  padding-top: 80px;
  display: block;
  justify-content: center;
  width: 100%;
`;

const Container = styled.div`
  height: 100%;
  margin: 0 auto;
  display: block;
  position: relative;
`;

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
`;

const UserName = styled.div`
  font-size: 14px;
`;

const Profile = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: skyblue;
  margin-right: 8px;
`;
