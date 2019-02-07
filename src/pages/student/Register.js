import React, {Component} from 'react';
import styled from 'styled-components';

import blank from '../../assets/images/profile.png';
import background from '../../assets/images/background.png';

const Wrapper = styled.div`
  background: url(${background}) no-repeat center center fixed;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.3);
  width: 100%;
  height: calc(100vh - 650px);
  
  @media screen and (max-width: 768px) {
    height: calc(100vh - 350px);
  }
`;

const Title = styled.span`
  color: #FFF;
  font-weight: bold;
  font-size: 3em;
`;

const Description = styled.span`
  color:#FFF;
  font-size: 1.3em;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 650px;
  background: #FFF;
`;

const Form = styled.div`
 display: flex;
 
 @media screen and (max-width: 768px) {
  flex-direction: column;
 }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
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

const FileSelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FileImg = styled.img`
  width: 200px;
`;

const FileSelector = styled.input`
  width: 200px;
`;

const Button = styled.button`
  width: 650px;
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

class Register extends Component {
  state = {
    username: '',
    password: '',
    name: '',
    birth: '',
    studentId: '',
    profileImage: '',
    isFocusBirth: false
  };

  pngToB64(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => this.setState({profileImage: reader.result});
    reader.onerror = err => {
      console.log('Error');
      alert("파일 로딩중에 오류가 발생했습니다.");
    };
    reader.readAsDataURL(file);
  }

  render() {
    return (
      <Wrapper>
        <Header>
          <Title>WhatNi</Title>
          <Description>고품격 출석체크 서비스</Description>
        </Header>
        <Body>
          <Form>
            <FileSelectorWrapper>
              <FileImg src={!this.state.profileImage ? blank : this.state.profileImage} alt={'프로필이미지'}/>
              <FileSelector type={'file'} accept="image/x-png" onChange={this.pngToB64.bind(this)}/>
            </FileSelectorWrapper>
            <InputWrapper>
              <Input placeholder={'Username'} onChange={({target}) => this.setState({username: target.value})}/>
              <Input placeholder={'Password'} type={'password'} onChange={({target}) => this.setState({password: target.value})}/>
              <Input placeholder={'이름'} onChange={({target}) => this.setState({name: target.value})}/>
              <Input placeholder={'생년월일'} type={this.state.isFocusBirth ? 'date' : 'text'}
                     onChange={({target}) => this.setState({birth: target.value})}
                     value={this.state.isFocusBirth ? '2000-01-01' : ''}
                     onFocus={() => this.setState({isFocusBirth: true})}
                     onBlur={() => this.setState({isFocusBirth: false})}/>
              <Input placeholder={'학번'} type={'number'} onChange={({target}) => this.setState({studentId: target.value})}/>
            </InputWrapper>
          </Form>
          <Button>회원가입</Button>
        </Body>
      </Wrapper>
    )
  }
}

export default Register;