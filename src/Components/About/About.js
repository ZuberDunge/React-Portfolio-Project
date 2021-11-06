import React from "react";
import "./About.css";
import "./../../App.css";
import {
    HtmlImg,
    CssImg,
    GitImg,
    HostingImg,
    GooglingImg,
    ReactImg,
    JSImg,
    rightSide,
    BootstrapImg,
    MySkills,
    Typing,
    HeaderImage,
    Netlify,
} from "./../../images/images";
export default function About() {
    return (
        <>
            <div id="About" className="about-section" >

                <img className="about-image" src={rightSide} alt="about" />


                <div className="flex-grid">
                    <div className="skills-home">
                        <h2 className="about-heading" id="About">About Me</h2>
                        <p>
                            I'm a web designer & front-end developer with professional
                            training. I'm interested in all kinds of visual communication, but
                            my major focus is on designing web, mobile & tablet interfaces.I
                            also have skills in other fields like branding, icon design or web
                            development.
                        </p>
                        <p>
                            I enjoy turning complex problems into simple, beautiful and
                            intuitive designs.When I'm not pushing pixels, you'll find me
                            cooking, gardening or working out in the park.
                        </p>
                        <p>
                            <b>I'm Good at Graphics Designing too :) </b>
                        </p>
                    </div>
                    <div className="skills-section">
                        <p>Languages / Library / Technology</p>
                        <div className="grid-skill">
                            <div className="grid-skill-img html-img">
                                <img src={HtmlImg} alt="HTML LOGO" />

                            </div>
                            <div className="grid-skill-img css-img">
                                <img src={CssImg} alt="CSS LOGO" />

                            </div>
                            <div className="grid-skill-img js-img">
                                <img src={JSImg} alt="JS LOGO" />

                            </div>
                            <div className="grid-skill-img node-img">
                                <img src={Netlify} alt="NodeJS LOGO" />

                            </div>
                            <div className="grid-skill-img react-img">
                                <img src={ReactImg} alt="ReactJS LOGO" />

                            </div>
                            <div className="grid-skill-img git-img">
                                <img src={GitImg} alt="GIT LOGO" />

                            </div>

                            <div className="grid-skill-img goog-img">
                                <img src={BootstrapImg} alt="Bootstrap LOGO" />

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
