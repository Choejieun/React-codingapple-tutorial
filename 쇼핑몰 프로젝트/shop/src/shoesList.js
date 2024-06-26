/* eslint-disable */
import React, { useEffect, useState } from 'react';
import bg from './img/bg.jpg';
import { Navbar, Container, Nav, Row, Col  } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate , Outlet } from 'react-router-dom';
import axios from 'axios'

function ShoesList(props){
  let navigate = useNavigate();
  let [showMoreListOn, setShowMoreListOn] = useState(false);
  let [moreProduct, setMoreProduct] = useState([]);

  useEffect(()=>{
    axios.get('https://codingapple1.github.io/shop/data2.json')
    .then((Re)=>{
    setMoreProduct(Re.data);})
    .catch(()=>{console.log('실패함 ㅅㄱ')})
    // return ()=>{setMoreProduct([])}
    },[showMoreListOn])

  return (
      <div key='list'>
      <div className='main-bg' style={{backgroundImage : 'url('+bg+')'}}></div>
      <div key='상품리스트'>상품 리스트</div>
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
      {showMoreListOn ? <ShowMoreList moreProduct={moreProduct}/> : null }
      </Container>
      <button onClick={()=>{
        showMoreListOn ? setShowMoreListOn(false) : setShowMoreListOn(true), moreProduct.splice(0)
      }}>버튼</button>
      </div>
    )

}

function ShowMoreList(props){
  let navigate = useNavigate();
  let num = 4;
  return(
    <Row>
      {props.moreProduct.map((a, i) => (
        <Col key={a.id} onClick={() => { navigate('/detail/' + a.id) }} xs>
          <img src={'https://codingapple1.github.io/shop/shoes'+(num+i)+'.jpg'} width="80%" />
          <h4>{a.title}</h4>
          <p>{a.content}</p>
          <p>{a.price}원</p>
        </Col>
      ))}
    </Row>
  )
}

export default ShoesList;