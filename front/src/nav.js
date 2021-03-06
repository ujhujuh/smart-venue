import BasicLayout from './layouts/BasicLayout';
import UserLayout from './layouts/UserLayout';

import Ground from './routes/Ground/Ground';

import Login from './routes/User/Login';
import Register from './routes/User/Register';
import RegisterResult from './routes/User/RegisterResult';

import Users from './routes/Users/Users';
import Roles from './routes/Role/Roles';
import Menus from './routes/Menu/Menus';

import Account from './routes/Account/Account';
import ChangePassword from './routes/Account/ChangePassword';
import Test from './routes/Account/Test';

const data = [{
  component: BasicLayout,
  layout: 'BasicLayout',
  name: '首页', // for breadcrumb
  path: '',
  children: [{
    name: '业务管理',             // 页面名称，会展示在菜单栏中
    icon: 'table',              // 页面图标，会展示在菜单栏中
    path: 'business',           // 匹配的路由
    children: [{
      name: '场地管理',             // 页面名称，会展示在菜单栏中
      path: 'grounds', 
      component: Ground, 
    }]             
  },{
    name: '系统管理',             // 页面名称，会展示在菜单栏中
    icon: 'table',              // 页面图标，会展示在菜单栏中
    path: 'system',           // 匹配的路由
    children: [{
      name: '用户管理',             // 页面名称，会展示在菜单栏中
      path: 'users', 
      component: Users, 
    }, {
      name: '角色管理',             // 页面名称，会展示在菜单栏中
      path: 'roles', 
      component: Roles, 
    },  {
      name: '菜单管理',             // 页面名称，会展示在菜单栏中
      path: 'menus', 
      component: Menus, 
    }]
  },{
    name: '用户中心',
    icon: 'user',
    path: 'account',
    children: [{
      name: '个人信息',
      path: 'info',
      component: Account,
    }, {
      name: '修改密码',
      path: 'changePassword',
      component: ChangePassword,
    }],
  }]
  
}];

export function getNavData() {
  return data;
}

export default data;
