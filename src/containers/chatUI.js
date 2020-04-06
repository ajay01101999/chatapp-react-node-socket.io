import React,{Component} from 'react';
import Header from '../components/chat-comp/header';
import './chatUI.css';
import Menu from '../components/chat-comp/menuBar';
import ChatArea from '../components/chat-comp/ChatArea';
import SendMsg from '../components/chat-comp/sendMsg';
import io from 'socket.io-client';
import qs from 'querystring';

class ChatUI extends Component{
    constructor(){
        super();
        this.socket = io('localhost:1234');
        this.array = [];
        this.users = null;
        this.state = {
            message: this.array,
            users: this.users
        }
    }
    UNSAFE_componentWillMount(){
        this.query = qs.parse(this.props.history.location.search.replace('?',''));
        var userName=this.query.username, roomId=this.query.pwd;
        console.log(userName,roomId);
        this.socket.on('message', (message, currentName)=>{
            this.users=currentName;
            this.array.push(message);
            this.setState({message: this.array,users: this.users});
        })
        this.socket.emit('joinRoom', userName, roomId);
    }
    sendMsg=(message)=>{
        this.socket.emit('chatMessage', message);
    }
    render(){
        return(
            <div className='chat'>
                <Header/>
                <Menu query = {this.query}/>
                <ChatArea message={this.state.message} currentName={this.state.users} name={this.query.username}/>
                <SendMsg onSendMsg={this.sendMsg}/>
            </div>
        );
    }
}

export default ChatUI;