import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface WeatherData {
  name: string;
  main: { temp: number; humidity: number };
  weather: { description: string }[];
}

function WeatherApp() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { t } = useTranslation();

  const fetchWeather = async () => {
    if (!city.trim()) return;
    setLoading(true);
    setError('');
    try {
      const apiKey = 'cf90aac9f693701ea8f9a7a954fd7958'; // Replace with your OpenWeatherMap API key
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      if (!response.ok) throw new Error('City not found');
      const data = await response.json();
      setWeather(data);
    } catch (err: any) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-center">{t('weather.title')}</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder={t('weather.cityPlaceholder')}
          className="border p-2 flex-grow rounded"
        />
        <button
          onClick={fetchWeather}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {t('weather.getWeather')}
        </button>
      </div>
      {loading && <p className="text-center">{t('weather.loading')}</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {weather && (
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">
            {t('weather.weatherIn')} {weather.name}
          </h3>
          <p>🌡️ {t('weather.temperature', {temp: weather.main.temp})}</p>
          <p>💧 {t('weather.humidity', {humidity: weather.main.humidity})}</p>
          <p>☁️ {t('weather.condition', {condition: weather.weather[0].description})}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
