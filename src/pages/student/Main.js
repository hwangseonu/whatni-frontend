import React, {Component} from 'react';
import Clock from 'react-live-clock';
import styled from 'styled-components';
import queryString from 'query-string';

import StudentCard from '../../components/StudentCard';

import background from '../../assets/images/background.png';

const Wrapper = styled.div`
  background: url(${background}) no-repeat center center fixed;
  background-size: cover;
  display: flex;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100vw - 500px);
  height: 100vh;
  
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Date = styled.div`
  font-size: 1em;
  font-weight: bold;
  color: #FFF;
`;

const Time = styled.div`
  font-size: 4em;
  font-weight: bold;
  color: #FFF;
`;

const Form = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Input = styled.input`
  width: 30vw;
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
  width: 30vw;
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

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: queryString.parse(this.props.location.search).code
    };
  }

  render() {
    console.log(this.state.code);
    return (
      <Wrapper className={'main'}>
        <StudentCard/>
        <MainWrapper>
          <Date><Clock format={'YYYY.MM.DD'} ticking={true}/></Date>
          <Time><Clock format={'HH:mm:ss'} ticking={true}/></Time>
          <Form>
            <Input placeholder={'출석코드'} value={this.state.code} onChange={({target}) => this.setState({code: target.value})}/>
            <Button>출석</Button>
          </Form>
        </MainWrapper>
      </Wrapper>
    );
  }
}

export default Main;