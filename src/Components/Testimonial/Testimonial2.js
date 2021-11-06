import React from 'react';
import "./Testimonial.css"
import "./../../App.css"
import Spong from "./../../images/spong.png"
import {
    pFImage

} from "./../../images/images";
export default function Testimonial2() {
    return (
        <>

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
                    <div className="avtar"><img src={Spong} alt="ppl"></img></div>
                    < div className="ppl-name">
                        Alberto Donko
                    </div>
                    <span className="ppl-comp">SaveSpace Inc.</span>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    </p>
                </div>

                <div className="card">
                    <div className="avtar"> <img src={Spong} alt="ppl"></img></div>
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
