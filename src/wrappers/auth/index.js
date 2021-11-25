/*
 * @Description:
 * @Author: 罗钧译
 * @Date: 2021-11-25 10:05:26
 * @LastEditors: 罗钧译
 * @LastEditTime: 2021-11-25 10:37:10
 */
import { Redirect } from 'umi';

function useAuth() {
  if (window.localStorage.getItem('token')) {
    console.log(111);
    return {
      isLogin: true,
    };
  } else {
    console.log(222);
    return {
      isLogin: false,
    };
  }
}
export default (props) => {
  const { isLogin } = useAuth();
  console.log(isLogin);
  if (isLogin) {
    console.log(props);
    return <div> {props.children} </div>;
  } else {
    return <Redirect to="/login" />;
  }
};
