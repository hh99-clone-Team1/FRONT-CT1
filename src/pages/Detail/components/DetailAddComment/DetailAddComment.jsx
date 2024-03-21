import styled from 'styled-components';
import palette from '../../../../styles/palette';

function DetailAddComment() {
  return (
    <DetailAddCommentLayout>
      <CommentBox>
        <div>댓글, 좋아요</div>
        <div>인풋</div>
      </CommentBox>
    </DetailAddCommentLayout>
  );
}

export default DetailAddComment;

const DetailAddCommentLayout = styled.div`
  overflow: hidden;
  border-radius: 0 0 32px 0;
  position: sticky;
  bottom: 0;
`;

const CommentBox = styled.div`
  box-sizing: border-box;
  padding: 8px 32px;
  border-top: 1px solid ${palette.gray[1]};
  display: flex;
  flex-direction: column;

  background: #fff;
`;
