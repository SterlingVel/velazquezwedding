import React, { useState } from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import Fade from '../tools/fade.js'

function ImageWrapper(props) {

    return (
        <div className={props.className} id={props.id}>
            <Fade id={props.id + "_fade"} threshold={props.threshold ? props.threshold : "0.4"}>
                <div className="wrappedImageFadeLeft" id={props.id + "_fadeleft"}/>
                <LazyLoadImage className="wrappedImage" id={props.id + "_image"} src={props.image} alt="flower"/>
                <div className="wrappedImageFadeRight" id={props.id + "_faderight"}/>
            </Fade>
        </div>
    )
}

export default ImageWrapper