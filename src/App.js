import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

import Login from './pages/student/Login';
import Register from './pages/student/Register';
import Main from './pages/student/Main';
import Splash from './components/Splash';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Fragment>
            <Route path={'/'} component={Splash}/>
            <Fragment>
              <Route path={'/'} component={Main} exact/>
              <Route path={'/login'} component={Login} exact/>
              <Route path={'/register'} component={Register} exact/>
            </Fragment>
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
