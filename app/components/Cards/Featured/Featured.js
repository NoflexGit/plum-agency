import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import {
  Card,
  CardInfo,
  CardLocation,
  CardTitle
} from 'components/Cards/styles';
import CostLabel from 'components/CostLabel';

const FeaturedCard = styled(Card)`
  height: 200px;
`;

const FeaturedCardInfo = styled(CardInfo)`
  display: flex;
  align-items: center;
`;

const FeaturedCardDate = styled.div`
  width: 60px;

  h3 {
    margin: 0;
  }

  p {
    margin: 0;
    font-size: 12px;

    &:nth-of-type(1) {
      margin-bottom: 7px;
    }
  }
`;

const FeaturedCardTicketCost = styled(CostLabel)`
  position: absolute;
`;

const FeaturedCardComponent = (props) => (
  <FeaturedCard background={props.item.picture}>
    <FeaturedCardTicketCost value={props.item.startPrice} />
    <FeaturedCardInfo>
      <FeaturedCardDate>
        <h3>{props.item.date.day}</h3>
        <p>{props.item.date.month}</p>
        <p>{props.item.date.time}</p>
      </FeaturedCardDate>
      <div>
        <CardTitle>{props.item.title}</CardTitle>
        <CardLocation>{props.item.place}</CardLocation>
      </div>
    </FeaturedCardInfo>
  </FeaturedCard>
);

export default FeaturedCardComponent;

FeaturedCardComponent.propTypes = {
  item: propTypes.any
};
