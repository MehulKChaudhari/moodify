import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Logo1 from './moodify_black.png'
import './LandingPage.css'

export default function LandingPage() {
    return(
        <div className="container ">
                <div className="left">
                    <img src={Logo1} alt="logo"/>
                </div>
                <div className="right">
                    <h4>Moodify is new generation music player which is intelligent enough to recognize your mood then make playlist.</h4>
                    <div className="button-div">
                        <button className="btn btn-primary primary-button"><a href="#">About US</a> </button>
                        <button className="btn btn-outline-primary outline-button"><a href="#">Get Started!</a></button>
                    </div>
                </div>
        </div>   
    );
}