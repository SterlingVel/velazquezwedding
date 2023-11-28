import React from 'react';
import '../css/Gifts/Gifts.css';
import '../css/Gifts/Animations.css';
import '../css/Gifts/Mobile.css';
import '../css/index.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import Fade from '../tools/fade.js'
import { LazyLoadImage } from "react-lazy-load-image-component";

const pageVariants = {
    in: {
        opacity: 1,
        transition: {
            duration: 1
        }
    },
    out: {
        opacity: 0,
        transition: {
            duration: 0.2
        }
    }
}

class Gifts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        if (window.screen.height / window.screen.width > 0.855)
            document.getElementById("navmenu").className = "navMenu";
        window.scrollTo(0, 0);
        this.addResizeListener();
    }

    render() {
        return (
            <motion.div className="main" initial="out" animate="in" exit="out" variants={pageVariants}>
                <div className="giftsDiv">
                    <div className="giftsHeaderSection">
                        <p className="giftsTitle">Our</p>
                        <p className="giftsSubHeader">Registry</p>
                    </div>
                    <img className="giftsImageFlower top" id="giftsimageflower" alt="flowers" src="giftsImages/b5.png"/>
                    <img className="giftsImageFlower bottom" id="giftsimageflower2" alt="flowers" src="giftsImages/b6.png"/>
                    <img className="giftsButterfly" src="weddingImages/32.PNG" alt="butterfly"/>

                    <div className="introFade"></div>
                </div>

                <div className="giftDetailsDiv">
                    <div className="giftDetailsSection">
                        <p className="honeymoonHeader">HONEYMOON</p>
                        <p className="honeymoonDetails">Please know that your presence on our special day is the greatest 
                            present of all! However, if you do wish to celebrate with a gift, a contribution to our honeymoon 
                            fund would be warmly appreciated.
                        </p>
                        <a className="honeymoonLink" href="">OUR FUND</a>
                    </div>
                    <div className="giftDetailsSection registry">
                        <p className="registryHeader">GIFT REGISTRY</p>
                        <p className="registryDetails">We're registered at:</p>
                        <a className="registryLink" href="">Amazon</a>
                        <a className="registryLink" href="">Target</a>
                        <a className="registryLink" href="">Zola</a>
                        <p className="registryDetails cards">If you prefer giving gift cards, we'd happily accept one from any 
                            of the stores above!</p>
                    </div>
                </div>
                
                <div className="pageFooter gifts"></div>
            </motion.div>
        );
    }

    addResizeListener() {
        const classes = [document.getElementById('navmenu').classList, document.getElementById('navoptions').classList];
        let timer = 0;
        window.addEventListener('resize', function () {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            else
                classes.forEach(e => e.add('stop-transitions'));

            timer = setTimeout(() => {
                classes.forEach(e => e.remove('stop-transitions'));
                timer = null;
            }, 100);
        });
    }

}

export default Gifts;