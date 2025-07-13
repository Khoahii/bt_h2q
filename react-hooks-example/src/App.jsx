import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import UseState from "./hooks/useState";
import UseEffect from "./hooks/useEffect";
import UseRef from "./hooks/useRef";
import UseMemo from "./hooks/useMemo";
import UseCallback from "./hooks/useCallback";
import UseContext from "./hooks/useContext";

const navItems = [
  { path: "/use-state", label: "useState" },
  { path: "/use-effect", label: "useEffect" },
  { path: "/use-ref", label: "useRef" },
  { path: "/use-memo", label: "useMemo" },
  { path: "/use-callback", label: "useCallback" },
  { path: "/use-context", label: "useContext" },
];

export default function App() {
  return (
    <Router>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>React Hooks Playground</h1>

        <nav style={{ display: "flex", gap: 8 }}>
          {navItems.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `px-3 py-1 rounded ${
                  isActive
                    ? "bg-blue-600 text-white font-semibold"
                    : "text-gray-700 bg-gray-200"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <Routes>
          <Route path="/" element={<Navigate to="/use-state" />} />
          <Route path="/use-state" element={<UseState />} />
          <Route path="/use-effect" element={<UseEffect />} />
          <Route path="/use-ref" element={<UseRef />} />
          <Route path="/use-memo" element={<UseMemo />} />
          <Route path="/use-callback" element={<UseCallback />} />
          <Route path="/use-context" element={<UseContext />} />
        </Routes>
      </div>
    </Router>
  );
}
