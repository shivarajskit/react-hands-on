import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <p>Count: {counter}</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded" onClick={() => setCounter(counter + 1)}>Increment</button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded" onClick={() => setCounter(counter - 1)}>Decrement</button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded" onClick={() => setCounter(0)}>Reset</button>
        </div>
    )
}

export default Counter;