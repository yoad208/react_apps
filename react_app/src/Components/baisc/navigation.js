import React from 'react';

function Navigation(props) {

    const navigation = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '2.5rem'
    }

    return (

        <div className="navigation" style={navigation}>
            <div className="logo" style={{flex: 'start'}}>
                <img src="https://icon-library.com/images/todo-icon/todo-icon-5.jpg" alt="logo"/>
            </div>
            <ul style={navigation}>
                <li>Home</li>
                <li>new list</li>
                <li>Setting</li>
            </ul>
        </div>
    );
}

export default Navigation;