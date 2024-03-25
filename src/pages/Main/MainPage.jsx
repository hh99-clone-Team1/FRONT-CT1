/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import styled from 'styled-components';
import { getPosts } from '../../axios/imagesAxios';
import Imageboard from '../../shared/Imageboard/Imageboard';

function MainPage() {
  const [fetchedPosts, setFetchedPosts] = useState([]);
  const [pageId, setPageId] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

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
          <Imageboard fetchedPosts={fetchedPosts} mainboard />
        </InfiniteScroll>
      </Container>
    </Wrapper>
  );
}

export default MainPage;

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
