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
  let [moreBtn, setMoreBtn] = useState(0);

  useEffect(()=>{
    // axios.get('https://codingapple1.github.io/shop/data2.json')
    Promise.all([ axios.get('https://codingapple1.github.io/shop/data2.json'), axios.get('https://codingapple1.github.io/shop/data3.json')])
    .then((Re)=>{
      // Re.map(function(a, i){
      //   console.log(i)
      //   let copy = [...moreProduct]
      //   copy = [...copy, ...Re[i].data]
      //   // copy = [...copy, ...Re[1].data]
      //   setMoreProduct(copy)
      //   console.log(copy)
      // })
      let copy = [...moreProduct]
      copy = [...copy, ...Re[0].data]
      copy = [...copy, ...Re[1].data]
      setMoreProduct(copy)
      console.log(copy)
    })
    .catch(()=>{console.log('실패함 ㅅㄱ')})
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
      {showMoreListOn ? <ShowMoreList moreProduct={moreProduct} moreBtn={moreBtn}/> : null }
      </Container>
      {/* <button onClick={()=>{
        showMoreListOn ? setShowMoreListOn(false) : setShowMoreListOn(true), setMoreBtn(moreBtn+1), moreProduct.splice(0)
      }}>버튼</button> */}
          <button onClick={()=>{
          if (moreBtn < 3) {
            setShowMoreListOn(true);
            setMoreBtn(moreBtn + 1);
          } else {
            moreProduct.splice(0)
            // setShowMoreListOn(false);
          }
              }}>버튼</button>
      </div>
    )

}

function ShowMoreList(props){
  let navigate = useNavigate();
  let items = props.moreProduct.slice(0, 3)
  let items2 = props.moreProduct.slice(3, 6)
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
    {props.moreBtn <= 2 ? null : 
      <Row>
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