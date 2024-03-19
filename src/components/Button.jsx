import styled, { css } from 'styled-components';
import palette from '../styles/palette';

export const Button = styled.button`
  height: 52px;
  border-radius: 35px;
  border: none;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  ${(props) =>
    props.smallRed &&
    css`
      background-color: ${palette.red[0]};
      width: 65px;
      color: white;
      &:hover {
        background-color: ${palette.red[1]};
      }
    `}
  ${(props) =>
    props.smallGray &&
    css`
      background-color: ${palette.gray[0]};
      width: 65px;
      &:hover {
        background-color: ${palette.gray[1]};
      }
    `}
`;

export default Button;
