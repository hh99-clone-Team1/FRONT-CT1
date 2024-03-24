import { useEffect, useState } from 'react';
import styled from 'styled-components';
import './Imageboard.css';
import { getPosts } from '../../axios/imagesAxios';
import ImageCard from '../ImageCard/ImageCard';
import optimizeImage from '../ImageCard/ImageOptimization';

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
    const optimizeImages = async () => {
      const optimizedData = await Promise.all(
        imageUrls.map(async (imageUrl, index) => {
          const optimized = await optimizeImage(
            imageUrl,
            fetchedPosts[index].title,
            fetchedPosts[index].nickname,
            fetchedPosts[index].postId,
          );
          return optimized;
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
