import React from 'react';
import { Col, Card, CardTitle, CardBody, CardText } from 'reactstrap';
import './tools.scss';

const ToolsInfo = props => {
  return (
    <Col sm='12' md='6'>
      <Card className='cardtext'>
        <CardTitle>
          <h2 className='text-center'>Tool Info</h2>
        </CardTitle>
        <CardBody>
          <CardText>Important to note:</CardText>
          <ul>
            <li>
              Generally most of these items there is only one of said item.
            </li>
            <li>if any questions about an item please email.</li>
            <li>Listing will be updated asap after sales occur.</li>
            <li>Sales are local only.</li>
            <li>No Shipping Tools.</li>
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ToolsInfo;
