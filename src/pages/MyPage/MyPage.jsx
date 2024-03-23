import styled from 'styled-components';
import MyPageContents from './components/MyPageContents';

function MyPage() {
  return (
    <MyPageLayout>
      <MyPageContents />
    </MyPageLayout>
  );
}

const MyPageLayout = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default MyPage;
