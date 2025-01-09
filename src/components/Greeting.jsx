import React from "react";
import day from "./src/assets/day.svg";

function Greetings() {
    return (

        <div>
            <h1>
                greeting
                <img src={day} alt="day" />
            </h1>
        </div>
    );
}

export default Greetings