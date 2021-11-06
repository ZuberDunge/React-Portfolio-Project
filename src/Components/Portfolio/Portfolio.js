import React from 'react';
import "./Portfolio.css"
import "./../../App.css"
import {
    port1, port2, port3, port4, port5, port6

} from "./../../images/images";
export default function Portfolio() {
    return (
        <>

            <div id="Portfolio" className="portfolio-section">
                <h1>My Portfolio</h1>
                <div className="portfolio-images">
                    <img src={port1} alt="portfolio" />
                    <img src={port2} alt="portfolio" />
                    <img src={port3} alt="portfolio" />
                </div>
                <div className="portfolio-images">
                    <img src={port4} alt="portfolio" />
                    <img src={port5} alt="portfolio" />
                    <img src={port6} alt="portfolio" />
                </div>


            </div>


        </>

    );
}
