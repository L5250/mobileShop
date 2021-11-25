/*
 * @Description:
 * @Author: 罗钧译
 * @Date: 2021-11-25 10:09:40
 * @LastEditors: 罗钧译
 * @LastEditTime: 2021-11-25 10:27:56
 */
// import React from 'react';
import { Button } from 'antd-mobile';
function Login() {
  return (
    <div>
      Login
      <Button onClick={()=>window.localStorage.setItem("token",'200')}>登录</Button>
      <Button onClick={()=>window.localStorage.setItem("token",'')}>退出账号</Button>
    </div>
  );
}

export default Login;
