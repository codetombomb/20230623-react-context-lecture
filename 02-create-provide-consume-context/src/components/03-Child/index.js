import styles from "./styles.module.css";

function Child({message, onSetMessage}) {

  const handleButtonClick = (e) => {
    onSetMessage("updated from Child component")
    e.target.disabled = "true"
  }

  return (
    <div className={`text-fit ${styles.child}`}>
      <h1>Child</h1>
      <div>
        The Child is rendering the state message{" "}
        <span className="highlight">{message}</span>.
      </div>
      <button onClick={handleButtonClick}>Update State in Grandparent</button>
    </div>
  )
}
export default Child;
