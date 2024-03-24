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
      const optimizedData = await Promise.all(
        fetchedPosts.map(async (post) => {
          return optimizeImage(post.url, post.title, post.nickname, post.postId, post.userId);
        }),
      );
      setOptimizedImages((prevOptimizedImages) => [...prevOptimizedImages, ...optimizedData]);
    };

    optimizeImages();
  }, [fetchedPosts]);

  const handleLoadMore = () => {
    if (!loading && hasMore) {
      setPageId((prevPageId) => prevPageId + 1);
    }
  };

  return (
    <Wrapper>
      <Container className="mainboard">
        <InfiniteScroll
          pageStart={1}
          loadMore={handleLoadMore}
          hasMore={hasMore}
          loader={loading && <p>Loading...</p>}
          useWindow={false}
          initialLoad={false}
        >
          {optimizedImages.map((optimizedData) => (
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
