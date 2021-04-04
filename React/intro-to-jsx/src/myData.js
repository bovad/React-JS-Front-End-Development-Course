import React from 'react'

const MyData = (props) => {
    return (
        <div className={props.className} key={props.id}>
            <h1 className="heading">{props.title}</h1>
            <p> {props.description} </p>
        </div>
    )
}
export default MyData;