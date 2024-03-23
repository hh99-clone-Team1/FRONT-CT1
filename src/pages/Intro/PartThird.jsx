import styled from 'styled-components';
import Button from '../../components/Button';

function PartThird() {
  return (
    <PartLayout>
      <PartImg src="https://s.pinimg.com/webapp/shop-de8ddf10.png" alt="" />
      <PartComment>
        <MainComment>구매하고, 만들고, 시도하고, 실행하세요.</MainComment>
        <SubComment>무엇보다도 Pinterest에서는 전 세계 사람들의 아이디어와 새로운 것을 발견할 수 있습니다.</SubComment>
        <Button LightRed>탐색</Button>
      </PartComment>
    </PartLayout>
  );
}

const PartLayout = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f8e1e5;
`;

const PartImg = styled.img`
  height: 100vh;
`;

const PartComment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  width: 420px; /* 가로 길이를 400px로 고정 */
  min-width: 420px;
  height: 600px; /* 세로 길이를 600px로 고정 */
  padding: 100px 270px 0px 270px;
`;

const MainComment = styled.div`
  font-size: 60px;
  margin: 10px 0;
  color: #c32f00;
  font-weight: bold;
  text-align: center;
`;

const SubComment = styled.div`
  font-size: 24px;
  margin: 10px 0;
  color: #c32f00;
  text-align: center;
`;

export default PartThird;
