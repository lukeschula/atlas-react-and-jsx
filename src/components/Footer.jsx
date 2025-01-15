import React from "react";
import links from "/src/assets/links.json";

const Footer = () => {
    const presentYear = new Date().getFullYear();

    return (
        <footer>
            <ul>
                {links.map((item, index) => (
                    <li key={index}>
                        <a href={item.link} target="_blank">
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <p>© {presentYear} Atlas School</p>
        </footer>
    );
}

export default Footer;