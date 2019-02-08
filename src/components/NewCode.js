import React, {Component} from 'react';
// import cookie from 'react-cookies';
import DatetimePicker from 'react-datetime-picker';
import styled from 'styled-components';
// import moment from 'moment';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  & .react-datetime-picker, & .react-datetime-picker__wrapper {
    width: 100%;
    height: 50px;
  }
`;

const Table = styled.table`
  width: 100%;
  text-align: center;
`;

const Tr = styled.tr`
  margin-top: 20px;
`;

const Th = styled.th`
  width: 150px;
  font-weight: bold;
  font-size: 1.3em;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  font-weight: bold;
  font-size: 1.3em;
  border: none;
  border-bottom: 1px solid #000;
`;

const Button = styled.button`
  width: 10vmax;
  height: 3vmax;
  border: none;
  border-radius: 20px;
  background: #65C6F7;
  font-size: 1vmax;
  font-weight: bold;
  color: #FFF;
  margin-top: 40px;
`;


class NewCode extends Component {
  state = {
    isFocusStart: false,
    isFocusEnd: false,
    subject: '',
    start: '',
    end: ''
  };

  handleChangeTime(type) {
    return (datetime) => {
      switch (type) {
        case 'start':
          this.setState({start: datetime});
          break;
        case 'end':
          this.setState({end: datetime});
          break;
        default:
          break;
      }
    }
  }

  render() {
    return (
      <Wrapper>
        <Table>
          <tbody>
            <Tr>
              <Th>과목</Th>
              <td><Input onChange={({target}) => this.setState({subject: target.value})} placeholder={'과목'}/></td>
            </Tr>
            <Tr>
              <Th>시작</Th>
              <td>{this.state.isFocusStart ?
                <DatetimePicker value={this.state.start} onChange={this.handleChangeTime('start').bind(this)}/> :
                <Input placeholder={'시작 시간'} onFocus={() => this.setState({isFocusStart: true})}/>}
              </td>
            </Tr>
            <Tr>
              <Th>종료</Th>
              <td>{this.state.isFocusEnd ?
                <DatetimePicker value={this.state.end} onChange={this.handleChangeTime('end').bind(this)}/> :
                <Input placeholder={'종료 시간'} onFocus={() => this.setState({isFocusEnd: true})}/>}
              </td>
            </Tr>
          </tbody>
        </Table>
        <Button>생성</Button>
      </Wrapper>
    );
  }
}

export default NewCode;