import React from 'react';
import { Col, Card, CardTitle, CardImg, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// ToolDisplay is a Template for displaying the Tools
// components on the front page of the web site.
// they take in:

/**
 * Function ToolsDisplay
 * @param {buttonName} props
 * @param {tool} props
 * @param {toolSrc} props
 * @param {altText} props
 */
function ToolsDisplay(props) {
  const { buttonName, tool, toolSrc, linkText, altText } = props;
  return (
    <Col sm='12' md='4'>
      <ToolCard>
        <ToolButtonDiv>
          <Link to={linkText}>
            <ToolButton outline color='danger'>
              {buttonName}
            </ToolButton>
          </Link>
        </ToolButtonDiv>
        <CardTitle>Tool Type: {tool}</CardTitle>
        <CardImg src={toolSrc} alt={altText} />
      </ToolCard>
    </Col>
  );
}
export default ToolsDisplay;
// Styles Card or wrapper of item.
const ToolCard = styled(Card)`
  border-radius: 5px;
  background-color: rgba(247, 246, 246, 0.8);
  margin-top: 20px;
  padding: 10px;
`;
// pads the bottom of the button item from the text in CardTitle
const ToolButtonDiv = styled.div`
  padding-bottom: 10px;
`;
// gives some space from top of card for button
const ToolButton = styled(Button)`
  margin-top: 5px;
`;
