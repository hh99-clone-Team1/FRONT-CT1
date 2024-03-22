/* eslint-disable react/style-prop-object */
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import palette from '../../../../styles/palette';
import likeIcon from '../../../../img/likeIcon.svg';
import likeSelectedIcon from '../../../../img/likeSelectedIcon.svg';
import AddCommentIcon from '../../../../img/AddCommentIcon';
import { addComment, getComments } from '../../../../axios/commentAxios';

function DetailAddComment() {
  const isLike = '좋아요';
  const user = 'test';
  const { id: postId } = useParams();
  const [comment, setComment] = useState('');

  const { data: comments } = useQuery({ queryKey: ['post-comments', `${postId}`], queryFn: () => getComments(postId) });

  const { mutate: handleAddComment } = useMutation({
    mutationFn: addComment,
    onSuccess: () => {
      // Todo: 댓글 쿼리 최신화
      setComment('');
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddComment({ postId, comment });
  };

  console.log(comments);

  return (
    <DetailAddCommentLayout>
      <CommentBox>
        <CountBox $isLike={isLike}>
          <h3>댓글 {comments?.length}개</h3>
          <div>
            <img src={isLike ? likeSelectedIcon : likeIcon} alt="like" />
          </div>
        </CountBox>
        <InputBox onSubmit={handleSubmit}>
          <Profile role="presentation" to={() => '유저페이지로 이동'}>
            {user.split('')[0]}
          </Profile>
          <label htmlFor="comment-input">
            <input id="comment-input" autoComplete="off" onChange={(e) => setComment(e.currentTarget.value)} />
            <ButtonBox type="submit" $active={comment}>
              <AddCommentIcon />
            </ButtonBox>
          </label>
        </InputBox>
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

const CountBox = styled.div`
  height: 44px;
  margin: 4px 0 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 20px;
    font-weight: 600;
  }

  div {
    min-width: 48px;
    min-height: 48px;
    border-radius: 24px;
    background: ${({ $isLike }) => ($isLike ? palette.red[4] : palette.gray[2])};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

const InputBox = styled.form`
  margin-bottom: 12px;
  display: flex;
  align-items: flex-end;

  gap: 8px;

  label {
    border-radius: 24px;
    min-height: 52px;
    width: 100%;
    border: 2px solid ${palette.gray[2]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 6px 0 16px;
    cursor: pointer;
  }

  input {
    width: 260px;
    border: none;
    font-size: 16px;
    outline: none;
    cursor: pointer;

    &:focus {
      cursor: auto;
    }
  }
`;

const Profile = styled(Link)`
  text-decoration: none;
  min-width: 48px;
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

const ButtonBox = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 25px;
  display: ${({ $active }) => ($active ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  background-color: ${palette.red[3]};
  cursor: pointer;

  &:hover {
    background-color: ${palette.red[0]};
  }

  svg {
    fill: #fff;
  }
`;
