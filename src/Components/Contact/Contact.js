import React from "react";
import "./Contact.css";


import "./Contact.css";
import { Component } from "react";


class Contact extends Component {
    render() {
        return (
            <>
                <h1 id="Contact" style={{ textAlign: "center", color: "#105652" }}>Contact</h1>
                <div className="contact-form">




                    <div className="contact-div1">
                        <h2>Let's connect</h2>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae ab illo inventore veritatis et quasi architecto beatae vitae
                            dicta…
                        </p>
                        <div className="contacts-icons">
                            {" "}
                            <i className="fas contacts-icon fa-envelope"></i>{" "}
                            example@gmail.com
                        </div>

                        <div className="contacts-icons">
                            {" "}
                            <i className="fas contacts-icon fa-phone-alt"></i> +91 12 3456 7890
                        </div>

                        <div className="contacts-icons">
                            {" "}
                            <i className="fas contacts-icon fa-map-marker-alt"></i> 1234 Street Ln Virginia Beach, VA 12345
                        </div>
                    </div>

                    <form action="#" name="contact" data-netlify="true">
                        <h2>Send me a message</h2>
                        <p>
                            <label>
                                First & Last Name * <input required type="text" name="name" />
                            </label>
                        </p>
                        <p>
                            <label>
                                Phone number *<input required type="number" name="email" />
                            </label>
                        </p>
                        <p>
                            <label>
                                Email *<input required type="email" name="email" />
                            </label>
                        </p>

                        <p>
                            <label>
                                Message *: <textarea required name="message"></textarea>
                            </label>
                        </p>
                        <p>
                            <button className="btn-form" type="submit">
                                Send Message
                            </button>
                        </p>
                    </form>
                </div>
                <div className="footer-area">

                    © 2021 Zuber Dunge All rights reserved.
                </div>
            </>
        );
    }
}

export default Contact;
