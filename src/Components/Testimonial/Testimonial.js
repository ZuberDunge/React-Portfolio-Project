import React, { Component } from 'react';
import "./Testimonial.css"
import "./../../App.css"
import Testimonial2 from './Testimonial2';
import Spong from "./../../images/Male Japanese.png"
import Spong0 from "./../../images/Paul.png"
import Spong1 from "./../../images/Asian Female.png"

class Testimonial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,

        }
    }

    handleClick = () => {
        this.setState({ isClicked: !this.state.isClicked })
    }

    render() {
        return (
            <>
                <h1 id="Testimonial" className="test-head">What People say about me</h1>

                <div className="Testimonial-section">

                    <div className="people-card">

                        <div className="card">
                            <div className="avtar"><img src={Spong} alt="ppl"></img></div>
                            < div className="ppl-name">
                                Elizabeth Martin
                            </div>
                            <span className="ppl-comp">SaveSpace Inc.</span>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            </p>
                        </div>

                        <div className="card">
                            <div className="avtar"><img src={Spong0} alt="ppl"></img></div>
                            < div className="ppl-name">
                                Alberto Donko
                            </div>
                            <span className="ppl-comp">SaveSpace Inc.</span>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            </p>
                        </div>

                        <div className="card">
                            <div className="avtar"> <img src={Spong1} alt="ppl"></img></div>
                            < div className="ppl-name">
                                Alexander Parkinson
                            </div>
                            <span className="ppl-comp">SaveSpace Inc.</span>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            </p>
                        </div>

                    </div>
                    <div className="people-card">
                        {this.state.isClicked ?
                            <Testimonial2 /> :
                            null
                        }</div>
                    <div className="view-more-test" onClick={this.handleClick}>
                        {this.state.isClicked ? "Show less" : "View more testimonials"}
                        <i className={this.state.isClicked ? "fas fa-arrow-circle-left" : "fas fa-arrow-circle-right"}></i>
                    </div>
                </div>


            </>

        );
    }
}


export default Testimonial