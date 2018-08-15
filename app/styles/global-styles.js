import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';
import { COLOR_WHITE } from './styles-variables';

export default injectGlobal`
  ${styledNormalize};
  
  body {
    font-family: 'Montserrat', sans-serif;
  }
  
  a {
    text-decoration: none;
  }
  
  h1,
  h2,
  h3 {
    color: ${COLOR_WHITE};
  }
`;
