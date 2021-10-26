import React from 'react'

const Box = (props) => {
    return (
        <div className='container text-center'>

            <h3>name : {props.name}</h3>
            <h3>value : {props.value}</h3>
            <button type="button" class="btn btn-primary btn-dark mb-5 btn-lg" data-toggle="modal" data-target="#exampleModalCenter">
            Launch demo modal
            </button>
                
        </div>
    )
}

export default Box
