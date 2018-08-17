import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { COLOR_WHITE } from 'styles/styles-variables';

const CategoryCard = styled.article`
  position: relative; 
  height: 200px;
  background: ${COLOR_WHITE} url(${(props) => props.background}) center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: '';
    background-color: rgba(0,0,0,.4);
    transition: background-color .2s ease-out;
  }
`;

const CategoryCardInfo = styled.div`
  position: relative;
  z-index: 1;
  color: ${COLOR_WHITE};
  text-align: center;
  
  span {
    opacity: .7;
  }
  
  p {
    margin: 10px 0 0 0;
    font-size: 18px;
    font-weight: 500;
  }
`;

const CategoryCardComponent = (props) => (
  <CategoryCard background={props.item.picture}>
    <CategoryCardInfo>
      <span>{props.item.itemsCount} events</span>
      <p>{props.item.title}</p>
    </CategoryCardInfo>
  </CategoryCard>
);

export default CategoryCardComponent;

CategoryCardComponent.propTypes = {
  item: propTypes.any
};
