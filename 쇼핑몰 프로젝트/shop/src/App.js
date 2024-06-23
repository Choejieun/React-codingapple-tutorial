import './App.css';
import { Button, Navbar, Container, Nav, Row, Col  } from 'react-bootstrap';
import bg from './img/bg.jpg';
import { useState } from 'react';
import data from './data.js';

function App() {

  let [shoes] = useState(data)

  return (
    <div className="App">
      <Navbar /*</div>bg="dark" data-bs-theme="dark" */className='navBarTop'>
        <Container>
          <Navbar.Brand href="#home">아리아리콩</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">홈</Nav.Link>
            <Nav.Link href="#features">상품</Nav.Link>
            <Nav.Link href="#pricing">이벤트</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg' style={{backgroundImage : 'url('+bg+')'}}></div>
      <div>상품 리스트</div>
      <ShoesList shoes={shoes} />
    </div>
  );
}

function Test(props) {
  return (
    <div>
      {props.shoes.map(function(a, index) {
        return (
          <Col xs>
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
          <h4>{props.shoes[0].title}</h4>
          <p>상품정보</p>
          <p>원</p>
          </Col>
        );
      })}
    </div>
  );
}


function ShoesList(props){
    return (
      <div>
      <Container>
      <Row>
      {props.shoes.map(function(a, i) {
        return (
          <Col xs>
          <img src={props.shoes[i].img} width="80%" />
          <h4>{props.shoes[i].title}</h4>
          <p>{props.shoes[i].content}</p>
          <p>{props.shoes[i].price}원</p>
          </Col>
        );
      })}
      </Row>
      </Container>
      </div>
    )

}

export default App;
