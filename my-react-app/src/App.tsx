import {Routes, Route, Link} from 'react-router-dom';

import Counter from './components/Counter';
import UserList from './components/UserList';
import TodoApp from './components/TodoApp';

import './App.css'

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/counter">Counter</Link> |
        <Link to="/users">Users</Link> |
        <Link to="/todos">Todo App</Link>
      </nav>
      <Routes>
        <Route path="/" element={
          <>
            <h3>Hello, React + TypeScript + Vite 🚀</h3>
            <h2>React Router Example</h2>
          </>} 
          />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/todos" element={<TodoApp />} />
        <Route path="*" element={
          <h3>Page not found</h3>} 
        />
      </Routes>
    </div>

  )
}

export default App
