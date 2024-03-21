import styled from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import ImageContent from '../ImageContent';
import DescriptionContent from '../DescriptionContent';

const getPostDetail = async (id) => {
  const baseUrl = process.env.REACT_APP_SERVER_URL;
  const { data } = await axios(`${baseUrl}/posts/${id}`, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
    },
  });
  // Todo : image 정보 들어오면 return 변경
  return {
    ...data,
    image: 'https://i.pinimg.com/564x/63/2e/6b/632e6b7d7e460e2b19f0a679dda0f500.jpg',
  };
};

function DetailContents() {
  const { id } = useParams();

  const { data: post } = useQuery({ queryKey: ['posts', id], queryFn: () => getPostDetail(id), enabled: !!id });

  if (!post) return <div>..loading</div>;
  return (
    <DetailContentsLayout>
      <ImageContent url={post.image} />
      <DescriptionContent post={post} />
    </DetailContentsLayout>
  );
}

export default DetailContents;

const DetailContentsLayout = styled.div`
  width: 1016px;
  min-height: 500px;
  margin: 8px 0 16px;
  border-radius: 32px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 20px 0px;
  display: flex;
`;
