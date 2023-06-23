

function CountButton({ setCount }) {
  return (
    <button onClick={() => setCount((count) => count + 1)}>Increment</button>
  );
}
export default CountButton;
