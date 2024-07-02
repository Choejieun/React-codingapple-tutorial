/* eslint-disable */
import React, { useEffect, useState } from 'react';
import bg from './img/bg.jpg';
import { Navbar, Container, Nav, Row, Col  } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate , Outlet, json } from 'react-router-dom';
import axios from 'axios'

function ShoesList(props){
  let navigate = useNavigate();
  let [showMoreListOn, setShowMoreListOn] = useState(false);
  let [moreProduct, setMoreProduct] = useState([]);
  let [moreBtn, setMoreBtn] = useState(0);
  let [modalOpen, setModalOpen] = useState(false);

  useEffect(()=>{
    Promise.all([ axios.get('https://codingapple1.github.io/shop/data2.json'), axios.get('https://codingapple1.github.io/shop/data3.json')])
    .then((Re)=>{
      setModalOpen(false)
      let copy = [...moreProduct]
      copy = [...copy, ...Re[0].data]
      copy = [...copy, ...Re[1].data]
      setMoreProduct(copy)
    })
    .catch(()=>{
      setModalOpen(false);})
    return ()=>{setMoreProduct([])}
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
      {props.shoes.map(function(a, i) {
        return (
          <Col key={i} onClick={()=>{navigate('/detail/'+a.id)}} xs>
          <img src={a.img} width="80%" />
          <h4>{a.title}</h4>
          <p>{a.content}</p>
          <p>{a.price}원</p>
          </Col>
        );
      })}
      </Row>
      {modalOpen == true ? <Loading/> : null}
      {showMoreListOn ? <ShowMoreList setModalOpen={setModalOpen} moreProduct={moreProduct} moreBtn={moreBtn} setMoreBtn={setMoreBtn}/> : null }
      </Container>
          <button onClick={()=>{
          if (moreBtn < 3) {
            setModalOpen(true)
            setShowMoreListOn(true);
            setMoreBtn(moreBtn + 1);
          } else {
            setModalOpen(false)
            moreProduct.splice(0)
          }
              }}>버튼</button>
      </div>
    )

}

function Loading(props){
  return(
    <>
☆☆☆☆☆☆로딩중입니다.☆☆☆☆☆☆
    </>
  )
}

function ShowMoreList(props){
  let navigate = useNavigate();
  let items = props.moreProduct.slice(0, 3)
  let items2 = props.moreProduct.slice(3, 6)

  useEffect(() => {
    if (props.moreBtn > 2) {
      props.setMoreBtn(2);
      alert('상품이 더 없습니다');
    }
  }, [props.moreBtn]);

  return(
    <>
    <Row>
      {items.map((a, i) => (
        <Col key={a.id} onClick={() => { navigate('/detail/' + a.id) }} xs>
          <img src={'https://codingapple1.github.io/shop/shoes'+(a.id+1)+'.jpg'} width="80%" />
          <h4>{a.title}</h4>
          <p>{a.content}</p>
          <p>{a.price}원</p>
        </Col>
      ))}
    </Row>
    {props.moreBtn <= 1 ? null : 
      <Row>
      {props.setModalOpen(false)}
      {items2.map((a, i) => (
        <Col key={a.id} onClick={() => { navigate('/detail/' + a.id) }} xs>
          <img src={'https://codingapple1.github.io/shop/shoes'+(a.id+1)+'.jpg'} width="80%" />
          <h4>{a.title}</h4>
          <p>{a.content}</p>
          <p>{a.price}원</p>
        </Col>
      ))}
    </Row>
   }
    </>
  )
}

export default ShoesList;