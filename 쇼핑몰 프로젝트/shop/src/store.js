import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'


let stock = createSlice({
  name : 'stock',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers : {
    addStock(state, action) {
      let num = state.findIndex(a => a.id == action.payload)
      // 변수 num은 state안에서 findIndex(본인 => 본인.오브젝트 == 받은액션)
      // 그 받은 액션과 내가 걸어놓은 조건이 동일한 것의 Index를 반환함
      state[num].count ++
    },
    addStockList(state, action){
      let findStock = state.findIndex(a=>a.id == action.payload.id)
      findStock == -1 ? 
      state.push({
      id : action.payload.id,
      name : action.payload.title,
      count : 1}) :
      state[findStock].count ++
    }
  } 
})
export let {addStock, addStockList} = stock.actions
//오른쪽 자료를 변수로 뺴는 문법

export default configureStore({
  reducer: { 
    user : user.reducer,
    stock : stock.reducer
  }
}) 