import React from 'react';
import styled from 'styled-components';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Row,
  Col,
} from 'reactstrap';

function Items(props) {
  const { tools } = props;
  return (
    <Row>
      {tools.map(tool => (
        <Col sm='6' md='4'>
          <ToolCard key={tool.id}>
            <CardBody>
              <CardTitle>{tool.item_name}</CardTitle>
              <CodeText>Code: {tool.item_code}</CodeText>
              <ToolImg src={tool.tool_img} alt={tool.item_name} />
              <br />
              <ToolButton outline color='danger'>
                {tool.id}
              </ToolButton>
              <ToolPrice>Price: ${tool.sale_price}</ToolPrice>
              <ToolSaleSold>{tool.sold ? 'Sold' : 'For Sale'}</ToolSaleSold>
            </CardBody>
          </ToolCard>
        </Col>
      ))}
    </Row>
  );
}
export default Items;

const ToolCard = styled(Card)`
  background-color: rgba(247, 246, 246, 0.8);
  border: 1px red solid;
  border-radius: 15px;
  font-size: x-large;
`;

const CodeText = styled(CardText)`
  font-size: x-large;
`;

const ToolImg = styled(CardImg)`
  max-width: 20.375em;
  min-width: 9.375em;
`;

const ToolButton = styled(Button)`
  font-size: larger;
  margin-top: 15px;
`;

const ToolPrice = styled(CardText)`
  font-size: larger;
  margin-top: 10px;
`;

const ToolSaleSold = styled(CardText)`
  font-size: larger;
  text-decoration: underline;
`;
