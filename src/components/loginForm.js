import React from 'react';
import './loginForm.css';

var loginForm = ()=>{
    function handleEnter(event) {
        if (event.key === 'Enter') {
          const form = event.target.form;
          const index = Array.prototype.indexOf.call(form, event.target);
          form.elements[index + 1].focus();
          event.preventDefault();
        }
        if (event.keyCode === 13) {
            const form = event.target.form;
            const index = Array.prototype.indexOf.call(form, event.target);
            form.elements[index + 1].focus();
            event.preventDefault();
          }
      }
    return(
        <div className='form'>
            <form action='/login' method='get'>
                <h1>ChatApp</h1>
                <label>User Name</label>
                <br/>
                <input type='text' ref={foc=>{foc.focus()}} onKeyPress={handleEnter} name='username' placeholder='Enter Your Name'/>
                <br/>
                <label>Room Id</label>
                <br/>
                <input type='password' onKeyDown={handleEnter} name='pwd' placeholder='Enter Room Password'/>
                <br/>
                <button type='submit'>Login</button>
            </form>
        </div>
    );
}

export default loginForm;