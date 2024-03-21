import styled from 'styled-components';
import DetailDescriptionContent from '../DetailDescriptionContent/DetailDescriptionContent';
import DetailImageContent from '../DetailImageContent/DetailImage';

function DetailContents() {
  return (
    <DetailContentsLayout>
      <DetailImageContent />
      <DetailDescriptionContent />
    </DetailContentsLayout>
  );
}

export default DetailContents;

const DetailContentsLayout = styled.div``;
