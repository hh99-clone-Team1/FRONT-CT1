import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import palette from '../../../../styles/palette';
import Button from '../../../../components/Button';

function DetailEditComment({ selectedComment, handleClickCancelButton }) {
  const [comment, setComment] = useState(selectedComment);
  const [scrollHeight, setScrollHeight] = useState(0);
  const textareaRef = useRef();

  useEffect(() => {
    if (textareaRef.current) {
      if (textareaRef.current.scrollHeight !== scrollHeight) {
        setScrollHeight(textareaRef.current.scrollHeight);
        textareaRef.current.style.height = `${scrollHeight + 4}px`;
      }
    }
  }, [comment]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(comment);
  };

  return (
    <InputBox onSubmit={handleSubmit}>
      <label htmlFor="comment-input">
        <textarea
          id="comment-input"
          value={comment}
          autoComplete="off"
          onChange={(e) => setComment(e.currentTarget.value)}
          ref={textareaRef}
        />
      </label>
      <ButtonBox>
        <ButtonStyles onClick={handleClickCancelButton} type="button" Gray>
          취소
        </ButtonStyles>
        <ButtonStyles type="submit" LightRed>
          저장
        </ButtonStyles>
      </ButtonBox>
    </InputBox>
  );
}

export default DetailEditComment;

const InputBox = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;

  label {
    padding: 12px 60px 8px 16px;
    width: 100%;
    border-radius: 16px;
    border: 1px solid ${palette.gray[2]};
    justify-content: space-between;
    box-sizing: border-box;
    cursor: pointer;
  }

  textarea {
    min-height: 54px;
    max-height: 148px;
    box-sizing: border-box;
    line-height: 1.2;
    letter-spacing: -1px;
    width: 100%;
    resize: none;
    border: none;
    font-size: 16px;
    outline: none;
    cursor: pointer;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const ButtonStyles = styled(Button)`
  font-weight: 600;
  margin-top: 0;
`;
