import React from 'react';
import "./Intro.css"
import "./../../App.css"
import {

    leftSide

} from "./../../images/images";
export default function Intro() {
    return (
        <>
            <div className="main-intro" translate="no">
                <div className="intro-flex">
                    <div className="intro-div">
                        <div className="name-intro">
                            Hi, I am Maeve Wiley
                        </div>

                        <div className="intro-tagline">
                            A Front-end Developer
                        </div>

                        <p>Get ready to turn ideas into reality</p>
                        <div className="buttonshire">   <span className="hire-me-btn"> <a href="#Contact" >Hire Me</a></span>
                            <span className="resume-btn"><a href="#Resume" >Get Resume</a></span> </div>
                    </div>
                    <img className="hero-img" src={leftSide} alt="Header" />
                </div>
                <div className="bottom-shape"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#09bcab" fill-opacity="1" d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,170.7C672,160,768,96,864,96C960,96,1056,160,1152,165.3C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg></div>
            </div>




        </>

    );
}
