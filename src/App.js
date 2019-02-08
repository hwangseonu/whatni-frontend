import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

import SLogin from './pages/student/Login';
import SRegister from './pages/student/Register';
import SMain from './pages/student/Main';
import Splash from './components/Splash';

import ADefault from './pages/admin/Main';
import AAttendance from './components/Attendance';
import ACode from './components/Code';
import ANewCode from './components/NewCode';

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
            <Route render={() =>
              <ADefault>
                <Switch>
                  <Route path={'/admin/attendance'} component={AAttendance} exact/>
                  <Route path={'/admin/code'} component={ACode} exact/>
                  <Route path={'/admin/newcode'} component={ANewCode} exact/>
                </Switch>
              </ADefault>
            }/>
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
