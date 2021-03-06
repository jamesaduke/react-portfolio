import React from "react";
import './about.css';
import SocialContact from "../../../common/social-contact";

function About (){
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hello there 👋, I am
                    <br/><span className="info-name">James Aduke</span>
                    <br/>I love experimenting with software
                </div>
                <div className="about-photo">
                    <img src={require('../../../assets/coding.png').default} className="illustration" alt=""/>
                </div>
            </div>
            <div className="about-bottom">

            </div>
            <SocialContact />
        </div>
    );

}

export default About;
