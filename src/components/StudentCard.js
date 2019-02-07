import React, {Component} from 'react';
import Barcode from 'react-barcode';
import {observer, inject} from 'mobx-react';
import styled from 'styled-components';
import moment from 'moment';

import profile from '../assets/images/profile.jpg';
import stamp from '../assets/images/stamp.png';

const Wrapper = styled.div`
  width: 500px;
  min-height: 100vh;
  
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Headaer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75px;
  background: #65C6F7;
  overflow: hidden;
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 3em;
  color: #FFF;
  letter-spacing: 1.5em;
  margin-right: -1.5em;
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 75px);
  background: #FFF;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Profile = styled.img`
  width: 150px;
`;

const Name = styled.span`
  margin-top: 20px;
  font-weight: bold;
  font-size: 1.5em;
  letter-spacing: 1em;
  margin-right: -1em;
`;

const Birth = styled.span`
  margin-top: 50px;
  font-weight: bold;
  font-size: 1.3em;
`;

const BarcodeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin-top: 20px;
  border: 2px solid #000;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StampWrapper = styled.div`
  display: flex;
  align-items: center;
`;

@inject('student')
@observer
class StudentCard extends Component {

  componentDidMount() {
    const {student} = this.props;
    student.getUserData().then().catch(_ => window.location.href = '/login');
  }

  render() {
    const {user} = this.props.student;

    return (
      <Wrapper className={'student-card'}>
        <Headaer>
          <Title>학생증</Title>
        </Headaer>
        <Body>
          <Card>
            <Profile src={profile}/>
            <Name>{user.name}</Name>
            <Birth>생년월일: {moment(user.birth).format('YYYY.MM.DD')}</Birth>
            <BarcodeWrapper>
              <Barcode value={moment(user.birth).format('YYYY-MM-DD') + '-' + user.studentId}/>
            </BarcodeWrapper>
            <Footer>
              <small>위 학생은 본교 학생임을 증명함</small>
              <StampWrapper>
                <small style={{fontWeight: 'bold', marginRight: '20px'}}>OO고등학교장</small>
                <img width={'50px'} height={'50px'} src={stamp} alt={'stamp'}/>
              </StampWrapper>
            </Footer>
          </Card>
        </Body>
      </Wrapper>
    );
  }
}

export default StudentCard;