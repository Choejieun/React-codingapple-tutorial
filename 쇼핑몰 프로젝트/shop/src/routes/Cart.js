import {Collapse, Table} from 'react-bootstrap'
import { useSelector } from 'react-redux'

function Cart(){

  let stock = useSelector((state)=> state.stock)
  console.log(stock[0].id)

    return(
        <>
    <Table>
  <thead>
    <tr>
      <th>#</th>
      <th>상품명</th>
      <th>수량</th>
      <th>변경하기</th>
    </tr>
  </thead>
  <tbody>
    {stock.map((a, i)=>{
    <tr>
      <td>{a.id}</td>
      <td>{a.name}</td>
      <td>{a.count}</td>
      <td>{a.id}</td>
    </tr>
    })}
  </tbody>
</Table> 
        </>
    )
}

export default Cart