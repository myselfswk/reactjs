import React from 'react';
import './StyleSheet.css';

function StyleSheet(props) {
    let className = props.isValue ? 'headingDemo' : 'headingDemoOne';
    return (
        <div>
            <h1 className={`${className} headingDemoTwo`}>Hello From StyleSheet jsx Extention</h1>
        </div>
    )
}

export default StyleSheet;
