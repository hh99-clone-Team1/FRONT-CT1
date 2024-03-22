import styled from 'styled-components';

function PartSecond() {
  return (
    <PartLayout>
      <PartImg src="https://i.pinimg.com/474x/51/32/28/5132288c976019a92273d7d16523c308.jpg" alt="" />
    </PartLayout>
  );
}

const PartLayout = styled.div`
  height: 100vh;
  font-size: 120px;
  background-color: yellow;
`;

const PartImg = styled.img`
  height: 100vh;
`;

export default PartSecond;
