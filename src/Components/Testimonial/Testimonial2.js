import React from 'react';
import "./Testimonial.css"
import "./../../App.css"
import Spong4 from "./../../images/Myanmar Female.png"
import Spong3 from "./../../images/African American Female.png"
import Spong2 from "./../../images/Asian Male.png"

export default function Testimonial2() {
    return (
        <>

            <div className="people-card">

                <div className="card">
                    <div className="avtar"><img src={Spong2} alt="ppl"></img></div>
                    < div className="ppl-name">
                        Elizabeth Martin
                    </div>
                    <span className="ppl-comp">SaveSpace Inc.</span>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    </p>
                </div>

                <div className="card">
                    <div className="avtar"><img src={Spong3} alt="ppl"></img></div>
                    < div className="ppl-name">
                        Alberto Donko
                    </div>
                    <span className="ppl-comp">SaveSpace Inc.</span>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    </p>
                </div>

                <div className="card">
                    <div className="avtar"> <img src={Spong4} alt="ppl"></img></div>
                    < div className="ppl-name">
                        Alexander Parkinson
                    </div>
                    <span className="ppl-comp">SaveSpace Inc.</span>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    </p>
                </div>


            </div>



        </>

    );
}
