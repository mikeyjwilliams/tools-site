import React from 'react';
import styled from 'styled-components';
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap';

function Details(props) {
  const product = props.tools.find(tool => {
    return tool.id === Number(props.match.params.id);
  });

  // console.log('p', product);

  return (
    <>
      <Container>
        <Row>
          <Col sm='12' md='6'>
            <TextCard>
              <CardTitle>Code: {product.item_code}</CardTitle>
              <CardText>Name: {product.item_name}</CardText>
              <CardText>Brand: {product.brand}</CardText>
              <CardText>Quantity: {product.quantity}</CardText>
              <CardText>Category: {product.category}</CardText>
              <CardText>Pieces: {product.item_pieces}</CardText>
              <CardText>
                Retail Price: $
                {product.retail_price ? product.retail_price : 'n/a'}
              </CardText>
              <CardText>Price: ${product.sale_price}</CardText>
              <CardText>Sold: {product.sold ? 'Sold' : 'For Sale'}</CardText>
              <CardText>Code: {product.item_code}</CardText>
              <CardText>Description: {product.description}</CardText>
            </TextCard>
          </Col>
          {product.tool_img.map((tool_image, i) => {
            return (
              <Col sm='12' md='6' key={i}>
                <ImageCard>
                  <CardImg src={tool_image} alt={product.item_name} />
                </ImageCard>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
export default Details;

const TextCard = styled(Card)`
  background-color: rgba(247, 246, 246, 0.8);
  border: 1px solid red;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 25px;
`;

const ImageCard = styled(Card)`
  background-color: rgba(247, 246, 246, 0.8);
  border: 1px solid red;
  border-radius: 10px;
  padding: 15px;
`;
