import { useState } from 'react';
import styled, { css } from 'styled-components';
import palette from '../../styles/palette';
import IconBox from '../../components/IconBox';
import LabelInput from '../../components/LabelInput';
import Button from '../../components/Button';
import { SideOpenIcon, PlusIcon, UploadIcon } from '../../img/AddImageIcons';

function AddImage() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <MainContainer>
      <SideBar>
        <SideIcon>
          <IconBox>
            <SideOpenIcon color={palette.black[0]} />
          </IconBox>
        </SideIcon>
        <SideIcon>
          <IconBox>
            <PlusIcon color={palette.black[0]} />
          </IconBox>
        </SideIcon>
        <DummyBox Small />
      </SideBar>
      <AddContainer>
        <TopBar>
          <TopTitle>핀 만들기</TopTitle>
        </TopBar>
        <ImageAddContainer>
          <ImageAddSide>
            <ImageAddBox onClick={handleFileSelect}>
              <input type="file" id="fileInput" onChange={handleFileSelect} style={{ display: 'none' }} />
              {selectedFile && <ImageAddBox src={URL.createObjectURL(selectedFile)} />}
              <IconBox>
                <UploadIcon color={palette.black[0]} />
              </IconBox>
              <BoxText>파일을 선택하거나 여기로 끌어다 놓으세요.</BoxText>
              <BoxNotice>Pinterest는 20MB 미만의 고화질 .jpg 파일 사용을 권장합니다.</BoxNotice>
            </ImageAddBox>
            <DummyBox Long />
            <Button GrayLong>URL에서 저장</Button>
          </ImageAddSide>
          <ImageInputSide>
            <InputWrapper>
              <InputName>제목</InputName>
              <LabelInput type="title" placeholder="제목 추가" />
            </InputWrapper>
            <InputWrapper>
              <InputName>설명</InputName>
              <InputHigh type="content" placeholder="자세한 설명을 추가하세요" />
            </InputWrapper>
            <InputWrapper>
              <InputName>링크</InputName>
              <LabelInput type="link" placeholder="링크 추가" />
            </InputWrapper>
            <InputNotice>
              불법 촬영 콘텐츠 등을 게시하는 경우 Pinterest는 한국 전기통신사업법 22-5조에 따라 해당 콘텐츠의 액세스를
              삭제하거나 차단할 수 있으며, 사용자는 관련 법률 및 규정에 따라 처벌 받을 수 있습니다.
            </InputNotice>
          </ImageInputSide>
        </ImageAddContainer>
      </AddContainer>
    </MainContainer>
  );
}

export default AddImage;

const MainContainer = styled.div`
  border-top: 1px solid #ccc;
`;

const SideBar = styled.div`
  position: fixed;
  padding-top: 80px;
  top: 0;
  left: 0;
  width: 85px;
  height: 100%;
  background-color: white;
  border-right: 1px solid #ccc;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const AddContainer = styled.div`
  margin-left: 85px;
`;

const TopBar = styled.div`
  position: fixed;
  padding-top: 80px;
  top: 0;
  left: 85px;
  width: calc(100% - 85px);
  height: 80px;
  background-color: white;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
`;

const TopTitle = styled.div`
  margin: 0;
  padding: 5px 25px;
  font-weight: bold;
  font-size: 20px;
`;

const SideIcon = styled.div`
  width: 48px;
  height: 48px;
  padding: 15px;
`;

const ImageAddContainer = styled.div`
  padding-top: 185px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

const ImageAddSide = styled.div`
  width: 370px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ImageInputSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 50px;
`;

const InputWrapper = styled.div`
  width: 530px;
  padding-bottom: 15px;
`;

const InputName = styled.div`
  text-align: left;
  padding: 10px 0px 0px 5px;
  font-size: 13px;
`;

const InputNotice = styled.div`
  width: 530px;
  text-align: left;
  font-size: 13px;
  margin-left: 5px;
  margin-top: 10px;
`;

const ImageAddBox = styled.div`
  width: 370px;
  height: 450px;
  border: 1px dashed ${palette.gray[6]};
  border-width: 1px;
  border-width: 2px;
  border-radius: 30px;
  background-color: ${palette.gray[0]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

const BoxText = styled.div`
  width: 220px;
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 10px;
`;

const BoxNotice = styled.div`
  width: 350px;
  font-size: 13px;
  text-align: center;
  position: absolute;
  padding-bottom: 20px;
  bottom: 0;
`;

const DummyBox = styled.div`
  border-bottom: 1px solid #ccc;
  margin-bottom: 25px;
  ${(props) =>
    props.Long &&
    css`
      width: 370px;
      height: 25px;
    `}
  ${(props) =>
    props.Small &&
    css`
      width: 85px;
      height: 5px;
    `}
`;

const InputHigh = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: 105px;
  padding: 12px 16px;
  border-radius: 16px;
  border: 2px solid #cdcdcd;
  color: ${palette.black[0]};
  font-size: 16px;
  resize: none;
  margin-top: 8px;
  margin-bottom: 15px;

  &::placeholder {
    position: absolute;
    top: 15px;
    left: 16px;
  }

  &:focus {
    box-shadow: 0 0 0 4px rgba(0, 132, 255, 0.5);
    outline: 0;
  }
`;
