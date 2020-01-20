import React from 'react';
import styled from 'styled-components';
import Items from './Items';
import { Container, Row, Col } from 'reactstrap';

function ItemDisplay(props) {
  const { tools } = props;
  return <Items tools={tools} />;
}
export default ItemDisplay;
