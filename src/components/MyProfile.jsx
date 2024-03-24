import styled from 'styled-components';
import { useUser } from '../customHooks/useUserContext';
import ProfileButton from './ProfileButton';
import palette from '../styles/palette';

function MyProfile() {
  const { user } = useUser();
  console.log(user);
  return <MyProfileButton $color={user?.color}>{user?.nickname[0]}</MyProfileButton>;
}

export default MyProfile;

const MyProfileButton = styled(ProfileButton)`
  background: ${({ $color }) => palette.profile[Number($color)]};
`;
