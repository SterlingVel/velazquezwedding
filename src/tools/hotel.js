import React, { useState } from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";

function Hotel(props) {

    return (
        <div className="hotelSection">
            <LazyLoadImage className="hotelImage" src={props.image} alt="hotel"/>
            <p className="hotelSectionHeader">{props.name}</p>
            <p className="hotelSectionDetails">{props.time} minute drive from venue<br/>Rooms start at ${props.price}/night</p>
            <a className="hotelLink" href={props.link} target="_blank" rel='noreferrer'>VISIT</a>
        </div>
    )
}

export default Hotel