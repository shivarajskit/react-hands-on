import { useEffect, useReducer, useState } from "react";
import { useTranslation } from "react-i18next";

function CounterReducer() {
    function reducer(state: number, action: { type: string }): number {
        switch (action.type) {
            case 'increment':
                return state + 1;
            case 'decrement':
                return state - 1;
            case 'reset':
                return 0;
            default:
                throw new Error();
        }
    }
    const [count, dispatch] = useReducer(reducer, 0);
    const { t } = useTranslation();
    useEffect(() => {
        document.title = 'You clicked ' + count + ' times';
        console.log('useEffect: Count changed to', count);
    }, [count]); // This effect runs whenever count changes, can be used for side effects

    return (
        <div>
            <p>{t('counter.count', {count: count})}</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded" onClick={() => dispatch({type: 'increment'})}>{t('counter.increment')}</button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded" onClick={() => dispatch({type: 'decrement'})}>{t('counter.decrement')}</button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded" onClick={() => dispatch({type: 'reset'})}>{t('counter.reset')}</button>
        </div>
    )
}

export default CounterReducer;