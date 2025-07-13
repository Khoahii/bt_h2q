import { useRef } from "react";

export default function UseRef() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>useRef Example</h2>
      <input
        ref={inputRef}
        placeholder="Nhập gì đó..."
      />
      <button
        onClick={focusInput}
      >
        Focus input
      </button>
    </div>
  );
}
