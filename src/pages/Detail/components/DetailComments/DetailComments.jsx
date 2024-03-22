import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import queryKeys from '../../../../constants/queryKeys';
import { getComments } from '../../../../axios/commentsAxios';

function DetailComments() {
  const { id: postId } = useParams();

  const { data: comments } = useQuery({
    queryKey: queryKeys.comments(postId),
    queryFn: () => getComments(postId),
    enabled: !!postId,
  });

  if (!comments) return null;
  console.log(comments[0].nickname);

  return (
    <DeatailCommentsLayout>
      {comments.map(({ nickname, content, commentId }) => (
        <CommentBox key={commentId}>
          <Profile>{nickname[0]}</Profile>
          {content}
        </CommentBox>
      ))}
    </DeatailCommentsLayout>
  );
}

export default DetailComments;

const DeatailCommentsLayout = styled.div``;

const CommentBox = styled.div``;

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
