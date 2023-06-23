import styles from "./styles.module.css";
import { useContext } from "react";
import { MessageContext } from "../../context/MessageContext";

function Child() {
  const [message, setMessage] = useContext(MessageContext);

  const handleButtonClick = (e) => {
    setMessage("updated from Child component");
    e.target.disabled = "true";
  };

  return (
    <div className={`text-fit ${styles.child}`}>
      <h1>Child</h1>
      <div>
        The Child is rendering the state message{" "}
        <span className="highlight">{message}</span>.
      </div>
      <button onClick={handleButtonClick}>Update State in Grandparent</button>
    </div>
  );
}
export default Child;
