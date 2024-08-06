import { useDispatch, useSelector } from "react-redux"
import { CounterState, decrement, increment } from "../redux/counterSlice.ts"

const Counter = () => {
  const count = useSelector((state: CounterState) => state.count)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Лічильник: </h2>
      <h1>{count}</h1>
      <div className="App">
        <button onClick={() => dispatch(decrement())} className="minus">
          - Мінус
        </button>
        <button onClick={() => dispatch(increment())} className="plus">
          Плюс +
        </button>
      </div>
    </div>
  )
}

export default Counter
