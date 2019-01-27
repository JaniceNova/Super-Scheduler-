import React, { Component } from 'react';

import './UserInputFormRight.css';

function UserInputFormRight(props) {
    return (
        <div>
            <div className="rightHalf">

                {props.children}
            </div>


        </div>
    );

}

export default UserInputFormRight;