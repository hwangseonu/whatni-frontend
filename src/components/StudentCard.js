import React, {Component} from 'react';
import styled from 'styled-components';

import profile from '../assets/images/profile.jpg';
import barcode from '../assets/images/barcode.gif';
import stamp from '../assets/images/stamp.png';

const Headaer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75px;
  background: #65C6F7;
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 3em;
  color: #FFF;
  letter-spacing: 1.5em;
  margin-right: -1.5em;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  position: fixed;
  top: 75px;
  height: 100%;
  z-index: 0;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin-top: 20px;
  width: 100%;
  padding: 10px;
  border: 2px solid #000;
`;

const Barcode = styled.img`
  width: 80%;
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

class StudentCard extends Component {
  render() {
    return (
      <div className={'student-card'} style={{width: '500px', height: '100vh'}}>
        <Headaer>
          <Title>학생증</Title>
        </Headaer>
        <Wrapper>
          <Card>
            <Profile src={profile}/>
            <Name>황선우</Name>
            <Birth>생년월일: 2002.04.15</Birth>
            <BarcodeWrapper>
              <Barcode src={barcode}/>
            </BarcodeWrapper>
            <Footer>
              <small>위 학생은 본교 학생임을 증명함</small>
              <StampWrapper>
                <small style={{fontWeight: 'bold', marginRight: '20px'}}>OO고등학교장</small>
                <img width={'50px'} height={'50px'} src={stamp} alt={'stamp'}/>
              </StampWrapper>
            </Footer>
          </Card>
        </Wrapper>
      </div>
    );
  }
}

export default StudentCard;