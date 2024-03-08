import React, { useState } from 'react';
import { Link, Routes, Route, useLocation } from "react-router-dom";

function openMenu(rsvp) {
    if (!document.getElementById("faqsection").className.includes("show") || document.getElementById("navmenu").className.includes("show"))
        document.getElementById("navmenu").classList.toggle("show");
    // if (rsvp) scrollToRSVP();
}

// function scrollToRSVP() {
//     const scroller = (behavior) => {
//         var galleryHide = document.getElementsByClassName("homeGalleryPic reg")
//         var galleryShow = document.getElementsByClassName("homeGalleryPic rsvp")
//         for (var i = 0; i < 4; i++) {
//             galleryHide[i].style.display = "none"
//             galleryShow[i].style.display = "inline-block"
//         }
//         document.getElementById("rsvpformdiv").scrollIntoView({ block: "start", inline: "nearest", behavior: behavior });
//     }
//     if (window.location.pathname !== "/") {
//         setTimeout(() => {
//             scroller("auto")
//         }, 400)
//     } else {
//         setTimeout(() => {
//             scroller("smooth")
//         }, 0)
//     }
// }

function MenuLink(props) {

    const location = useLocation();

    return (
        <Link to={"/" + props.link} className={"navOption" + (location.pathname === "/" + props.link ? " selected" : "")} id={props.id}
            onClick={e => window.innerHeight / window.innerWidth > 0.855 ? openMenu(props.rsvp) : {}}>
            <p className={"navOptionText" + (props.link === "story" ? " story" : "")}>{props.text}</p>
        </Link>
    )

    // scrollToRSVP(props.rsvp)}
    
}

export default MenuLink