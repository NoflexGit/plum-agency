import styled from 'styled-components';
import { COLOR_WHITE } from 'styles/styles-variables';

export const Card = styled.article`
  position: relative;
  height: 200px;
  background: ${COLOR_WHITE} url(${(props) => props.background}) center;
  background-size: cover;
  border-radius: 10px;
  box-shadow: 0 8px 25px 0 rgba(35,19,69,1);
  transition: all .25s cubic-bezier(0.42,0,0.58,1);
  padding: 20px;
  overflow: hidden;
  color: ${COLOR_WHITE};
  margin-bottom: 25px;
  
  &:hover {
    cursor: pointer;
    box-shadow: 0 8px 35px 0 rgba(35,19,69,.7);
    transform: translateY(-5px);
  }
`;

export const CardInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(44,23,79,1) 100%);
  width: 100%;
  padding: 20px;
`;

export const CardLocation = styled.span`
  font-size: 13px;
  opacity: .7;
`;


export const CardTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin: 0;
`;

