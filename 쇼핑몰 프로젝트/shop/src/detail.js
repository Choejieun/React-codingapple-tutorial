/* eslint-disable */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Detail(props){

  let [timeSet, setTimeSet] = useState(true);
  // useEffect(()=>{
  //   setTimeout(() => {setTimeSet(false) }, 2000);},[])

    useEffect(()=>{
      let a = setTimeout(() => {setTimeSet(false) }, 2000)
      return ()=>{
        clearTimeout(a)
      }
    }, [])

  let {id} = useParams();
  let shoe = props.shoes.find(a => id == a.id);
  return(
    <>
      {shoe ? <ShowDetail id={id} a={shoe} timeSet={timeSet} /> : <NoneDetail/>}
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
            <h4 className="pt-5">{props.a.title}</h4>
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