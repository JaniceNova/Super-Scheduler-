import React from 'react';

import './SignInRegisterWrapper.css';

function SignInRegisterWrapper(props) {
 
    return (
      <div id="contentBox">
 {props.children}
      
      </div>
    );
 
}

export default SignInRegisterWrapper;


