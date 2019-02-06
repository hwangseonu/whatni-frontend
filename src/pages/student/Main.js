import React, {Component} from 'react';

import StudentCard from '../../components/StudentCard';

class Main extends Component {
  render() {
    return (
      <div className={'main'}>
        <StudentCard/>
      </div>
    );
  }
}

export default Main;