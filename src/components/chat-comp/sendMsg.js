import React from 'react';
import './sendMsg.css';
import {useState} from 'react';

const SendMsg = (props) =>{
    var arr = [];
    var [value, setValue] = useState(arr);
    function sendMessage(msg){
        arr.push(<p>{msg}</p>);
        setValue(arr)
        props.onSendMsg(value);
        var inputEl = document.getElementById('message');
        inputEl.value = '';
        inputEl.focus();
    }
    return(
        <div className='send'>
            <input type='text' id='message' onChange={e=>setValue(e.target.value)}
                 placeholder='Type Message Here'/>
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}

export default SendMsg;