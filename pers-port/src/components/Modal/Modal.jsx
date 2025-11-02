import React, { useState } from "react";
import "./Modal.css";

function Modal() {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal)
    }
    return (
        <>
        <button className="open"
        onClick={toggleModal}>
            Contact Me
        </button>

        {modal && (
            <div className="modal">
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-box">
                    <div className="headline">
                        <h1>Let's talk!</h1>
                        <button className="close-btn" onClick={toggleModal}>x</button>
                    </div>
                    <div className="contact-line">
                        <h2>Feel free to reach out to talk about projects, collaboration, opportunities, and life!</h2>
                    </div>
                    <div className="contact-line">
                        <p>Email:</p>
                        <a href="mailto:denisepawleen.cabrera@yale.edu">denisepawleen.cabrera@yale.edu</a>
                    </div>
                    <div className="contact-line">
                        <p>LinkedIn:</p>
                        <a href="www.linkedin.com/in/denisepawleencabrera">@DenisePawleenCabrera</a>
                    </div>
                    <div className="contact-line">
                        <p>GitHub:</p>
                        <a href="https://github.com/denise-cbrr">https://github.com/denise-cbrr</a>
                    </div>
                </div>
            </div>
        )}
        </>
    );
}

export default Modal;