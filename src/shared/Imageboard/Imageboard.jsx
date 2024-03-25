import { useEffect, useState } from 'react';
import styled from 'styled-components';
import './Imageboard.css';
import InfiniteScroll from 'react-infinite-scroller';
import { getPosts } from '../../axios/imagesAxios';
import ImageCard from '../ImageCard/ImageCard';
import optimizeImage from '../ImageCard/ImageOptimization';

function Imageboard({ mainboard }) {
  const [fetchedPosts, setFetchedPosts] = useState([]);
  const [pageId, setPageId] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [optimizedImages, setOptimizedImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const posts = await getPosts(pageId);
        setFetchedPosts((prevPosts) => [...prevPosts, ...posts]);
        setLoading(false);
        if (posts.length === 0) {
          setHasMore(false);
        }
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [pageId]);

  useEffect(() => {
    const optimizeImages = async () => {
      const newOptimizedImages = new Map(optimizedImages);
      await Promise.all(
        fetchedPosts.map(async (post) => {
          if (!optimizedImages.has(post.postId)) {
            const optimizedData = await optimizeImage(post.url, post.title, post.nickname, post.postId, post.userId);
            newOptimizedImages.set(post.postId, optimizedData);
          }
        }),
      );
      setOptimizedImages(newOptimizedImages);
    };

    optimizeImages();
  }, [fetchedPosts, optimizedImages]);

  const handleLoadMore = () => {
    if (!loading && hasMore) {
      setPageId((prevPageId) => prevPageId + 1);
    }
  };

  return (
    <Wrapper>
      <Container className="mainboard">
        <InfiniteScroll
          key="infinite-scroll"
          pageStart={1}
          loadMore={handleLoadMore}
          hasMore={hasMore}
          loader={loading && <p>Loading...</p>}
          useWindow={false}
          initialLoad={false}
        >
          {Array.from(optimizedImages.values()).map((optimizedData) => (
            <ImageCard optimizedData={optimizedData} mainboard={mainboard} key={optimizedData.postId} />
          ))}
        </InfiniteScroll>
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
