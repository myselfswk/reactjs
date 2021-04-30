import React, { useState } from 'react';

function HookArray() {

    const [items, setItems] = useState([]);

    const addItems = () => {
        setItems(
            [...items, {
                id: items.length + 1,
                value: Math.floor(Math.random() * 10)
            }])
    }

    return (
        <div>
            <button onClick={addItems}>Add Random Number b/w 1-10</button>
            <ul>
                {
                    items.map(item => (
                        <li key={item.id}>{item.id}) {item.value}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default HookArray
