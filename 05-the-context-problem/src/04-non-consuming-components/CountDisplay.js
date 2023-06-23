import { CounterContext } from "./context/CounterContext";
import { useContext } from "react";

function CountDisplay() {
  const { count } = useContext(CounterContext);
  return <h2>The Count is: {count}</h2>;
}

export default CountDisplay;
