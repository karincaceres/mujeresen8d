import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
         <Route path="/home" component={Home} />
        <Route path="/page2" component={Page2} />
        <Route path="/page3" component={Page3} />
      </Switch>
    </Router>
  );
}

export default App;
