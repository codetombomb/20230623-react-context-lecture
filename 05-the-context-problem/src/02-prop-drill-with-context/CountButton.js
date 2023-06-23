import { CounterContext } from "./context/CounterContext";
import {useContext} from 'react'

function CountButton() {
  const { setCount } = useContext(CounterContext)
  return (
    <button onClick={() => setCount(count => count + 1)}>
      Increment
    </button>
  )
}
export default CountButton;
