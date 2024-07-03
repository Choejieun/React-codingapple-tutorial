/* eslint-disable */
// ^워링 업애주는 친구
import './App.css';
import { Navbar, Container, Nav, Row, Col  } from 'react-bootstrap';
import { createContext, useEffect, useState } from 'react';
import data from './data.js';
import Detail from './detail.js';
import Cart from './routes/Cart.js';
import ShoesList from './shoesList.js';
import { Routes, Route, Link, useNavigate , Outlet, json } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query';

export let Context1 = createContext() // state 보관함

function App() {

useEffect(()=>{
  let 꺼낸거 = localStorage.getItem('watched')
  꺼낸거 = JSON.parse(꺼낸거)
  꺼낸거 != null ? null : localStorage.setItem('watched', JSON.stringify([])
  ,[])
})

  let [shoes, setShoes] = useState(data)
  let navigate = useNavigate()
  let [재고] = useState([10, 11, 12])

  let result = useQuery('작명', ()=>{
   return axios.get('https://codingapple1.github.io/userdata.json').then((a)=>{
    return  a.data
    })},{staleTime : 2000}) //재요청 시간 제한

  return (
    <div className="App">
      <Navbar /*</div>bg="dark" data-bs-theme="dark" */className='navBarTop'>
        <Container>
          <Navbar.Brand onClick={()=>{navigate('/')}}>아리아리콩</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate(-1)}}>뒤로가기</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/')}}>홈</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>상세페이지</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}}>장바구니</Nav.Link>
          </Nav>
          <Nav className="me-auto">
            {result.isLoading ? '로딩중' : result.data.name}
          </Nav>
        </Container>
      </Navbar>
      <Routes>
      <Route path='/' element={<ShoesList shoes={shoes} setShoes={setShoes} />}/> 

      <Route path='/detail/:id' element={
        <Context1.Provider value={{재고}}>
        <Detail shoes={shoes}/>
        </Context1.Provider>
        }/>

      <Route path='/cart' element={<Cart/>}/>

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
