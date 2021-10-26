import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const Box = (props) => {

    const [modalState,setModalState] = useState(false);

    

    return (
        <div className='container text-center'>

            <h3>name : {props.name}</h3>
            <h3>value : {props.value}</h3>
            <button type="button" class="btn btn-primary btn-dark mb-5 btn-lg" data-target="#exampleModalCenter" onClick={()=>{setModalState(true)}}>
            Launch demo modal
            </button>
            
            <Modal show={modalState}  centered  aria-labelledby="contained-modal-title-vcenter"  onHide={()=>{setModalState(false)}}>
            <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.id}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.body}</Modal.Body>
      <Modal.Footer>
          <button className="btn btn-sm btn-danger" onClick={()=>{setModalState(false)}} > close </button>
      </Modal.Footer>
    </Modal>
                
        </div>
    )
}

export default Box
