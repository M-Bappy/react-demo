import { useState } from "react";

function ProductListItem({}) {
  const [count, setCount] = useState(0);

  function increment() {
    if (count < 10) {
      setCount(count + 1);
    }
  }
  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <h1>Keyboard {count} / 10</h1>
      <div>
        <button disabled={count <= 0} onClick={decrement}>Decrement</button>
        <button disabled={count >= 10} onClick={increment}>Increment</button>
        {count >= 10 && <div>You have reached your limit</div>}
      </div>
    </>
  );
}



const Product = () => {
  return (
    <div>
        <ProductListItem></ProductListItem>
        <ProductListItem></ProductListItem>
  </div>
  )
};

export default Product;
