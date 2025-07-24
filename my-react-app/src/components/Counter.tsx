import { useState } from "react";
import { useTranslation } from "react-i18next";

function Counter() {
    const [counter, setCounter] = useState(0);
    const { t } = useTranslation();

    return (
        <div>
            <p>{t('counter.count', {count: counter})}</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded" onClick={() => setCounter(counter + 1)}>{t('counter.increment')}</button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded" onClick={() => setCounter(counter - 1)}>{t('counter.decrement')}</button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded" onClick={() => setCounter(0)}>{t('counter.reset')}</button>
        </div>
    )
}

export default Counter;