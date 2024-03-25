import styled from 'styled-components';
import IconBox from '../../../components/IconBox';
import Imageboard from '../../../shared/Imageboard/Imageboard';
import { SortIcon, PlusIcon } from '../../../img/HeaderIcons';

function SavedImgs() {
  return (
    <>
      <SavedIcons>
        <IconBox>
          <SortIcon />
        </IconBox>
        <IconBox>
          <PlusIcon />
        </IconBox>
      </SavedIcons>
      <Imageboard />
    </>
  );
}

const SavedIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  text-align: center;
`;

export default SavedImgs;
