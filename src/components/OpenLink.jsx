import React from "react";
import open from "../assets/open.svg"

export function OpenLink({link}) {
    return (
        <a href={link} target="_blank">
            <img src={open} alt="Open SVG" />
        </a>
    );
}

export default OpenLink;