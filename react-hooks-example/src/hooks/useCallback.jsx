import { useCallback, useState } from "react";
import List from "./useCallbackList";

export default function UseCallback() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    console.log("run");
    return [number, number + 1, number + 2];
  }, [number]);

  const getItems2 = () => {
    console.log("run");
    return [number, number + 1, number + 2];
  };

  return (
    <div>
      <h2>useCallback Example</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(!dark)}>Đổi theme</button>
      <div
        style={{
          backgroundColor: dark ? "#222" : "#eee",
          color: dark ? "#fff" : "#000",
          padding: 10,
        }}
      >
        <List getItems={getItems} />
      </div>
    </div>
  );
}
