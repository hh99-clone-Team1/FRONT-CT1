import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import DetailComments from '../DetailComments';
import queryKeys from '../../../../constants/queryKeys';
import { getPostDetail } from '../../../../axios/postsAxios';

function DescriptionContentMain() {
  const { id } = useParams();

  const { data: post } = useQuery({
    queryKey: queryKeys.postDetail(id),
    queryFn: () => getPostDetail(id),
    enabled: !!id,
  });

  if (!post) return null;

  const { nickname, title, content } = post;
  return (
    <MainLayout>
      <ContentsBox>
        <h1>{title}</h1>
      </ContentsBox>
      <ContentsBox>
        <p>{content}</p>
      </ContentsBox>
      <ContentsBox>
        <Profile role="presentation" to={() => '유저페이지로 이동'}>
          {nickname.split('')[0]}
        </Profile>
        <Link className="content__user-name" to={() => '유저페이지로 이동'}>
          {nickname}
        </Link>
      </ContentsBox>
      <DetailComments />
    </MainLayout>
  );
}

export default DescriptionContentMain;

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    word-wrap: break-word;
    font-size: 28px;
    font-weight: 600;
    margin: 0;
  }

  .content__user-name {
    margin-top: 16px;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
  }
`;

const ContentsBox = styled.div`
  max-width: 444px;
  display: flex;
  word-break: break-all;
  gap: 10px;
  align-items: center;
`;

const Profile = styled(Link)`
  text-decoration: none;
  width: 48px;
  height: 48px;
  margin-top: 16px;
  border-radius: 25px;
  background: skyblue;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;
