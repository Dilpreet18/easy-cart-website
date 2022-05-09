import React from 'react';
import '../Popup/Popup.css';

const Popup = (props) => {
  return (
    <div className='popup-box'>
        CONGRATS!!
        <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  )
}

export default Popup