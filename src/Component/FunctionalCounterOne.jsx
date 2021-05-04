import React, { useEffect, useState } from 'react';

function FunctionalCounterOne() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log("Use Effect Testing.....");
        document.title = `Clicked ${count} Times`;
    }, [count]);

    const changeCounter = () => {
        setCount(
            count + 1
        )
    }

    const changeName = (e) => {
        setName(
            e.target.value
        )
    }

    return (
        <div>
            <input value={name} onChange={(e) => changeName(e)} />
            <button onClick={() => changeCounter()}>Counter Update {count}</button>
        </div>
    )
}

export default FunctionalCounterOne
