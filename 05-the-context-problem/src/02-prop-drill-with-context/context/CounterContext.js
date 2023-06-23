import { createContext, useState } from "react";

export const CounterContext = createContext();

function CounterProvider({ children }) {
  console.log(children)
  const [count, setCount] = useState(0);
  const value = { count, setCount };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
}

export default CounterProvider
