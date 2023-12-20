import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);
  // let counter = 5;
  let addValue = () => {
    setCounter(counter + 1);
  };
  let removeValue = () => {
    if(counter===0){
      return
    }
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter: {counter}</h2>

      <button onClick={addValue}>add</button>
      <button onClick={removeValue}>remove</button>
    </>
  );
}

export default App;
