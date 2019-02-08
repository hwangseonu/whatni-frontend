import React, {Component} from 'react';
import styled from 'styled-components';

import Header from '../../components/AdminHeader';

import background from '../../assets/images/admin-background.png';

const Wrapper = styled.div`
  background: url(${background}) no-repeat center center fixed;
  background-size: cover;
`;

class Main extends Component {
  render() {
    return (
      <Wrapper>
        <Header/>
      </Wrapper>
    );
  }
}

export default Main;