import React from 'react';
import "./Resume.css"
import "./../../App.css"
import { middleSide } from "./../../images/images";
export default function Resume() {
    return (
        <>

            <div className="resume-section" id="Resume">

                <h1>Resume</h1>
                <div className="resume-section-flex">
                    <div className="vertical-flex">
                        <div className="resume-flex">
                            <div> <h2>My Work</h2>{" "}
                                <hr />
                                <div className="flex-education">

                                    <div>
                                        <div className="work-flex">
                                            <div className="flex-edu ">  <span className="college-name">Front End Developer - FULLTIME </span>
                                                <span className="passing-year">2013-2018</span>
                                            </div>
                                            <h4>Facebook </h4>
                                        </div>
                                        <div className="margin2top work-flex2">
                                            <div className="flex-edu ">  <span className="college-name">Front End Developer - FULLTIME </span>
                                                <span className="passing-year">2018-2021</span>
                                            </div>
                                            <h4>Zomato </h4>
                                        </div>
                                    </div>

                                </div></div>

                        </div>
                        <div className="resume-flex">
                            <div> <h2>Education</h2>{" "}
                                <hr />
                                <div className="flex-education">

                                    <div className="work-flex" >
                                        <div className="flex-edu ">  <span className="college-name">Pune University </span>
                                            <span className="passing-year">2009-2012</span>
                                        </div>
                                        <h4>Diploma in Computer Engineering</h4>
                                        <span>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="resume-image">
                        <img className="resume-img" src={middleSide} alt="resume"></img>
                        <div className="social">

                            <a className="link" target="_blank"
                                href="https://github.com/ZuberDunge"><i className="fab social-icons fa-github "></i></a>

                            <a className="link" target="_blank" href="https://www.instagram.com/zuberdunge/"><i
                                className="fab social-icons fa-instagram "></i></a>

                            <a className="link" target="_blank"
                                href="https://www.twitter.com/ZuberDunge/"><i className="fab social-icons fa-twitter "></i></a>

                            <a className="link" target="_blank" href="mailto:iamZuberDunge@gmail.com"><i
                                className="fas social-icons fa-envelope "></i></a>
                            <a className="link" target="_blank" href="#"><i
                                className="fab social-icons fa-linkedin-in"></i></a>
                        </div>


                    </div >
                </div >
            </div >



        </>

    );
}
