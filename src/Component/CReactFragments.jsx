import React, { Component, Fragment } from 'react'

export default class CReactFragments extends Component {
    render() {
        return (
            //mostly fragment is not run on every browser
            <Fragment>
                <p>React Fragement</p>
                <p>By Class Component</p>
            </Fragment>
        )
    }
}
