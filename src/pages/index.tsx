/*
 * @Description:
 * @Author: 罗钧译
 * @Date: 2021-11-24 16:43:19
 * @LastEditors: 罗钧译
 * @LastEditTime: 2021-11-25 15:21:42
 */
// import styles from './index.less';
// import { Button } from 'antd-mobile';
// import { Link } from 'umi';

// export default function IndexPage() {
//   return (
//     <div>
//       <h1 className={styles.title}>Page index</h1>
//       <div>12212</div>
//       <Link to="/home">
//         <Button>12</Button>
//       </Link>
//     </div>
//   );
// }


import { NavBar, TabBar } from 'antd-mobile'
import React, { FC } from 'react'
import {
  Route,
  Switch,
  useHistory,
  useLocation,
  MemoryRouter as Router,
} from 'react-router-dom'
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'
import styles from './index.less'
import Home from '@/pages/home'

const Bottom: FC = () => {
  const history = useHistory()
  const location = useLocation()
  const { pathname } = location

  const setRouteActive = (value: string) => {
    history.push(value)
  }

  const tabs = [
    {
      key: '/home',
      title: '首页',
      icon: <AppOutline />,
    },
    {
      key: '/todo',
      title: '我的待办',
      icon: <UnorderedListOutline />,
    },
    {
      key: '/message',
      title: '我的消息',
      icon: <MessageOutline />,
    },
    {
      key: '/me',
      title: '个人中心',
      icon: <UserOutline />,
    },
  ]

  return (
    <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
      {tabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  )
}

export default () => {
  return (
    <Router initialEntries={['/home']}>
      <div className={styles.app}>
        <p style={{background:"#ccc"}}>111</p>
        <div className={styles.top}>
          <NavBar>配合路由使用</NavBar>
        </div>
        <div className={styles.body}>
          <Switch>
            <Route exact path='/home'>
              <Home />
            </Route>
            <Route exact path='/todo'>
              <Todo />
            </Route>
            <Route exact path='/message'>
              <Message />
            </Route>
            <Route exact path='/me'>
              <PersonalCenter />
            </Route>
          </Switch>
        </div>
        <div className={styles.bottom}>
          <Bottom />
        </div>
      </div>
    </Router>
  )
}

// function Home() {
//   return <div>首页</div>
// }

function Todo() {
  return <div>我的代办</div>
}

function Message() {
  return <div>我的消息</div>
}

function PersonalCenter() {
  return <div>个人中心</div>
}
