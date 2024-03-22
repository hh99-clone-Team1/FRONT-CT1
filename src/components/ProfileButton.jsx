import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../styles/palette';

const ProfileButton = styled(Link)`
  text-decoration: none;
  width: 48px;
  height: 48px;
  border-radius: 25px;
  background: ${({ num }) => palette.profile[num ? num % palette.profile.length : 2]};
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ProfileButton;
