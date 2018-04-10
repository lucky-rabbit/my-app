import React, { Component } from 'react';
import './Reg.css';
import fetch from 'isomorphic-fetch';

class Login extends Component {
  constructor(props){
    super(props);
    // 初始化state  es6解构赋值
    this.state = {
      username: '',
      password:''
    }
  }

  // 更新state
  stateChange(e){
    //e.target拿到表单的值
    const target = e.target;
    this.setState({
      //分别为表单的username、password更新为当前值
      [target.name]: target.value
    })
  }

  //点击注册时的事件
  saveUser() {
    const {
        username,
        password
    } = this.state;
    if(!username) return alert('用户名不能为空');
    if(!password) return alert('密码不能为空');

    fetch('http://localhost:3001', {
    method: 'GET',
    mode: "cors",
    headers: {
    "Content-Type": "application/json"
    },
    body: { username,password }
}).then( res => res.json() ).then( res => {
   
    alert('请您登陆');
})
  }

  render() {
    return (
      <div onChange={(e)=>this.stateChange(e)}>
      <form>
        <input name="username" value={this.state.username} placeholder="请输入用户名"/>
        <input name="password" value={this.state.password} placeholder="请输入密码"/>
        <button onClick={()=>this.saveUser()}>登陆</button>
      </form>
      </div>
    );
  }
}

export default Login;
