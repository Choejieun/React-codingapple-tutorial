/* eslint-disable */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Detail(props){

  let [timeSet, setTimeSet] = useState(true);
  let [입력값, 입력값변경] = useState(0);

  //타이머용
  useEffect(()=>{
    let a = setTimeout(() => {setTimeSet(false) }, 2000)
    return ()=>{clearTimeout(a)}}, [])
    // Number.isInteger(intValue) && 입력값 !== '' ? null : alert("ㅎㅇ");
    
  //수량입력창용
  useEffect(()=>{
    const intValue = parseInt(입력값);
    Number.isInteger(intValue) == true ? null : alert("숫자를 입력해주세요")
    },[입력값])

  let {id} = useParams();
  let shoe = props.shoes.find(a => id == a.id);
  return(
    <>
      {shoe ? <ShowDetail 입력값={입력값} 입력값변경={입력값변경} id={id} a={shoe} timeSet={timeSet} /> : <NoneDetail/>}
    </>
    )
}
function ShowDetail(props){
  return(
    <>
      <div className="container">
        { props.timeSet == true ? <TimeSale/> : null}
        <div className="row">
          <div className="col-md-6">
            <img src={props.a.img} width="100%" />
          </div>
          <div className="col-md-6">
            
            <input placeholder="수량을입력해주세요"
              onChange={(e)=>{props.입력값변경(e.target.value)
              console.log('입력값입니다.'+props.입력값);}}
            />

            <h4 className="pt-3">{props.a.title}</h4>
            <p>{props.a.content}</p>
            <p>{props.a.price}원</p>
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>
      </div> 
    </>
  )
}
function TimeSale(props){
  return(
    <>
    <div className="alert alert-warning">2초이내 구매 시 할인</div>
    </>
  )
  }

function NoneDetail(props){
return(
  <>
   없는 페이지 입니다.
  </>
)
}

export default Detail;