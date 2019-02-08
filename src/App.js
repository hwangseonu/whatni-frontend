import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

import SLogin from './pages/student/Login';
import SRegister from './pages/student/Register';
import SMain from './pages/student/Main';
import Splash from './components/Splash';

import AMain from './pages/admin/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Fragment>
            <Route path={'/'} component={Splash}/>
            <Fragment>
              <Route path={'/'} component={SMain} exact/>
              <Route path={'/login'} component={SLogin} exact/>
              <Route path={'/register'} component={SRegister} exact/>
            </Fragment>
            <Fragment>
              <Route path={'/admin'} component={AMain}/>
            </Fragment>
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
