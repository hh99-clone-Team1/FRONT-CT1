import styled, { css } from 'styled-components';
import palette from '../styles/palette';

const Button = styled.button`
  display: inline-block;
  height: 52px;
  min-width: 60px;
  border-radius: 35px;
  border: none;
  font-weight: bold;
  font-size: 15px;
  text-align: center;
  padding: 10px 20px;
  cursor: pointer;
  ${(props) =>
    props.Red &&
    css`
      background-color: ${palette.red[0]};
      color: white;
      &:hover {
        background-color: ${palette.red[1]};
      }
    `}
  ${(props) =>
    props.LightRed &&
    css`
      background-color: ${palette.red[3]};
      color: white;
      &:hover {
        background-color: ${palette.red[0]};
      }
    `}
  ${(props) =>
    props.Gray &&
    css`
      background-color: ${palette.gray[0]};
      &:hover {
        background-color: ${palette.gray[1]};
      }
    `}
  ${(props) =>
    props.Black &&
    css`
      background-color: white;
      &:hover {
        background-color: black;
      }
    `}
  ${(props) =>
    props.Blue &&
    css`
      background-color: ${palette.blue[0]};
      color: white;
    `}
`;

export default Button;
