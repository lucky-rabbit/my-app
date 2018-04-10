import React, { Component } from 'react';
import './Reg.css';
import fetch from 'isomorphic-fetch';


class Reg extends Component {
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

    //let formData = new FormData(document.getElementById('login-demo'));
    // formData.append('username',username);
    // formData.append('password',password);


    fetch('http://localhost:3001/reg', {
      method: 'POST',
      mode: "cors",
      headers: {
        "Content-Type": "'Access-Control-Allow-Origin'",'Accept': 'application/json'
      },
      body: JSON.stringify ({ username:username, password:password })
}).then( res => res.json() ).then( res => {
    // 后端返回1为成功, 跳转至登录页面
    if(res.res == 1){
      this.props.history.push('Login');
      alert('恭喜您注册成功了');
    }
    
})
  }

  render() {
    return (
      <div onChange={(e)=>this.stateChange(e)}>
      <form id='login-demo'>
        <input type="text" name="username" value={this.state.username} placeholder="请输入用户名"/>
        <input type="password" name="password" value={this.state.password} placeholder="请输入密码"/>
        <button onClick={()=>this.saveUser()}>立即注册</button>
      </form>
      </div>
    );
  }
}

export default Reg;
