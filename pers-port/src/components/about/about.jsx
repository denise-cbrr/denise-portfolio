import React from "react";
import "./about.css";
import Modal from "../Modal/Modal";

function About() {
    return (
        <div id="about" className="about">
            <div className="picture">
                <img src="headshot.png" alt="headshot" />
            </div>
            <div className="info">
                <div className="main">
                    <h1 className="name">Denise Pawleen Cabrera</h1>
                    <h1 className="pronouns">(she/her)</h1>
                </div>
                <div className="tags">
                    <p className='tags'>Wai'anae, HI</p>
                    <p className='tags'>Pauli Murray '28</p>
                </div>
                <div className="bio">
                    <p>I am a sophomore at Yale College studying Computer Science. I'm an active member of Kasama: The Filipinx Club at Yale and the Pitches&Tones Acapella Group.
                    Some of my hobbies include photography, videography, and music!
                    </p>
                </div>
                <div className="buttons">
                    <Modal></Modal>
                </div>
            </div>
      </div>
    );
}

export default About