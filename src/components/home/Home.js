import React from 'react';
import Info from './Info';
import ToolsInfo from './ToolsInfo';
import ToolsDisplay from './ToolDisplay';
import { Row } from 'reactstrap';

import AirImg from '../../imgs/air.jpg';
import SocketImg from '../../imgs/socket.jpg';
import WrenchImg from '../../imgs/wrench.jpg';

function Home(props) {
  return (
    <div>
      <Row>
        <Info />
        <ToolsInfo />
      </Row>
      <Row>
        <ToolsDisplay
          linkText='/sockets'
          buttonName='Sockets'
          tool='Sockets'
          toolSrc={SocketImg}
          altText='Socket set'
        />
        <ToolsDisplay
          linkText='/wrenches'
          buttonName='Wrenches'
          tool='Mostly wrench sets &amp; some singles'
          toolSrc={WrenchImg}
          altText='Wrench set display'
        />
        <ToolsDisplay
          linkText='/air-tools'
          buttonName='Air Tools'
          tool='Air drills, etc.'
          toolSrc={AirImg}
          altText='Air Drill on display'
        />
      </Row>
    </div>
  );
}
export default Home;
