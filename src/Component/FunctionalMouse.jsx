import React, { useEffect, useState } from 'react';

function FunctionalMouse() {

    const [X, setX] = useState(0);
    const [Y, setY] = useState(0);

    const logMousePosition = e => {
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log("In Use Effect");
        window.addEventListener("mousemove", logMousePosition);
    }, []);
    return (
        <div>
            <p>X - {X} Y - {Y}</p>
        </div>
    )
}

export default FunctionalMouse
