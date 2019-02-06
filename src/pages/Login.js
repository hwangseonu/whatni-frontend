import React, {Component} from 'react';
import styled from 'styled-components';

import background from '../assets/images/background.png';

const Wrapper = styled.div`
  background: url(${background}) no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 350px);
  background: rgba(255, 255, 255, 0.3);
`;

const Title = styled.span`
  color: #fff;
  font-size: 10vmax;
  font-weight: bold;
`;

const Description = styled.span`
  color: #fff;
  font-size: 1.3em;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 350px;
  background: #FFF;
`;

const Input = styled.input`
  width: 30vmax;
  height: 50px;
  border: 1px solid #000;
  border-radius: 25px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 1.3em;
  text-align: center;
`;

const Button = styled.button`
  width: 30vmax;
  height: 50px;
  border: none;
  border-radius: 25px;
  background: #5978E3;
  font-size: 1.3em;
  color: #FFF;
`;

class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  render() {
    return (
      <Wrapper>
        <TitleWrapper>
          <Title>WhatNi</Title>
          <Description>고품격 출석체크 서비스</Description>
        </TitleWrapper>
        <InputWrapper>
          <Input placeholder={'Username'} onChange={(event) => this.setState({username: event.target.value})}/>
          <Input type={'password'} placeholder={'Password'} onChange={(event) => this.setState({password: event.target.value})}/>
          <Button>로그인</Button>
        </InputWrapper>
      </Wrapper>
    );
  }
}

export default Login;
