import React from 'react';

function FFunctionClick() {

    function changeEvent() {
        console.log("Button is Clicked!");
    }
    // changeEvent = () => {
    //     console.log("Button is Clicked!");
    // }
    return (
        <div>
            {/* normal function call with button */}
            <button onClick={changeEvent}>Click Me By Functional Component</button>
        </div>
    )
}

export default FFunctionClick;
