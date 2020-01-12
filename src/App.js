import React from 'react';
import {Route, Link} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import EventCal from './components/EventCal';

import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home}/>
      <Route path='/events' component={EventCal} />
    </div>
  );
}

export default App;
