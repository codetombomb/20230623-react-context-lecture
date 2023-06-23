import { CounterContext } from "./context/CounterContext";
import { useContext } from 'react'

function Count() {
  const { count, setCount } = useContext(CounterContext);
  return (
    <div>
      <h3>Current count from context: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default Count;
