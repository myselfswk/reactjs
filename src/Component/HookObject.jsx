import React, { useState } from 'react';

function HookObject() {

    const [name, setName] = useState({
        firstName: '',
        lastName: ''
    });

    let fruit=['Apple', 'Orange'];
    console.log(...fruit);

    return (
        <div>
            <h1>First Name: {name.firstName}</h1>
            <h1>Last Name: {name.lastName}</h1>
            <form>
                <label>First Name: </label>
                <input type="text" value={name.firstName} onChange={e => {
                    setName({
                        ...name,
                        firstName: e.target.value
                    })
                }} />

                <label>Last Name: </label>
                <input type="text" value={name.lastName} onChange={e => {
                    setName({
                        ...name,
                        lastName: e.target.value
                    })
                }} />
                <div>
                    <h1>Name in JSON Format:-</h1>
                    <p>{JSON.stringify(name)}</p>
                </div>
            </form>
        </div>
    )
}

export default HookObject;
