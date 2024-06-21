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
      {/* <Container>
      <Row>
        <Col xs>
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
        <h4>{shoes[0].title}</h4>
        <p>상품정보</p>
        <p>원</p>
        </Col>
        <Col xs>
        <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%" />
            <h4>{shoes[1].title}</h4>
            <p>상품정보</p>
        </Col>
        <Col xs>
        <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%" />
            <h4>{shoes[2].title}</h4>
            <p>상품정보</p>
          </Col>
      </Row>
      </Container> */}
    </div>
  );
}

function ShoesList(props){
    return (
      props.shoes.map(function (a, i) {
      <div>
        {props.a}
        {i}
        {console.log(a)}
      <Container>
      <Row>
        <Col xs>
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
        {/* <h4>{props.shoes[0].title}</h4> */}
        <p>상품정보</p>
        <p>원</p>
        </Col>
        <Col xs>
        <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%" />
            <h4>{props.shoes[1].title}</h4>
            <p>상품정보</p>
        </Col>
        <Col xs>
        <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%" />
            <h4>{props.shoes[2].title}</h4>
            <p>상품정보</p>
          </Col>
      </Row>
      </Container>
      </div>
      })
    )

}

export default App;
