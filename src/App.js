import React, { useState } from 'react';
import Home from './components/home/Home';
// import ToolsDisplay from './components/home/ToolDisplay';
import Navigation from './components/Navigation/Navigation';
// import Items from './components/ItemOverview/Items';
import Details from './components/DetailViews/Details';
import { Route } from 'react-router-dom';
import './App.css';

import toolsData from './data';
import FilterItems from './components/ItemOverview/FilterItems';
import InquiryForm from './components/inquiryForm/InquiryForm';

function App() {
  const [tools, setTools] = useState(toolsData);
  // console.log(tools);
  return (
    <div className='App'>
      <Navigation tools={tools} />

      <Route path='/' exact component={Home} />

      <Route
        exact
        path='/:tool_type'
        render={props => <FilterItems {...props} tools={tools} />}
      />
      <Route
        exact
        path='/tools-inquiry'
        render={props => <InquiryForm {...props} />}
      />
      <Route
        exact
        path='/:tool_type/:id'
        render={props => <Details {...props} tools={tools} />}
      />
    </div>
  );
}

export default App;
