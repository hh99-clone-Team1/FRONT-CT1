import styled from 'styled-components';
import { useState } from 'react';
import palette from '../../styles/palette';
import { SearchCloseIcon, SearchIcon } from '../../img/HeaderIcons';
import IconBox from '../../components/IconBox';

function SearchInput() {
  const [isFocus, setIsFocus] = useState(false);

  const handleFocusInput = () => setIsFocus(true);
  const handleBlurInput = () => setIsFocus(false);

  return (
    <SearchInputLayout>
      <InputBox isFocus={isFocus}>
        <SearchIcon color={palette.gray[3]} className="searchInput__search-icon" />
        <Input placeholder="검색" onFocus={handleFocusInput} onBlur={handleBlurInput} />
        <IconBoxStyles isFocus={isFocus}>
          <SearchCloseIcon />
        </IconBoxStyles>
      </InputBox>
    </SearchInputLayout>
  );
}

export default SearchInput;

const SearchInputLayout = styled.div`
  flex: 1 1 auto;
  box-sizing: border-box;
  min-width: 407px;
  padding: 0 8px;
`;

const InputBox = styled.div`
  height: 48px;
  background: ${palette.gray[4]};
  border-radius: 24px;
  display: flex;
  align-items: center;
  padding-left: 16px;
  gap: 8px;

  ${({ isFocus }) => isFocus && 'box-shadow: 0 0 0 4px rgba(0, 132, 255, 0.5)'};

  &:hover {
    background: ${palette.gray[1]};
  }

  .searchInput__search-icon {
    ${({ isFocus }) => isFocus && 'display: none'};
  }
`;

const IconBoxStyles = styled(IconBox)`
  background: transparent;
  ${({ isFocus }) => !isFocus && 'display: none'};

  &:hover {
    background: ${palette.gray[6]};
  }
`;

const Input = styled.input`
  height: 100%;
  width: 100%;
  font-weight: 400;
  font-size: 16px;
  color: #333;
  background: none;
  border: none;
  outline: none;

  &::placeholder {
    font-weight: 500;
  }
`;
