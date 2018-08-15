import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import CostLabel from 'components/CostLabel';
import {
  Card,
  CardInfo,
  CardLocation,
  CardTitle
} from 'components/Cards/styles';

const SimpleCard = styled(Card)`
  height: 260px;
`;

const SimpleCardDate = styled.div`
  font-size: 13px;
  margin-top: 3px;
`;

const SimpleCardTicketCost = styled(CostLabel)`
  position: absolute;
`;

const SimpleCardComponent = (props) => (
  <SimpleCard background={props.item.picture}>
    <SimpleCardTicketCost value={props.item.startPrice} />
    <CardInfo>
      <CardTitle>{props.item.title}</CardTitle>
      <CardLocation>{props.item.place}</CardLocation>
      <SimpleCardDate>{props.item.date}</SimpleCardDate>
    </CardInfo>
  </SimpleCard>
);

export default SimpleCardComponent;

SimpleCardComponent.propTypes = {
  item: propTypes.any
};
