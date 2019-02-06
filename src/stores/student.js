import {observable, action} from 'mobx';
import cookie from 'react-cookies';
import axios from 'axios';

class StudentStore {
  @observable
  isLogin = false;

  @observable
  user = {
    username: ''
  };

  @action login = (username, password) => {
    return new Promise((resolve, reject) => {
      axios.post(`/student/auth`, {username, password}).then(res => {
        cookie.save('JWT', res.data.access, {path: '/'});
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    })
  };

  @action register = (username, password, name, studentId, birth, profileImage) => {
    return new Promise((resolve, reject) => {
      axios.post('/student', {
        username,
        password,
        name,
        studentId,
        birth,
        profileImage
      }).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    })
  };

  @action logout = () => {
    return new Promise((resolve) => {
      cookie.remove('JWT', {path: '/'});
      this.isLogin = false;
      this.user = {};
      resolve();
    })
  };

  @action getUserData = () => {
    return new Promise((resolve, reject) => {
      const jwt = cookie.load('JWT');

      if (jwt) {
        axios.get('/student', {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        }).then(res => {
          this.isLogin = true;
          this.user = res.data;
          resolve(res);
        }).catch(err => {
          this.isLogin = false;
          cookie.remove('JWT', {path: '/'});
          reject(err)
        })
      } else {
        this.isLogin = false;
        reject("Token is not exists");
      }
    })
  };

}

export default StudentStore;