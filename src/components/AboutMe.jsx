import React from "react";
import pic from "../assets/MyImg.jpeg"

export function AboutMe() {
   return (
    <div className="about-me">
        <img src={pic} alt="About Me Picture" />
        <p>
        My name is Luke Schula, I am a student at Atlas School, specializing in Full Stack Web Development. I have entered my final trimester of the program and am looking forward to graduating in April. I have enjoyed working with many languages and technologies during my time here at Atlas. Python was the first language I enjoyed working with, and during that process, I began adventuring into JavaScript. As I keep working on projects with JavaScript I have increasingly grown fond of the language. It has such a rich ecosystem of libraries and open-source projects to help navigate the development process for any developer skill level. Working with react.js and node.js has only opened my eyes more to the variety of libraries and tools JavaScript offers. After I graduate I look to find a front-end developer job to continue my journey, I hope to get on with an established company. However, I am entertaining the option of opening an agency with other developers to help find work and build my resume. When I am not glued to the screen coding I am watching sports or doing something active myself. I love to move around and spend time outdoors. I am also an assistant coach for the local youth rowing team here in Tulsa as well.
        </p>
    </div>

   );
}

export default AboutMe;