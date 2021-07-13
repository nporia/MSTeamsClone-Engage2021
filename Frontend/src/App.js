import React from 'react';
import Home from './components/frontend/Home.jsx';
import {Route, Link} from 'react-router-dom';

function App() {
  return (
  <div class = "App">
    <Route exact path = "/" component = {Home}/>
  </div>
  );
}

export default App;

