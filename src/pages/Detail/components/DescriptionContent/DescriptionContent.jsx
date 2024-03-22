import styled from 'styled-components';
import Button from '../../../../components/Button';
import palette from '../../../../styles/palette';
import DescriptionContentMain from '../DescriptionContentMain';
import DetailAddComment from '../DetailAddComment';

function DescriptionContent() {
  const handleClickButton = () => {
    console.log('핀 저장');
  };

  return (
    <DescriptionContentLayout>
      <ContentHeader>
        <HeaderButton onClick={handleClickButton}>저장</HeaderButton>
      </ContentHeader>
      <ContentBox>
        <DescriptionContentMain />
      </ContentBox>
      <DetailAddComment />
    </DescriptionContentLayout>
  );
}

export default DescriptionContent;

const DescriptionContentLayout = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border-radius: 0 32px 32px 0;
  max-height: calc(100vh - 96px);
`;

const ContentBox = styled.div`
  box-sizing: border-box;
  padding: 0 32px;
  flex: 1 1 auto;
  overflow: scroll;
`;

const ContentHeader = styled.div`
  box-sizing: border-box;
  width: 508px;
  padding: 32px 32px 0 0;
  min-height: 92px;
  border-radius: 0 32px 32px 0;
  background-color: #fff;
  position: sticky;
  top: 64px;
  display: flex;
  justify-content: flex-end;
`;

const HeaderButton = styled(Button)`
  background: ${palette.red[3]};
  color: #fff;
`;
