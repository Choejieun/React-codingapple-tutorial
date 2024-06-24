/* eslint-disable */
import React from 'react';
import bg from './img/bg.jpg';
import { Navbar, Container, Nav, Row, Col  } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate , Outlet } from 'react-router-dom';

function ShoesList(props){
  let navigate = useNavigate();
  return (
      <div key='list'>
      <div className='main-bg' style={{backgroundImage : 'url('+bg+')'}}></div>
      <div>상품 리스트</div>
      <button  onClick={()=>{
        let sortArray = [...props.shoes]
        sortArray.sort((a, b) => a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1);
        props.setShoes(sortArray);
      }}>가나다순정렬</button >
      <Container>
      <Row>
      {props.shoes.map(function(a) {
        return (
          <Col onClick={()=>{navigate('/detail/'+a.id)}} xs>
          <img src={a.img} width="80%" />
          <h4>{a.title}</h4>
          <p>{a.content}</p>
          <p>{a.price}원</p>
          </Col>
        );
      })}
      </Row>
      </Container>
      </div>
    )

}

export default ShoesList;