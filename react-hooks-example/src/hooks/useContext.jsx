import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);
  return (
    <ThemeContext.Provider value={{ dark, toggle: () => setDark(d => !d) }}>
      {children}
    </ThemeContext.Provider>
  );
}

function Box() {
  const { dark, toggle } = useContext(ThemeContext);
  return (
    <div style={{
      backgroundColor: dark ? '#222' : '#eee',
      color: dark ? '#fff' : '#000',
      padding: 20
    }}>
      <p>Theme hiện tại: {dark ? 'Dark' : 'Light'}</p>
      <button onClick={toggle} >Toggle Theme</button>
    </div>
  );
}

export default function UseContext() {
  return (
    // bọc lại với ThemeProvider
    <ThemeProvider>
      <h2>useContext Example</h2>
      <Box />
    </ThemeProvider>
  );
}
