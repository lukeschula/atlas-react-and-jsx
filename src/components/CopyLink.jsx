import React from "react";
import copy from "../assets/copy.svg";


export function CopyLink({link}) {
    return (
        <img className="copy" onClick={() => {navigator.clipboard.writeText(link)}} src={copy} />
    );
}

export default CopyLink;