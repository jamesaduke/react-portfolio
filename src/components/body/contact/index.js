import React from "react";
import "./contact.css";
import Seperator from "../../../common/seperator";
import SocialContact from "../../../common/social-contact";

function Contact (){
    return <div className="contact">
        <Seperator />
        <label htmlFor="contact-title" className="section-title">Contact</label>
        <div className="contact-container">
            <div className="contact-left">
                <p>Get in touch with me through these platforms</p>
                <SocialContact />
            </div>

            <div className="download">
                <a download href={require('../../../assets/Resume.pdf').default}>
                    <i class="fi-rr-cloud-download download-icon"/>
                    Download my Resume
                </a>

            </div>
        </div>
    </div>;
}

export default Contact;
