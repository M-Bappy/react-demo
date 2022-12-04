import { useState } from "react";

const useCounter = ({init = 0}) => {

  const [count, setCount] = useState(init);

  function HandleInc() {
    if (count < 10) {
      setCount(count + 1);
    }
  }
  function HandleDec() {
    if (count > 0) {
      setCount(count - 1);
    }
  }


  return {
    count,
    HandleInc,
    HandleDec,
  }

};

export default useCounter;
