import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import Button from '../../components/Button';

function PartSecond() {
  return (
    <PartLayout>
      <PartImgs>
        <DivTop>
          <FaSearch className="searchIcon" />
          <SearchComment>닭고기로 만드는 손쉬운 저녁 메뉴</SearchComment>
        </DivTop>
        <ImgFirst src="https://s.pinimg.com/webapp/center-2d76a691.png" alt="사진1" />
        <ImgSecond src="https://s.pinimg.com/webapp/topRight-6902088a.png" alt="사진2" />
        <ImgThird src="https://s.pinimg.com/webapp/left-ccce7532.png" alt="사진3" />
        <ImgFourth src="https://s.pinimg.com/webapp/right-2bd1edfc.png" alt="사진4" />
      </PartImgs>
      <PartComment>
        <MainComment>아이디어 검색</MainComment>
        <SubComment>
          어떤 것을 시도해 보고 싶으세요? 닭고기로 만드는 간단한 저녁 메뉴와 같이 관심 있는 내용을 검색하고 결과를
          확인해 보세요.
        </SubComment>
        <Button LightRed>탐색</Button>
      </PartComment>
    </PartLayout>
  );
}

const PartLayout = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f6f68e;
`;

const PartImgs = styled.div`
  position: relative;
  width: 70%;
`;

const DivTop = styled.div`
  position: absolute;
  top: 300px;
  left: 300px;
  width: 300px;
  height: 60px;
  background-color: white;
  padding: 15px;
  border: none;
  border-radius: 50px;
  z-index: 5;
  display: flex;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  justify-content: center;
`;

const SearchComment = styled.div`
  color: #6e0f3c;
`;

const ImgFirst = styled.img`
  position: absolute;
  top: 160px;
  left: 350px;
  width: 35vh;
  height: auto;
  z-index: 4;
`;

const ImgSecond = styled.img`
  position: absolute;
  top: 80px;
  left: 540px;
  width: 22vh;
  height: auto;
  z-index: 3;
`;

const ImgThird = styled.img`
  position: absolute;
  top: 230px;
  left: 210px;
  width: 23vh;
  height: auto;
  z-index: 2;
`;

const ImgFourth = styled.img`
  position: absolute;
  top: 430px;
  left: 550px;
  width: 20vh;
  height: auto;
  z-index: 1;
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
  color: #c31952;
  font-weight: bold;
  text-align: center;
`;

const SubComment = styled.div`
  font-size: 24px;
  margin: 10px 0;
  color: #c31952;
  text-align: center;
`;

export default PartSecond;
