import { useState } from 'react'
import "./App.css";

//--------- 01-prop-drill ---------
import CountDisplay from './01-prop-drill-2/CountDisplay';
import OuterWrapper from './01-prop-drill-2/OuterWrapper';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Prop Drill 2</h1>
      <CountDisplay count={count} />
      <OuterWrapper setCount={setCount}/>
    </div>
  )
}
export default App;

//--------- 02-prop-drill-with-context ---------
// import CountDisplay from "./02-prop-drill-with-context/CountDisplay";
// import OuterWrapper from "./02-prop-drill-with-context/OuterWrapper";
// import CounterProvider from "./02-prop-drill-with-context/context/CounterContext";

// function App() {
//   return (
//     <div>
//       <h1>Prop Drill With Context</h1>
//       <CounterProvider>
//         <CountDisplay />
//         <OuterWrapper />
//       </CounterProvider>
//     </div>
//   );
// }
// export default App;

//--------- 03-the-context-problem ---------
// import CounterProvider from "./03-the-context-problem/context/CounterContext";
// import Message from "./03-the-context-problem/Message";
// import Count from "./03-the-context-problem/Count";

// function App() {
//   return (
//     <div>
//       <h1>The Context Problem</h1>
//       <h3>
//         Everything that consumes a context re-renders everytime that context’s
//         state changes.
//       </h3>
//       <CounterProvider>
//         <h2>Re-renders! 😩</h2>
//         <Message />
//         <Message />
//         <Message />
//         <Count />
//       </CounterProvider>
//     </div>
//   );
// }
// export default App;

//--------- 04-non-consuming-components ---------
// import CounterProvider from "./04-non-consuming-components/context/CounterContext";
// import Message from "./04-non-consuming-components/Message";
// import Count from "./04-non-consuming-components/Count";
// import IndependentMessage from "./04-non-consuming-components/IndependentMessage";

// function App() {
//   return (
//     <div>
//       <h1>Non-Consuming Components</h1>
//       <h3>
//         The IndependentMessage component does NOT consume the context but is
//         still within the Provider component
//       </h3>
//       <CounterProvider>
//         <h2>Re-renders! 😩</h2>
//         <Message />
//         <Message />
//         <Message />
//         <IndependentMessage />
//         <Count />
//       </CounterProvider>
//     </div>
//   );
// }
// export default App;



/*
A Few Solutions

1. Let a component manage its own state if it can. 
  - This is a good practice to follow regardless of your choice of state management. For example, if you have a modal that needs to keep track of an open/closed state, but no other components need to know if that modal is open, keep that open/closed state in the modal. Don’t push state into context (or Redux) if you don’t have to!


2. If your state is shared between a parent and a few children, just prop it down. 
  - This is the old school method of sharing state. Just pass it as props to the children components that need it. Passing props or “Prop-drilling” can be miserable with deeply nested components, but if you’re only passing things down a few levels, you should probably just do it.

3. If the previous two things fail, use context but keep it close to the components that depend on it. 
- This means if you need to share some state, like a form for instance with multiple components, go ahead and make a separate context for just the form and wrap the form components in your provider.
 */


//--------- 05-keep-context-close ---------
// import CounterProvider from "./05-keep-context-close/context/CounterContext";
// import MessageProvider from "./05-keep-context-close/context/MessageContext";
// import Message from "./05-keep-context-close/Message";
// import Count from "./05-keep-context-close/Count";

// function App() {
//   return (
//     <div>
//       <h1>Non-Consuming Components</h1>
//       <h3>
//         The IndependentMessage component does NOT consume the context but is
//         still within the Provider component
//       </h3>
//       <h2>No Unnecessary Re-renders! 😎</h2>
//       <MessageProvider>
//         <Message />
//         <Message />
//         <Message />
//       </MessageProvider>
//       <CounterProvider>
//         <Count />
//       </CounterProvider>
//     </div>
//   );
// }
// export default App;
