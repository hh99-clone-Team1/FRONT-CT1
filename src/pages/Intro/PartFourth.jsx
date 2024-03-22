import styled from 'styled-components';

function PartFourth() {
  return (
    <PartLayout>
      <PartImg src="https://s.pinimg.com/webapp/shop-de8ddf10.png" alt="" />
    </PartLayout>
  );
}

const PartLayout = styled.div`
  height: 100vh;
  font-size: 120px;
  background-color: pink;
`;

const PartImg = styled.img`
  height: 100vh;
`;

export default PartFourth;
