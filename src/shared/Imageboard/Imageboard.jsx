import { useEffect, useState } from 'react';
import styled from 'styled-components';
import './Imageboard.css';
import { getPosts } from '../../axios/imagesAxios';
import ImageCard from '../ImageCard/ImageCard';

function Imageboard({ mainboard }) {
  const [fetchedPosts, setFetchedPosts] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [optimizedImages, setOptimizedImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const posts = await getPosts();
        setFetchedPosts(posts);
        const urls = posts.map((post) => post.url);
        setImageUrls(urls);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // 이미지 매핑
    const optimizeImages = async () => {
      const optimizedData = await Promise.all(
        imageUrls.map(async (imageUrl, index) => {
          const img = new Image();
          img.src = imageUrl;
          await img.decode();
          const newWidth = img.naturalWidth * 0.66;
          const newHeight = img.naturalHeight * 0.66;
          const quality = 80;
          const format = 'webp';
          const optimizedUrl = `${imageUrl}?w=${newWidth}&h=${newHeight}&q=${quality}&fm=${format}&fit=crop`;
          return {
            url: optimizedUrl,
            title: fetchedPosts[index].title,
            nickname: fetchedPosts[index].nickname,
            postId: fetchedPosts[index].postId,
          };
        }),
      );
      setOptimizedImages(optimizedData);
    };

    optimizeImages();
  }, [imageUrls, fetchedPosts]);

  return (
    <Wrapper>
      <Container className="mainboard">
        {optimizedImages.map((optimizedData) => (
          <ImageCard
            optimizedData={optimizedData}
            mainboard={mainboard}
            key={optimizedData.postId + optimizedData.title}
          />
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
