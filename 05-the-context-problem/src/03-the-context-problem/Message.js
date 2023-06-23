import { CounterContext } from "./context/CounterContext";
import { useContext } from 'react'

function Message() {
  const { message } = useContext(CounterContext)

  const getColor = () => Math.floor(Math.random() * 255); // Random number between 0 - 255
  
  const style = {
    color: `rgb(${getColor()},${getColor()},${getColor()})`, 
  };

  return (
    <div>
      <h4 style={style}>{message}</h4>
    </div>
  );
}
export default Message;
