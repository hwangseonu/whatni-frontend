import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import {Provider} from 'mobx-react';

import StudentStore from './stores/student';

axios.defaults.baseURL = 'https://whatni-api.herokuapp.com/api';
const student = new StudentStore();

ReactDOM.render(<Provider student={student}><App/></Provider>, document.getElementById('root'));
serviceWorker.unregister();
