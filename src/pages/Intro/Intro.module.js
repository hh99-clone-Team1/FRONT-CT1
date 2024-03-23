import styled from 'styled-components';
import palette from '../../styles/palette';

const IntroHeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin: 20px;
`;

const HeaderLogoBox = styled.span`
  padding: 30px 10px 0px 20px;
  color: red;
  font-size: 20px;
  font-weight: bold;
`;
const HearderSearchBox = styled.span`
  margin-top: 10px;
  padding: 9px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: ${palette.gray[0]};
  }
`;
const HeaderChoiceBox = styled.span`
  padding-right: 30px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    text-decoration-line: underline;
  }
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalContent = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 257px;
  height: 450px;
  padding: 86px;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0 0 5px;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 20px;
  color: black;
  background-color: transparent;
  border: none;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

const InputName = styled.div`
  text-align: left;
  padding: 10px 0px 0px 10px;
  font-size: 13px;
`;

const IdeaComment = styled.div`
  font-size: 14px;
`;

const StrongComment = styled.div`
  text-align: left;
  padding: 5px 0px 10px 0px;
  font-size: 12px;
  font-weight: bold;
`;

const ServiceComment = styled.div`
  padding: 15px;
  font-size: 9.7px;
`;

const OrComment = styled.div`
  padding: 10px;
  font-size: 12px;
  font-weight: bold;
`;

const ChangeModalComment = styled.div`
  font-size: 10px;
  font-weight: bold;
`;

export {
  IntroHeaderLayout,
  HeaderLogoBox,
  HearderSearchBox,
  HeaderChoiceBox,
  ModalWrapper,
  ModalContent,
  ModalCloseButton,
  InputName,
  IdeaComment,
  StrongComment,
  ServiceComment,
  OrComment,
  ChangeModalComment,
};
