import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  text-align: center;
`;

const NewCode = styled.button`
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

const Subject = ({sub, date, code}) => (
  <tr>
    <td>{sub}</td>
    <td>{moment(date).format('YYYY-MM-DD')}</td>
    <td>{code}</td>
    <td>
      <button>QrCode</button>
      <button>삭제</button>
    </td>
  </tr>
);

class Code extends Component {
  render() {
    return (
      <Wrapper>
        <Table>
          <thead>
            <tr>
              <th>과목</th>
              <th>시간</th>
              <th>코드</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            <Subject sub={'국어'} date={new Date(2002, 3, 15)} code={1234}/>
            <Subject sub={'국어'} date={new Date(2002, 3, 15)} code={1234}/>
            <Subject sub={'국어'} date={new Date(2002, 3, 15)} code={1234}/>
            <Subject sub={'국어'} date={new Date(2002, 3, 15)} code={1234}/>
            <Subject sub={'국어'} date={new Date(2002, 3, 15)} code={1234}/>
          </tbody>
        </Table>
        <Link to={'/admin/newcode'}><NewCode>새로운 코드</NewCode></Link>
      </Wrapper>
    );
  }
}

export default Code;