import styled from 'styled-components';

function PartFifth() {
  return (
    <PartLayout>
      <PartImg
        src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbbqjR5%2FbtsFYCqX9IB%2F8Jj4Cz8YyKTLW9FS294kkk%2Fimg.jpg"
        alt=""
      />
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

export default PartFifth;
