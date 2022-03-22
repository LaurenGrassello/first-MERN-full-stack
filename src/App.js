import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>

      <Route exact path='/'>
        <Main />
      </Route>
      
        <Route exact path='/product/:id'>
          <Detail />
        </Route>

        <Route exact path='/product/:id/edit'>
        <Update />
      </Route>


      </Switch>
    </BrowserRouter >
  );
}

export default App;
