import styled from 'styled-components';
import { COLOR_BLACK } from 'styles/styles-variables';
import HeaderComponent from 'components/Header';

export const AppWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  background: ${COLOR_BLACK};
  display: flex;
  flex-direction: column;
`;

export const Header = styled(HeaderComponent)`
  margin: 25px auto 0 auto;
  width: 1100px;
  display: flex;
  align-items: center;
  
  nav {
    margin-right: 0;
    margin-left: auto;
  }
`;

export const HeaderWrapper = styled.div`
  position: absolute;
  z-index: 99;
  width: 100%;
`;
