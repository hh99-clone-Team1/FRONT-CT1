import styled from 'styled-components';

function PartThird() {
  return (
    <PartLayout>
      <PartImg
        src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcvkpD4%2FbtsFYmPtdDJ%2FoNLqJqCMpcKtGhAikJEs9K%2Fimg.jpg"
        alt=""
      />
    </PartLayout>
  );
}

const PartLayout = styled.div`
  height: 100vh;
  font-size: 120px;
  background-color: #91ff91;
`;

const PartImg = styled.img`
  height: 100vh;
`;

export default PartThird;
