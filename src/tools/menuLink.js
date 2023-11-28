import React, { useState } from 'react';
import { Link, Routes, Route, useLocation } from "react-router-dom";

function openMenu() {
    document.getElementById("navmenu").classList.toggle("show");
}

function MenuLink(props) {

    const location = useLocation();

    return (
        <Link to={"/" + props.link} className={"navOption" + (location.pathname === "/" + props.link ? " selected" : "")} onClick={e => window.screen.height / window.screen.width > 0.855 ? openMenu() : ""}>
            <p className={"navOptionText" + (props.link === "story" ? " story" : "")}>{props.text}</p>
        </Link>
    )
}

export default MenuLink