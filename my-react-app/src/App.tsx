import { Routes, Route, Link } from 'react-router-dom';
import Counter from './components/Counter';
import UserList from './components/UserList';
import TodoApp from './components/TodoApp';
import WeatherApp from './components/WeatherApp';
import ThemeApp from './components/ThemeApp';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <div className="flex gap-4">
          <Link className="hover:underline" to="/">{t("nav.home")}</Link>
          <Link className="hover:underline" to="/counter">{t("nav.counter")}</Link>
          <Link className="hover:underline" to="/users">{t("nav.users")}</Link>
          <Link className="hover:underline" to="/todos">{t("nav.todo")}</Link>
          <Link className="hover:underline" to="/weather">{t("nav.weather")}</Link>
          <Link className="hover:underline" to="/theme">{t("nav.theme")}</Link>
        </div>

        {/* Language selection dropdown */}
        <select
          onChange={(e) => changeLanguage(e.target.value)}
          defaultValue={i18n.language}
          className="text-black px-2 py-1 rounded"
        >
          <option value="en">English</option>
          <option value="de">Deutsch</option>
          {/* Add more languages here */}
        </select>
      </nav>

      <div className="p-6 max-w-2xl mx-auto">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h3 className="text-xl font-bold mb-2">
                  {t('helloReact')}
                </h3>
                <h2 className="text-lg">{t('routerTitle')}</h2>
              </>
            }
          />
          <Route path="/counter" element={<Counter />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/todos" element={<TodoApp />} />
          <Route path="/weather" element={<WeatherApp />} />
          <Route path="/theme" element={<ThemeApp />} />
          <Route
            path="*"
            element={
              <h3 className="text-red-600 text-xl">{t('pageNotFound')}</h3>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
