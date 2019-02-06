import React, {Component} from 'react';
import styled from 'styled-components';

import logo from '../assets/images/logo.png';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #65C7F7;
  animation: splash 3s;
  
  @keyframes splash {
    0% {
      opacity: 1;
    }
    
    80% {
      opacity: 1;
    }
    
    100% {
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 25vmax;
`;

const Title = styled.span`
  color: #FFF;
  font-weight: bold;
  font-size: 2.7em;
`;

const Copyright = styled.small`
  position: absolute;
  bottom: 50px;
  color: #FFF;
`;

class Splash extends Component {
  state = {
    show: true
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({show: false})
    }, 3000)
  }

  render() {
    return (
      this.state.show ?
        <Wrapper>
          <TitleWrapper>
            <Logo src={logo} alt={'logo'}/>
            <Title>WhatNi</Title>
          </TitleWrapper>
          <Copyright>&copy;2018-2019 WhatNi all rights reserved</Copyright>
        </Wrapper> : null
    )
  }
}

export default Splash;