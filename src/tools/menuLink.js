import React, { useState } from 'react';
import { Link, Routes, Route, useLocation } from "react-router-dom";

function openMenu(action) {
    document.getElementById("navmenu").classList.toggle("show");
    scrollToRSVP(action);
}

function scrollToRSVP(action) {
    if (action === "rsvp" && window.location.pathname !== "/") {
        setTimeout(() => {
            var galleryHide = document.getElementsByClassName("homeGalleryPic reg")
            var galleryShow = document.getElementsByClassName("homeGalleryPic rsvp")
            for (var i = 0; i < 4; i++) {
                galleryHide[i].style.display = "none"
                galleryShow[i].style.display = "inline-block"
            }
            document.getElementById("rsvpformdiv").scrollIntoView({ block: "start", inline: "nearest" });
        }, 400)
    } else if (action === "rsvp") {
        var galleryHide = document.getElementsByClassName("homeGalleryPic reg")
        var galleryShow = document.getElementsByClassName("homeGalleryPic rsvp")
        for (var i = 0; i < 4; i++) {
            galleryHide[i].style.display = "none"
            galleryShow[i].style.display = "inline-block"
        }
        document.getElementById("rsvpformdiv").scrollIntoView({ block: "start", inline: "nearest", behavior: "smooth" });
    } else if (action === "faq") {

    }
}

function MenuLink(props) {

    const location = useLocation();

    return (
        <Link to={"/" + props.link} className={"navOption" + (location.pathname === "/" + props.link ? " selected" : "")} id={props.id}
            onClick={e => window.innerHeight / window.innerWidth > 0.855 ? openMenu(props.action) : scrollToRSVP(props.action)}>
            <p className={"navOptionText" + (props.link === "story" ? " story" : "")}>{props.text}</p>
        </Link>
    )
}

export default MenuLink