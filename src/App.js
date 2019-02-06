import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

import Login from './pages/Login';
import Splash from './components/Splash';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Fragment>
            <Route path={'/'} component={Splash}/>
            <Fragment>
              <Route path={'/login'} component={Login} exact/>
            </Fragment>
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
