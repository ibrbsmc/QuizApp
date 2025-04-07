import React from 'react'
import './modal.css'

const Modal = ({score}) => {
  return (
    <div className='modal'>
        <div className='modal-title'>SKORUNUZ : {score}/10</div>
        <div onClick={()=>window.location = "/"} className="modal-btn">YENİDEN BAŞLA</div>
    </div>
  )
}

export default Modal