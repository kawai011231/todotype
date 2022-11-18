import { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: Todo = {
      inputValue: inputValue,
      id: todos.length,
      checked: false,
    };

    setTodos([newTodo, ...todos]);
    setInputValue("");
    console.log(todos);
  };

  const handleEdit = (id: number, inputValue: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.inputValue = inputValue;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div>
        <h2>TOdoリスト whis TypeScript</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" onChange={(e) => handleChange(e)} />
          <input type="submit" value="作成" />
        </form>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="text"
                onChange={(e) => handleEdit(todo.id, e.target.value)}
                value={todo.inputValue}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
