import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './routes/Home';
import About from './routes/About';

function App() {
  return (
    <Router>
     <Navbar></Navbar>
     <Switch>
      <Route path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
     </Switch>
    </Router>
  );
}

export default App;
