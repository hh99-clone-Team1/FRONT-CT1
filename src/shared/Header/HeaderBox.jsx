import { useEffect, useState } from 'react';
import styled from 'styled-components';

function HeaderBox({ children }) {
  const [isShadow, setIsShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 1) {
        setIsShadow(true);
      } else {
        setIsShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <HeaderBoxLayout className={isShadow && 'scrolled'}>{children}</HeaderBoxLayout>;
}

export default HeaderBox;

const HeaderBoxLayout = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  background: #fff;
  position: fixed;
  top: 0;
  display: flex;

  &.scrolled {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 8px -8px;
    transition: box-shadow 300ms ease-in-out;
  }
`;
