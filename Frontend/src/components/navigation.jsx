import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './menu/menu';
import Home from '../pages/home';
import Search from '../pages/search';
import Register from '../pages/register';
import Error404 from '../pages/error404';
import Login from '../pages/login';
import Activity from '../pages/activity';
import { Content, Header } from 'antd/es/layout/layout';

function Navigation() {
  return (
    <Router>
    <Header>
      <Menu />
    </Header>
    <Content>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Activity" element={<Activity />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
    </Content>

  </Router>
    
  );
}   
export default Navigation;


