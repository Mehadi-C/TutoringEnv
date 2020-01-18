import React from 'react';
import logo from './logo.svg';
import './app.css';

function app(){
    return (
        <div className= "app">
           <header className= "app-header"> 
            <img src= {logo} className="app-logo" alt= "logo" />
            <p>
                Edit <code>src/app.js</code> and save to reload.
            </p>
            <a 
                className= "app-link"
                href= "https://react.js.org"
                target= "_blank"
                rel= "noopener noreferrer"
            >
             Learn React
            </a>
           </header>
        </div>
    );
}