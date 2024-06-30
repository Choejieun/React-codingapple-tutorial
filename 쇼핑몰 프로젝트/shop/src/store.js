import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
   name : 'user',
   initialState : 'kim',
   reducers : {
      changeName(state){
        return 'john ' + state
      }
   }
})

export let {changeName } = user.actions
//오른쪽 자료를 변수로 뺴는 문법일 뿐

let stock = createSlice({
  name : 'stock',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ] 
})

export default configureStore({
  reducer: { 
    user : user.reducer,
    stock : stock.reducer
  }
}) 