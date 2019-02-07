import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import styled from 'styled-components';

import background from '../../assets/images/background.png';
import Loading from "../../components/Loading";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${background}) no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
  } 
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px 0 0 20px;
  width: 450px;
  height: 450px;
  background: #65C6F7;
  
  @media screen and (max-width: 768px) {
    width: 100%;;
    height: calc(100vh - 300px);
    border-radius: 0 0 0 0;
    background: rgba(101, 198, 247, 0.7);
  } 
`;

const Title = styled.span`
  color: #fff;
  font-size: 3em;
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
  width: 650px;
  height: 450px;
  background: #FFF;
  border-radius: 0 20px 20px 0;
  
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 300px;
    border-radius: 0 0 0 0;
    background: rgba();
  } 
`;

const Input = styled.input`
  width: 350px;
  height: 50px;
  border: 1px solid #000;
  border-radius: 25px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 1.3em;
  text-align: center;
  
  @media screen and (max-width: 768px) {
    width: 70vw;
  }
`;

const Button = styled.button`
  width: 350px;
  height: 50px;
  border: none;
  border-radius: 25px;
  background: #5978E3;
  font-size: 1.3em;
  color: #FFF;
   
  @media screen and (max-width: 768px) {
    width: 70vw;
  }
`;

const RegisterMessage = styled.a`
  color: #2868B2;
  text-decoration: none;
  font-size: smaller;
`;

@inject('student')
@observer
class Login extends Component {
  state = {
    loading: false,
    username: '',
    password: ''
  };

  handleSubmit() {
    const {student} = this.props;
    const {username, password} = this.state;

    if (username && password) {
      this.setState({loading: true});
      student.login(username, password).then(res => {
        this.setState({loading: false});
        alert("로그인되었습니다.");
        window.location.href = '/';
      }).catch(err => {
        this.setState({loading: false});
        alert("로그인에 실패했습니다.");
      })
    } else {
      alert("빈칸이 있습니다.");
    }
  }

  render() {
    return (
      <Wrapper>
        {this.state.loading ? <Loading/> : null}
        <TitleWrapper>
          <Title>WhatNi</Title>
          <Description>고품격 출석체크 서비스</Description>
        </TitleWrapper>
        <InputWrapper onKeyPress={(event) => {
          if (event.key === 'Enter') this.handleSubmit()
        }}>
          <Input placeholder={'Username'} onChange={(event) => this.setState({username: event.target.value})}/>
          <Input type={'password'} placeholder={'Password'}
                 onChange={(event) => this.setState({password: event.target.value})}/>
          <Button onClick={this.handleSubmit.bind(this)}>로그인</Button>
          <div>
            <small>아직 회원이 아니신가요?</small>
            <RegisterMessage href={'/register'}>회원가입</RegisterMessage>
          </div>
        </InputWrapper>
      </Wrapper>
    );
  }
}

export default Login;
