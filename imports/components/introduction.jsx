import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom'
import './components.css'

export default class Introduction extends React.Component {
    constructor(props) {
        super(props);
        this.linkedin_button = this.linkedin_button.bind(this);
        this.github_button = this.github_button.bind(this);
    }
    
    linkedin_button() {
          window.open("https://www.linkedin.com/in/danielle-howard-tech/");
        };

    github_button() {
            window.open("https://github.com/edanielleh");
          };
          
    render() {
        console.log(this.linkedin_button)
        return (
        <div className = 'intro-body'>
            <div className = 'intro-image'>
                <h1 className = 'intro-h1'>Hello, I am <br/> Danielle Howard</h1>
                <div className = 'intro-btn-row'>
                    <button onClick={ this.linkedin_button } className = 'intro-linkedin'>LinkedIn</button>
                    <button onClick={ this.github_button } className = 'intro-github'>GitHub</button>
                </div>
            </div>
        </div>
        )}
} 
