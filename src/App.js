import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import LandingPage from './views/LandingPage';
import Presentation from './views/Presentation';
import Projets from './views/Projets';
import Info from './views/Info';
import Archives from './views/Archives';
import Catalogue from './views/Catalogue';


import './App.css';


function App() {
  return (
    <div className='App'>
      <Router>
        <div>
          <Switch>
            <Route exact path='/'>
              <LandingPage />
            </Route>
            <Route exact path='/association'>
              <Presentation />
            </Route>
            <Route exact path='/projets'>
              <Projets />
            </Route>
            <Route exact path='/info'>
              <Info />
            </Route>
            <Route exact path='/archives'>
              <Archives />
            </Route>
            <Route exact path='/catalogue'>
              <Catalogue />
            </Route>
          </Switch>
        </div>
      </Router>
      </div>
      ); }
  ;


export default App;
