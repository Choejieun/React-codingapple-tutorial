/* eslint-disable */
// ^워링 업애주는 친구

import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 초밥 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 맛집 추천', '코드추천 강남']);
  let [따봉, 따봉변경] = useState(0);
  let [따봉넘버, 따봉넘버변경] = useState([54,2,3]);
  let [변경테스트, set변경테스트] = useState(['라모스','양의지','김민재']);
  // a는 보관된 이름
  // b는 변경을 도와줌

  let [modal, setModal] = useState(false);
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

      {/* <div className='list'>
        <h4>{글제목[0]} <span onClick={()=>{따봉변경(따봉+1)}}>❤</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div> */}


       {
        글제목.map(function(a, i){
          return (
            <div className='list'>
            <h4 onClick={()=>{
              modal == false ? setModal(true) : setModal(false)
            }} >{a}
            </h4>
            <span onClick={()=>{
              set변경테스트(변경테스트[i]='조수행')
            }}>
            {변경테스트[i]}
            </span>
            <span onClick={()=>{따봉넘버변경(따봉넘버[i]+1)}}>❤</span> {따봉넘버[i]}
            <span onClick={()=>{따봉변경(따봉+1)}}>❤</span> {따봉}
            <p>2월 17일 발행</p>
          </div>
          )        
        })
       }
       
      {/* {
       따봉.map(function(b, i){
         return(
         <span onClick={()=>{
           따봉변경(b)
         }}>❤{b}</span>
               )
       })
       }  */}

       {
         modal == true ? <Modal/> : null
       }
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
    <div className='modal'>
      <h4>똥</h4>
    </div>
  )
}

export default App;
