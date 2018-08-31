/** To display buttons for registering */
import React from 'react';
//import './RegisterComponent.css'
function RegisterComponent(props) {
    if (!props.token) {
        return (

            <div className = "navbar">
                <p onClick = { props.handleClickRegister }>Register</p>
                <p>or</p>
                <p onClick= { props.handleClickLogin }>Login</p>
            </div>
        )
    }
    else {
        return (
            <div className="navbar">
                <p onClick={ props.logOut }>Logout</p>
            </div>
        )
    }
    
}
export default RegisterComponent;