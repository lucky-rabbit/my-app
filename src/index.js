import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Reg from './Reg';
import Login from './Login';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter, Route } from 'react-router-dom';

//完成前端路由跳转

const getConfirmation = (message, callback) => {
    const allowTransition = window.confirm(message)
    callback(allowTransition)
}

const supportsHistory = 'pushState' in window.history;

ReactDOM.render(
    <HashRouter
            basename='/'
            forceRefresh={supportsHistory}
            getUserConfirmation={getConfirmation}
            keyLength={6} >
            <div>
              <Route path='/' component={Reg}></Route>
              <Route  path='/login' component={Login}></Route>
            </div>
    </HashRouter>
     , document.getElementById('root'));
registerServiceWorker();


