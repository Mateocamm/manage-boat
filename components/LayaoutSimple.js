import React from 'react'
import Header from './Header'


function LayaoutSimple(props) {
    return (
        <div>
            <Header />
            {props.children}
        </div>
    )
}

export default LayaoutSimple
