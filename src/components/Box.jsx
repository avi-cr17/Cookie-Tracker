import React from 'react'

const Box = (props) => {
    return (
        <div className='container text-center'>

            <h3>name : {props.name}</h3>
            <h3>name : {props.value}</h3>
        </div>
    )
}

export default Box
