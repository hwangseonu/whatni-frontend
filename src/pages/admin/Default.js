import React, {Component} from 'react';
import styled from 'styled-components';

import Header from '../../components/AdminHeader';

import background from '../../assets/images/admin-background.png';

const Wrapper = styled.div`
  background: url(${background}) no-repeat center center fixed;
  background-size: cover;
  display: flex;
`;

const Body = styled.div`
  width: calc(100vw - 500px);
  padding: 5vw;
`;

const ChildWrapper = styled.div`
  background: #FFF;
  width: calc(100% - 10vw);
  height: calc(100% - 10vw);
  border-radius: 20px;
  padding: 5vw;
`;

class Default extends Component {
  render() {
    return (
      <Wrapper>
        <Header/>
        <Body>
          <ChildWrapper>
            {this.props.children}
          </ChildWrapper>
        </Body>
      </Wrapper>
    );
  }
}

export default Default;