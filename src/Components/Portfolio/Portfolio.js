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
                    <div className="portfolio-item">
                        <img src={port1} alt="portfolio" />
                        <div className="project-details">
                            <h2>Project Name</h2>
                            <h4>Project Description</h4>
                            <button className="demo-btn">Live Demo</button>
                            <button className="repo-btn">Repo Link</button>
                        </div>
                    </div>
                    <div className="portfolio-item">
                        <img src={port2} alt="portfolio" />
                        <div className="project-details">
                            <h2>Project Name</h2>
                            <h4>Project Description</h4>
                            <button className="demo-btn">Live Demo</button>
                            <button className="repo-btn">Repo Link</button>
                        </div>
                    </div>
                    <div className="portfolio-item">
                        <img src={port3} alt="portfolio" />
                        <div className="project-details">
                            <h2>Project Name</h2>
                            <h4>Project Description</h4>
                            <button className="demo-btn">Live Demo</button>
                            <button className="repo-btn">Repo Link</button>
                        </div>
                    </div>

                </div>
                <div className="portfolio-images">
                    <div className="portfolio-item">
                        <img src={port4} alt="portfolio" />
                        <div className="project-details">
                            <h2>Project Name</h2>
                            <h4>Project Description</h4>
                            <button className="demo-btn">Live Demo</button>
                            <button className="repo-btn">Repo Link</button>
                        </div>
                    </div>
                    <div className="portfolio-item">
                        <img src={port5} alt="portfolio" />
                        <div className="project-details">
                            <h2>Project Name</h2>
                            <h4>Project Description</h4>
                            <button className="demo-btn">Live Demo</button>
                            <button className="repo-btn">Repo Link</button>
                        </div>
                    </div>
                    <div className="portfolio-item">
                        <img src={port6} alt="portfolio" />
                        <div className="project-details">
                            <h2>Project Name</h2>
                            <h4>Project Description</h4>
                            <button className="demo-btn">Live Demo</button>
                            <button className="repo-btn">Repo Link</button>
                        </div>
                    </div>

                </div>


            </div>


        </>

    );
}
