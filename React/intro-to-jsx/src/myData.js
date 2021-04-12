import React from 'react'

const isArrayEmpty = (props) => {
    if(props != null || props != undefined){
        console.log('Non-Empty Array')
        return false
    }
    console.log('Empty Array')
    return true
}

const MyData = (props) => {
    return (
        <div className={props.className} key={props.id}>
            <h1 className="heading">{props.title}</h1>
            <p> {props.description} </p>
        </div>
    )
}


export {MyData, isArrayEmpty};