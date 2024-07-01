import { createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    initialState : {name : 'kim', age : 20 },
    reducers : {
       changeName(state){
        state.name =  'park'
       },
       addAge(state, action){
         state.age = state.age+action.payload
        }
    }
 })

 export let {changeName, addAge } = user.actions
//오른쪽 자료를 변수로 뺴는 문법일 뿐

 export default user