/* 'rsc' + TAB key - quick component!
* In practice, component is just a function,
* which return a jsx.
* The component must be named the same as the file!!!
* Always first letter with CAPS. */

import React, {useState} from 'react';

const FunctionCounter = () => {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)

    }

    function decrement() {
        setCount(count - 1)
    }

    return (
        <div>
            <h2>Function Component: </h2>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

/* Не забываем про экспорт компонента!!!*/
export default FunctionCounter;
/* WebStorm сам импорт компонента не подхватывает и его не видит, не забыть экспортировать вручную. */