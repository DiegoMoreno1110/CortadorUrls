import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Principal from './Components/Principal';
import Url from './Components/Url';

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/">
            <Principal/>
          </Route>
          <Route exact path="/:idGenerado">
            <Url/>
          </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
