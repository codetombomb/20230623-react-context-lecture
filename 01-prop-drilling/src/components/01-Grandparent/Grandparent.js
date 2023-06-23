import { useState } from "react";
import Parent from "../02-Parent";
import styles from "./styles.module.css";

function Grandparent() {
  const [message, setMessage] = useState("passed from Grandparent");

  function handleSetMessage (message) {
    setMessage(message)
  }

  return (
    <div className={`text-fit ${styles.grandparent}`}>
      <h1>Grandparent</h1>
      <div>
        This state message was <span className="highlight">{message}</span>.
      </div>

      <Parent message={message} onSetMessage={handleSetMessage}/>

    </div>
  );
}
export default Grandparent;
