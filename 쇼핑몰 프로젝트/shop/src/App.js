/* eslint-disable */
// ^워링 업애주는 친구
import './App.css';
import { Navbar, Container, Nav, Row, Col  } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import bg from './img/bg.jpg';
import Detail from './detail.js';
import ShoesList from './shoesList.js';
import { Routes, Route, Link, useNavigate , Outlet } from 'react-router-dom';

function App() {
  let navigate = useNavigate()
  return (
    <div className="App">
      <Navbar /*</div>bg="dark" data-bs-theme="dark" */className='navBarTop'>
        <Container>
          <Navbar.Brand onClick={()=>{navigate('/')}}>아리아리콩</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate(-1)}}>뒤로가기</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/')}}>홈</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>상세페이지</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
      <Route path='/' element={<div>{<ShoesList/>}</div>}/> 
      <Route path='/detail' element={<div>{<Detail/>}</div>}/> 
      <Route path="/about" element={ <About/> } >  
          <Route path="member" element={ <div>멤버들</div> } />
          <Route path="location" element={ <div>회사위치</div> } />
      </Route>
      <Route path='/event' element={<Event/>}>
        <Route path='one' element={<div>첫 주문 시 양배추즙 서비스</div>}/>
        <Route path='two' element={<div>생일기념 쿠폰받기</div>}/>
      </Route>
      <Route path='*' element={<div>업슨페이지에용</div>}/> 
    </Routes>
    </div>
  );
}

function About(){
  return(
    <>
    <h4>회사정보임</h4>
    <Outlet></Outlet>
    </>
  )
}

function Event(){
  return(
    <>
    <h4>오늘의 이벤트</h4>
    <Outlet></Outlet>
    </>
  )
}

export default App;
