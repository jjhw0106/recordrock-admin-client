import React, { useState } from "react";

function Counter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increaseCount = () => setCount((count) => count+1);
  const decreaseCount = () => setCount((count) => count-1);

  return [count, increaseCount, decreaseCount]
}

export default Counter;