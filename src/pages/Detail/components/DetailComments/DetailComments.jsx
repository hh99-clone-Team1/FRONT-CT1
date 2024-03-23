import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import queryKeys from '../../../../constants/queryKeys';
import { getComments } from '../../../../axios/commentsAxios';
import ProfileButton from '../../../../components/ProfileButton';
import palette from '../../../../styles/palette';
import DetailCommentPopup from '../DetailCommentPopup/DetailCommentPopup';

function DetailComments() {
  const { id: postId } = useParams();
  const [editComment, setEditComment] = useState();

  const { data: comments } = useQuery({
    queryKey: queryKeys.comments(postId),
    queryFn: () => getComments(postId),
    enabled: !!postId,
  });

  const handleEditComment = (commentId) => {
    setEditComment(commentId);
  };

  if (!comments) return <EmptyText>아직 댓글이 없습니다! 대화를 시작하려면 하나를 추가하세요.</EmptyText>;

  return (
    <DeatailCommentsLayout>
      {comments.map(({ nickname, content, commentId }, index) => (
        <CommentBox key={commentId}>
          {editComment === commentId ? (
            <div>{commentId}:를 수정하기</div>
          ) : (
            <>
              <Profile num={index}>{nickname[0]}</Profile>
              <div>
                <TextBox>
                  <strong>{nickname}</strong>
                  <p>{content}</p>
                </TextBox>
                <DetailCommentPopup handleEditButtonClick={() => handleEditComment(commentId)} />
              </div>
            </>
          )}
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

const Profile = styled(ProfileButton)`
  width: 32px;
  height: 32px;
  font-weight: 400;
  padding-bottom: 4px;
  box-sizing: border-box;
`;
