import React from 'react';

import '../appStyle.css';
import Style from '../appStyle.module.css';

function Inline() {

    const heading = {
        color: 'green',
        fontSize: '25px'
    }
    return (
        <div>
            <h1 style={heading}>Hello from Inline JS file</h1>
            <p style={{color: 'royalblue', fontSize: '45px'}}>Inline Basic</p>
            <p className={Style.success}>Success</p>
            <p className="error">Error</p>
        </div>
    )
}

export default Inline
