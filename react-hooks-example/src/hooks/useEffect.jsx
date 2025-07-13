import { useEffect, useState } from "react";

export default function UseEffect() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div>
      <h2>useEffect Example</h2>
      <p>Thời gian hiện tại: {time.toLocaleTimeString()}</p>
    </div>
  );
}
