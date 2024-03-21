import styled from 'styled-components';
import ImageContent from '../ImageContent';
import DescriptionContent from '../DescriptionContent';

function DetailContents() {
  return (
    <DetailContentsLayout>
      <ImageContent />
      <DescriptionContent />
    </DetailContentsLayout>
  );
}

export default DetailContents;

const DetailContentsLayout = styled.div`
  width: 1016px;
  min-height: 500px;
  margin: 8px 0 16px;
  border-radius: 32px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 20px 0px;
  display: flex;
`;
