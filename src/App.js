import React,{Component} from 'react';
import loginForm from './components/loginForm';
import {Route} from 'react-router-dom';
import ChatUI from './containers/chatUI';

class App extends Component{
  render(){
    console.log('app');
    return(
      <div>
          <Route path='/' exact component={loginForm}/>
          <Route path='/login' exact component={ChatUI}/>              
      </div>
    );
  }
}

export default App;