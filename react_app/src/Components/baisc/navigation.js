import React from 'react';
import logo from '../../images/logo.png'
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
                <img
                    src={logo}
                    alt="logo"/>
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