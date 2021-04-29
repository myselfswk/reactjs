import React, { useEffect, useState } from 'react';

export default function HookCounter() {

    const companyName = useState("CodiNauts");
    const comName = companyName[0];
    const setComName = companyName[1];
    console.log(comName);

    const [name, setName] = useState('Waleed Khan');
    const [age, setAge] = useState(22);

    const [count, setCount] = useState(0);

    const stateHandler = () => {
        setComName("Khan's Solution");
    }

    const changeName = () => {
        setName("Huzaifa Khan");
        setAge(24);
    }

    const increamentCounter = () => {
        setCount(count + 1);
    }

    const desreamentCounter = () => {
        setCount(count - 1);
    }

    const increamentByTen = () => {
        for (let index = 0; index < 10; index++) {
            setCount(prevCount => prevCount + 1);
        }
    }

    useEffect(() => {
        console.log("Hi There From useEffect");
    }, [count]);
    return (
        <div>
            <h1>Company Name: {companyName}</h1>
            <button onClick={stateHandler}>Change Name Without Array Destructuring</button>

            <h1>Name: {name}</h1>
            <h1>Age: {age}</h1>
            <button onClick={changeName}>Change Name With Array Destructuring</button>

            <h1>Counter Value: {count}</h1>
            <button onClick={increamentCounter}>Counter++</button>
            <button onClick={desreamentCounter}>Counter--</button>
            <button onClick={increamentByTen}>Increament By 10</button>
        </div>
    )
}
