import { useState } from "react";

export default function UseState() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>useState Example</h2>
      <p>Giá trị: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
      >
        Tăng
      </button>
    </div>
  );
}
