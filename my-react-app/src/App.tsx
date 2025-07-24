import { Routes, Route, Link } from 'react-router-dom';

import Counter from './components/Counter';
import UserList from './components/UserList';
import TodoApp from './components/TodoApp';
import WeatherApp from './components/WeatherApp';
import ThemeApp from './components/ThemeApp';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <nav className="bg-blue-600 text-white p-4 flex gap-4">
        <Link className="hover:underline" to="/">Home</Link>
        <Link className="hover:underline" to="/counter">Counter</Link>
        <Link className="hover:underline" to="/users">Users</Link>
        <Link className="hover:underline" to="/todos">Todo App</Link>
        <Link className="hover:underline" to="/weather">Weather App</Link>
        <Link className="hover:underline" to="/theme">Theme App</Link>
      </nav>

      <div className="p-6 max-w-2xl mx-auto">
        <Routes>
          <Route path="/" element={
            <>
              <h3 className="text-xl font-bold mb-2">Hello, React + TypeScript + Vite 🚀</h3>
              <h2 className="text-lg">React Router Example</h2>
            </>}
          />
          <Route path="/counter" element={<Counter />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/todos" element={<TodoApp />} />
          <Route path="/weather" element={<WeatherApp />} />
          <Route path="/theme" element={<ThemeApp />} />
          <Route path="*" element={
            <h3 className="text-red-600 text-xl">Page not found</h3>}
          />
        </Routes>
      </div>
    </div>
  )
}

export default App;
