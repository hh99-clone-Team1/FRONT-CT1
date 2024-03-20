import React from 'react';
import styled from 'styled-components';
import palette from '../styles/palette';

function Input({ id, placeholder, type, value, label, onChange, ...styles }) {
  return (
    <InputBox>
      {label && (
        <label htmlFor={id}>
          <p>{label}</p>
        </label>
      )}
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        id={id}
        onChange={onChange}
        {...styles}
      />
    </InputBox>
  );
}
export default Input;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;

  p {
    font-size: 12px;
    margin: 0;
    padding-bottom: 8px;
    line-height: 1;
    cursor: pointer;
  }

  input {
    box-sizing: border-box;
    width: 100%;
    padding: 12px 16px;
    border-radius: 16px;
    border: 2px solid #cdcdcd;
    color: ${palette.black[0]};
    font-size: 16px;

    &:focus {
      box-shadow: 0 0 0 4px rgba(0, 132, 255, 0.5);
      outline: 0;
    }
  }
`;
