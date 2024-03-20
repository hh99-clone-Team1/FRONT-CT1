import styled from 'styled-components';
import palette from '../../styles/palette';
import { SearchIcon } from '../../img/HeaderIcons';

function SearchInput() {
  return (
    <SearchInputLayout>
      <div>
        <SearchIcon color={palette.gray[3]} />
        <input placeholder="검색" />
      </div>
    </SearchInputLayout>
  );
}

export default SearchInput;

const SearchInputLayout = styled.div`
  flex: 1 1 auto;
  box-sizing: border-box;
  min-width: 407px;
  padding: 0 8px;

  div {
    height: 48px;
    background: ${palette.gray[4]};
    border-radius: 24px;
    display: flex;
    align-items: center;
    padding-left: 16px;
    gap: 8px;
  }

  &:hover {
    svg {
      fill: red;
    }
  }

  input {
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

    input &:focus {
      background: red;
    }
  }
`;
