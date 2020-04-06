import React from 'react';
import './menuBar.css';

const Menu = (props) =>{
    console.log(props);
    return(
        <div className='menu'>
            <h3 className='head1'>Room Name</h3>
            <span className='child1'>{props.query.pwd}</span>
            <h3 className='head2'>Users</h3>
            <span className='child2'>{props.query.username}</span>
        </div>
    );
}

export default Menu;