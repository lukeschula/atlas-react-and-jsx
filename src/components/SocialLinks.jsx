import React from "react";
import linkedin from "../assets/linkedin.svg"
import github from "../assets/github.svg"


const SocialLinks = () => {
    return (
        <div className="social-links">
            <a href="https://www.linkedin.com/in/luke-schula-480548169/">
                <img src={linkedin} alt="LinkedinIcon" />
            </a>
            <a href="https://github.com/lukeschula">
                <img src={github} alt="GithubIcon" />
            </a>
        </div>
    );
}

export default SocialLinks;
