import React from 'react';
import './message.css';

const Message = (props) =>{
    console.log(props.currentName, props.name)
    return(
        <div className='msg'>
            <p>{props.currentName.toUpperCase()+','+' '+props.time}</p>
            <span className='text'>{props.message}</span>
        </div>
    );
}

export default Message;