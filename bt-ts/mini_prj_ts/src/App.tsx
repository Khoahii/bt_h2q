import { useEffect, useState } from "react";
import type { Todo } from "./types/Todo";
import { getAllTodos } from "./services/todoService";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAllTodos()
      .then((data) => {
        setTodos(data.todos);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <input type="checkbox" checked={t.completed} readOnly />
            {t.todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
