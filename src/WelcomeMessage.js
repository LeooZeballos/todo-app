import React from "react";
import './WelcomeMessage.css';

function WelcomeMessage(props){
    return(
        <div className="WelcomeMessage">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    );
}

export { WelcomeMessage };