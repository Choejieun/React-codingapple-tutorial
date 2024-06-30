import { Collapse, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeName } from '../store'

function Cart() {

  let stock = useSelector((state) => state.stock)
  let state = useSelector((state) => state)
  let dispatch = useDispatch()

  return (
    <>
    {state.user}의 장바구니
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
          {stock.map((a, i) =>
            <tr key={i}>
              <td>{a.id}</td>
              <td>{a.name}</td>
              <td>{a.count}</td>
              <td><button onClick={() => {
                dispatch(changeName())
              }}>+</button></td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  )
}

export default Cart