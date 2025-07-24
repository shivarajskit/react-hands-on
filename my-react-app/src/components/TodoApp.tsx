import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });
  const [newTodo, setNewTodo] = useState('');

  const { t } = useTranslation();

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!newTodo.trim()) return;
    setTodos([
      ...todos,
      { id: Date.now(), text: newTodo.trim(), completed: false }
    ]);
    setNewTodo('');
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h2>{t('todo.title')}</h2>
      <input
        type="text"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
        placeholder={t('todo.placeholder')}
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500 w-full"
      />
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded" onClick={addTodo}>{t('todo.add')}</button>
    {todos.length === 0 && <p className="text-gray-500">{t('todo.noTodo')}</p>}
    { todos.length > 0 && (
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded" onClick={() => toggleTodo(todo.id)}>{t('todo.toggle')}</button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded" onClick={() => deleteTodo(todo.id)}>{t('todo.delete')}</button>
          </li>
        ))}
      </ul>
    )}
    </div>
  );
}

export default TodoApp;