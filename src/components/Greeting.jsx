import React from "react";
import day from "./src/assets/day.svg";
import evening from "./src/assets/evening.svg";
import night from "./src/assets/night.svg";

function Greetings() {
    const currentHour = new Date().getHours();

    let greeting = "";
    let image = null;

    //Logic for greeting based on time of day
    if (currentHour >= 6 && currentHour <= 11) {
        greeting = "Good Morning!";
        image = day;
    } else if (currentHour >= 12 && currentHour <= 16) {
        greeting = "Good Afternoon!";
        image = day;
    } else if (currentHour >= 17 && currentHour <= 20) {
        greeting = "Good Evening!";
        image = evening;
    } else {
        greeting = "Good Night!";
        image = night;
    }

    return (
        <div>
            <h1>
                greeting
                <img className="conditional-greeeting" src={image} alt={"greeting"} />
            </h1>
        </div>
    );
}

export default Greetings;