import React from "react";
import './WelcomeMessage.css';

function WelcomeMessage() {
    return(
        <div className="WelcomeMessage">
            <img src="https://cdn-icons-png.flaticon.com/512/2833/2833509.png" alt="TaskIt" className="logo" />
            <h1 className="text-center">¡Bienvenido a TaskIt!</h1>
        </div>
    );
}

export { WelcomeMessage };