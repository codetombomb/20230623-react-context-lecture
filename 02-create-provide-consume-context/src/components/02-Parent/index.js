import Child from "../03-Child";
import styles from "./styles.module.css";

function Parent({ message, onSetMessage }) {
  return (
    <div className={`text-fit ${styles.parent}`}>
      <h1>Parent</h1>
      <div>
        This Parent Component is just passing the message to the Child Component
        and has no need for it.
      </div>


      <Child message={message}  onSetMessage={onSetMessage}/>


    </div>
  );
}
export default Parent;
