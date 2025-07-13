import { useMemo, useState } from "react";

function slowFunction(num) {
  console.log("Tính toán chậm...");
  for (let i = 0; i < 1e8; i++) {
    // giả lập tác vụ nặng
  }
  return num * 2;
}

export default function UseMemoDemo() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const doubled = useMemo(() => slowFunction(number), [number]);

  const themeStyle = useMemo(
    () => ({
      backgroundColor: dark ? "#333" : "#fff",
      color: dark ? "#fff" : "#000",
      padding: 20,
      borderRadius: 8,
      marginTop: 20,
      transition: "all 0.3s ease",
    }),
    [dark]
  );

  return (
    <div>
      <h2>useMemo Example</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />

      <button onClick={() => setDark((prev) => !prev)}>Đổi theme</button>

      <div style={themeStyle}>
        <p>Kết quả tính toán: {doubled}</p>
      </div>
    </div>
  );
}

// Dòng console.log("Tính toán chậm..."); nằm trong slowFunction() và chỉ được gọi lại nếu number thay đổi.
// Khi chỉ bấm “Đổi theme”, component re-render nhưng number không đổi → useMemo giữ lại giá trị trước đó → slowFunction không được gọi lại.
