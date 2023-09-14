import React from 'react'
import '../css/modal.css'

function Modal({ closeModal }) {
    return (
        <div className='modalBackground'>
            <div className="modalContainer">
                <button className='closeBtn' onClick={() => closeModal(false)}> x </button>
                <div className="body">
                    <img className='modalImg' src={'kodego_certificate.png'} />
                </div>
            </div>
        </div>
    )
}

export default Modal