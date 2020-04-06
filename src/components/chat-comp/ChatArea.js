import React from 'react';
import './ChatArea.css';
import Message from './message';
import moment from 'moment';

const ChatArea = (props) =>{
    // var [message, setMessage] = useState('');
    // console.log(message);
    // useEffect(()=>{
    //     setMessage(props.message);
    // },[props]);
    // console.log(message);
    return(
        <div className='chatArea'> 
            {props.message.map((message, i)=>{
                return <Message message={message} currentName={props.currentName} time={moment().format('MMMM Do YYYY, h:mm:ss a')} name={props.name} key={i}/>
            })}
        </div>
    );
}

export default ChatArea;