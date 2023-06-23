function IndependentMessage() {
  const getColor = () => Math.floor(Math.random() * 255);
  const style = {
    color: `rgb(${getColor()},${getColor()},${getColor()})`,
  };

  // this component does NOT consume the context
  // but is still within the Provider component
  return (
    <div>
      <h4 style={style}>
        I'm my own Independent Message! {"<-- Stays the same color!! 🙌"}
      </h4>
    </div>
  );
}
export default IndependentMessage;
