/* eslint-disable */
// ^워링 업애주는 친구

import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 초밥 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 맛집 추천', '코드추천 강남']);
  let [따봉넘버, 따봉넘버변경] = useState([0,0,0]);
  // a는 보관된 이름
  // b는 변경을 도와줌

  let [modal, setModal] = useState([false,false,false]);
  //모달용, 변경어는 set~로 하는 게 기본
  //형식은자유, 모달창 상태 표현만 가능 가능하게

  return (
    //JSX 문법
    //{} 데이터 바인딩
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button  onClick={()=>{
        let sortArray = [...글제목].sort();
        글제목변경(sortArray);
      }}>가나다순정렬</button >

       <button onClick={() => {
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        글제목변경(copy);
       }}>글수정</button>

       {
        글제목.map(function(a, i){
          return (
            <div className='list'>
            <h4 onClick={()=>{
              modal[i] == false ? setModal(true) : setModal(false)
              // setModal(true)
            }} >{a}
            </h4>
            <span onClick={()=>{
              let copy = [...따봉넘버];
              copy[i]=copy[i]+1;
              따봉넘버변경(copy);
            }}>
            ❤
            </span>{따봉넘버[i]}
            <p>2월 17일 발행</p>
          </div>
          )        
        })
       }
       {
         modal == true ? <Modal modal={modal} color={'skyblue'} 글제목={글제목} 글제목변경={글제목변경}/> : null
       }
       <ANT/>
      <h4 style={{ color: 'red', fontSize: '9px' }}>110-572-321917</h4>
      <h4>{post}</h4>
    </div>
  );
}

function Modal(props){
  return (
    <div className='modal' style={{background : props.color}}>
      <span>{props.modal[0]}</span>
    <h4>{props.글제목[0]}</h4>
    <p>날짜</p>
    <p>상세내용</p>
    <button onClick={()=>{
      let copy = [...props.글제목];
      copy[0] = "여자코트 추천"
      props.글제목변경(copy);
    }}>글수정</button>
    </div>
  )
}

function ANT(){
  return(
    <div className='modal'>
      <h4>똥</h4>
    </div>
  )
}

export default App;
