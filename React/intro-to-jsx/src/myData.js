import React from 'react'

// you can change name classes to any other name you want
import classes from './myData.module.css'

export const isArrayEmpty = (props) => {
    if(props != null || props != undefined){
        console.log('Non-Empty Array')
        return false
    }
    console.log('Empty Array')
    return true
}

export const MyData = (props) => {
    return (
        <div className={classes.article} key={props.id}>
            <h1 className="heading">{props.title}</h1>
            <p> {props.description} </p>
        </div>
    )
}


// export {MyData, isArrayEmpty};