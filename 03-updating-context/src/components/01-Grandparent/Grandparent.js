import { useState, useContext } from "react";
import Parent from "../02-Parent";
import styles from "./styles.module.css";
import MessageContext from "../../context/MessageContext";

function Grandparent() {
  const {message} = useContext(MessageContext)
  
  return (
    <div className={`text-fit ${styles.grandparent}`}>
      <h1>Grandparent</h1>
      <div>
        This state message was <span className="highlight">{message}</span>.
      </div>

      <Parent />

    </div>
  );
}
export default Grandparent;
