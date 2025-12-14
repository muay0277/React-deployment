import { useState, useRef } from "react";

function TodoForm({ onAddTodo }) {
  const [text, setText] = useState("");
  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() == "") return;
    onAddTodo(text);
    setText("");
    inputRef.current.focus();
  };
  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ເພິ່ມລາຍການໃໝ່..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          ref={inputRef}
        />
        <button type="submit">ເພິ່ມ</button>
      </form>
    </div>
  );
}

export default TodoForm;
