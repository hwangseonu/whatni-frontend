import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import logo from '../assets/images/logo.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  min-height: 100vh;
  background: #FFF;
  
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 160px;
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 4em;
  color: #65C6F7;
  margin-top: 20px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
`;

const Item = styled.div`
  font-size: 2em;
  font-weight: bold;
  margin-top: 20px;
`;

class Main extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <Logo src={logo} alt={'logo'}/>
          <Title>관리자 페이지</Title>
        </Header>
        <Body>
          <Item><Link to={'/admin/attendance'}>출석부 관리</Link></Item>
          <Item><Link to={'/admin/code'}>출석코드 관리</Link></Item>
        </Body>
      </Wrapper>
    );
  }
}

export default Main;