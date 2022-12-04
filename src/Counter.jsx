import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function increment(){
    if(count < 10){
        setCount(count + 1);
    }
  }
  function decrement(){
    if(count > 0){
        setCount(count - 1);
    }
  }

  return (
    <div>
      <p>{count}</p>
      <div>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
        {count >= 10 && <div>
            You have reached your limit
        </div>
        }
      </div>
    </div>
  );
};

export default Counter;
