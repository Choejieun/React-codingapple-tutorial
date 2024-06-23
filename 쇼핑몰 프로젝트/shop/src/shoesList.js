import data from './data.js';
import bg from './img/bg.jpg';
import { Navbar, Container, Nav, Row, Col  } from 'react-bootstrap';
import { useState } from 'react';

function ShoesList(){
    
  let [shoes] = useState(data)

    return (
      <div>
      <div className='main-bg' style={{backgroundImage : 'url('+bg+')'}}></div>
      <div>상품 리스트</div>
      <Container>
      <Row>
      {shoes.map(function(a) {
        return (
          <Col xs>
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