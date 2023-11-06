import React, { useState } from 'react';

function Fade(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    var options = {
        root: document.querySelector("#scrollArea"),
        rootMargin: "0px",
        threshold: props.threshold ? props.threshold : 0.4,
    }
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        }, options);
        observer.observe(domRef.current);
    }, []);
    return (
        <div className={`fade-in-section ${isVisible || (typeof domRef.current !== "undefined" &&
            domRef.current.className.includes("is-visible")) ? 'is-visible' : ''}`} ref={domRef} id={props.id}>
            {props.children}
        </div>
    );
}

export default Fade