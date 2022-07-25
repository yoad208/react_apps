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
                <img
                    src="https://o.remove.bg/downloads/8f0d7f33-ec8d-4a89-935a-cd908286a622/images-removebg-preview.png"
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