import React from 'react';
import { Col, Card, CardTitle, CardBody, CardText } from 'reactstrap';
import './tools.scss';

const Info = props => {
  return (
    <Col sm='12' md='6'>
      <Card className='cardtext'>
        <CardTitle>
          <h2 className='text-center'>Info</h2>
        </CardTitle>
        <CardBody>
          <CardText>
            Hi I am Gary and have been working in body shops over 40 years. I
            have been in local Bradenton shops for about 25 years. I am selling
            off my tools. If you are interested I can provide work place
            references. These tools are my own tools, not selling other peoples
            tools for them so do not ask. Also, These are mostly American made
            tools, All still usable, many are lightly used, some even new.
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};
export default Info;
