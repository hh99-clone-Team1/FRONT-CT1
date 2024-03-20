import styled from 'styled-components';
import palette from '../styles/palette';

const IconBox = styled.div`
  min-width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  cursor: pointer;

  &:hover {
    background-color: ${palette.gray[2]};
  }
`;

export default IconBox;
