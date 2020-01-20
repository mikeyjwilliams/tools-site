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
import ToTop from 'react-scroll-top';
import { NavLink } from 'react-router-dom';

function FilterItems(props) {
  const { tools } = props;
  const toolsFiltered = tools.filter(
    tool => tool.tool_type === props.match.params.tool_type
  );
  return (
    <>
      <Row>
        {toolsFiltered.map(tool => (
          <Col sm='6' md='4' key={tool.id}>
            <ToolCard>
              <CardBody>
                <CardTitle>{tool.item_name}</CardTitle>
                <CodeText>Code: {tool.item_code}</CodeText>
                <ToolImg src={tool.tool_img[0]} alt={tool.item_name} />
                <br />
                <ToolButton
                  tag={NavLink}
                  to={`${tool.tool_type}/${tool.id}`}
                  outline
                  color='danger'
                >
                  {tool.id}
                </ToolButton>
                <ToolPrice>Price: ${tool.sale_price}</ToolPrice>
                <ToolSaleSold>{tool.sold ? 'Sold' : 'For Sale'}</ToolSaleSold>
              </CardBody>
            </ToolCard>
          </Col>
        ))}
      </Row>
      <ToTop hideAt={160} position={'bottom'} />
    </>
  );
}
export default FilterItems;

const ToolCard = styled(Card)`
  margin-bottom: 25px;
  margin-top: 10px;
  background-color: rgba(247, 246, 246, 0.8);
  border: 1px red solid;
  border-radius: 15px;
  font-size: x-large;
  height: 23.875em;
`;

const CodeText = styled(CardText)`
  font-size: x-large;
`;

const ToolImg = styled(CardImg)`
  max-width: 20.375em;
  min-width: 8.5em;
  max-height: 10em; /* 9em */
  min-height: 8.5em;
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
