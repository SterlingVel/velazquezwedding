import React, { useState } from 'react';

function Hotel(props) {

    return (
        <div className="hotelSection">
            <img className="hotelImage" src={props.image} alt="hotel"></img>
            <p className="hotelSectionHeader">{props.name}</p>
            <p className="hotelSectionDetails">{props.time} minute drive from venue<br/>Rooms start at ${props.price}/night</p>
            <a className="hotelLink" href={props.link} target="_blank" rel='noreferrer'>VISIT</a>
        </div>
    )
}

export default Hotel