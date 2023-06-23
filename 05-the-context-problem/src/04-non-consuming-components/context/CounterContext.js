import { createContext, useState, useMemo } from "react";

export const CounterContext = createContext();

function CounterProvider({ children }) {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Hello from Context!");


    const value = {
      count,
      setCount,
      message,
      setMessage,
    };

  // ----- Performance Update useMemo -----

  // here we pass our value to useMemo,
  // and tell useMemo to only give us new values
  // when count or message change

  // const value = useMemo( // https://kentcdodds.com/blog/usememo-and-usecallback
  //   () => ({
  //     count,
  //     setCount,
  //     message,
  //     setMessage,
  //   }),
  //   [count, message]
  // );

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
}

export default CounterProvider;
