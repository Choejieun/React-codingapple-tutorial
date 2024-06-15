/* eslint-disable */
// ^워링 업애주는 친구

import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 초밥 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 맛집 추천', '코드추천 강남']);
  let [따봉, 따봉변경] = useState(0);
  // a는 보관된 이름
  // b는 변경을 도와줌

  return (
    //JSX 문법
    //{} 데이터 바인딩
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <butoon onClick={()=>{
        let sortArray = [...글제목].sort();
        글제목변경(sortArray);
      }}>가나다순정렬</butoon>

       <button onClick={() => {
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        글제목변경(copy);
       }}>글수정</button>

      <div className='list'>
        <h4>{글제목[0]} <span onClick={()=>{따봉변경(따봉+1)}}>❤</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

       <Modal></Modal>
       <ANT/>

      <h4 style={{ color: 'red', fontSize: '9px' }}>110-572-321917</h4>
      <h4>{post}</h4>
    </div>
  );
}

/*
let Modal = () => {
  return
}
  */

function Modal(){
  return (
    <div className='modal'>
    <h4>제목</h4>
    <p>날짜</p>
    <p>상세내용</p>
    </div>
  )
}

function ANT(){
  return(
    <div className='ant'>
      <h4>똥</h4>
    </div>
  )
}

export default App;
