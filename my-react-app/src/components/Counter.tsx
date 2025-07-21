import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <p>Count: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
            <button onClick={() => setCounter(counter - 1)}>Decrement</button>
            <button onClick={() => setCounter(0)}>Reset</button>
        </div>
    )
}

export default Counter;