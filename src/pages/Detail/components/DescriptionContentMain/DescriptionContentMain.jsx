import styled from 'styled-components';
import DetailComment from '../DetailComment/DetailComment';

function DescriptionContentMain() {
  return (
    <MainLayout>
      <div>프로필, 닉네임, 본문 </div>
      <DetailComment />
    </MainLayout>
  );
}

export default DescriptionContentMain;

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
`;
