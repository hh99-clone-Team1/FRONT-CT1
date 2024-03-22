import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import queryKeys from '../../../../constants/queryKeys';
import { getComments } from '../../../../axios/commentsAxios';
import ProfileButton from '../../../../components/ProfileButton';
import IconBox from '../../../../components/IconBox';
import EditCommentIcon from '../../../../img/EditCommentIcon';
import palette from '../../../../styles/palette';

function DetailComments() {
  const { id: postId } = useParams();

  const { data: comments } = useQuery({
    queryKey: queryKeys.comments(postId),
    queryFn: () => getComments(postId),
    enabled: !!postId,
  });

  if (!comments) return <EmptyText>아직 댓글이 없습니다! 대화를 시작하려면 하나를 추가하세요.</EmptyText>;

  return (
    <DeatailCommentsLayout>
      {comments.map(({ nickname, content, commentId }, index) => (
        <CommentBox key={commentId}>
          <Profile num={index}>{nickname[0]}</Profile>
          <div>
            <TextBox>
              <strong>{nickname}</strong>
              <p>{content}</p>
            </TextBox>
            <EditButtonBox>
              <EditCommentIcon />
            </EditButtonBox>
          </div>
        </CommentBox>
      ))}
    </DeatailCommentsLayout>
  );
}

export default DetailComments;

const EmptyText = styled.p`
  margin-top: 8px;
  color: ${palette.gray[3]};
`;

const DeatailCommentsLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CommentBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const TextBox = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 4px;
  margin-top: 8px;

  strong {
    font-weight: 600;
  }

  p {
    margin: 0;
  }
`;

const EditButtonBox = styled(IconBox)`
  min-width: 24px;
  max-width: 24px;
  height: 24px;
`;

const Profile = styled(ProfileButton)`
  width: 32px;
  height: 32px;
  font-weight: 400;
  padding-bottom: 4px;
  box-sizing: border-box;
`;
