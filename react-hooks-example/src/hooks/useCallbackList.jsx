import { useEffect, useState } from "react";

export default function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
  }, [getItems]);

  return items.map((item, i) => <div key={i}>Item: {item}</div>);
}
