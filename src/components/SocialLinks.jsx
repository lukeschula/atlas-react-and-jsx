import React from "react";


function SocialLinks() {
    return (

        <div className="social-links">
            <a href="https://www.linkedin.com/in/luke-schula-480548169/">
                <Image src="../assets/linkedin.svg" className="LinkedinIcon" />
            </a>
            <a href="https://github.com/lukeschula">
                <Image src="../assets/github.svg" className="GithubIcon" />
            </a>
        </div>
    );
}

export default SocialLinks
