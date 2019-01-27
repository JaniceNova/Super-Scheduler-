import React, { Component } from 'react';

import './UserInputFormLeft.css';

function UserInputFormLeft(props) {
        return (
            <div id="UserInputForm">
                <div className="leftHalf">

                    {props.children}
                </div>
               

            </div>
        );
    
}

export default UserInputFormLeft;