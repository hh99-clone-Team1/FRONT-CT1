import styled from 'styled-components';
import Button from '../../../../components/Button';
import palette from '../../../../styles/palette';
import DescriptionContentMain from '../DescriptionContentMain';

function DescriptionContent() {
  return (
    <DescriptionContentLayout>
      <ContentBox>
        <ContentHeader>
          <HeaderButton>저장</HeaderButton>
        </ContentHeader>
        <DescriptionContentMain />
      </ContentBox>
      <ContentFooterBox>
        <ContentFooter>
          <div>댓글, 좋아요</div>
          <div>인풋</div>
        </ContentFooter>
      </ContentFooterBox>
    </DescriptionContentLayout>
  );
}

export default DescriptionContent;

const DescriptionContentLayout = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border-radius: 0 32px 32px 0;
`;

const ContentBox = styled.div`
  box-sizing: border-box;
  padding: 0 32px;
  flex: 1 1 auto;
`;
const ContentHeader = styled.div`
  box-sizing: border-box;
  width: 444px;
  padding-top: 32px;
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

const ContentFooterBox = styled.div`
  overflow: hidden;
  border-radius: 0 0 32px 0;
  position: sticky;
  bottom: 0;
`;

const ContentFooter = styled.div`
  box-sizing: border-box;
  padding: 8px 32px;
  border-top: 1px solid ${palette.gray[1]};
  display: flex;
  flex-direction: column;

  background: #fff;
`;
