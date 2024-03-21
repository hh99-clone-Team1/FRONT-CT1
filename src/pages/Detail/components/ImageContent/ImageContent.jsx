import styled from 'styled-components';

function ImageContent() {
  return (
    <ImageContentLayout>
      <img src="https://i.pinimg.com/564x/63/2e/6b/632e6b7d7e460e2b19f0a679dda0f500.jpg" alt="detail-visual-content" />
    </ImageContentLayout>
  );
}

export default ImageContent;

const ImageContentLayout = styled.div`
  width: 508px;
  border-radius: 32px 0px 0px 32px;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
  }
`;
