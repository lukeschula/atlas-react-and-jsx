import React from "react";
import day from "../assets/day.svg";
import evening from "../assets/evening.svg";
import night from "../assets/night.svg";

const Greeting = () => {
    const currentHour = new Date().getHours();

    let greetingMess = "";
    let image = null;

    //Logic for greeting based on time of day
    if (currentHour >= 6 && currentHour <= 11) {
        greetingMess = "Good Morning!";
        image = day;
    } else if (currentHour >= 12 && currentHour <= 16) {
        greetingMess = "Good Afternoon!";
        image = day;
    } else if (currentHour >= 17 && currentHour <= 20) {
        greetingMess = "Good Evening!";
        image = evening;
    } else {
        greetingMess = "Good Night!";
        image = night;
    }

    return (
            <h1 className="greetings">
                <img src={image} alt="Greeting Image" />
                {greetingMess}
            </h1>
    );
};

export default Greeting;