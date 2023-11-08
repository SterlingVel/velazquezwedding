import React from 'react';
import '../css/Home/Home.css';
import '../css/Home/Animations.css';
import '../css/Home/Mobile.css';
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
            duration: 0.5
        }
    }
}

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.addResizeListener();
        document.getElementById("navmenu").className = "navMenu"
    }

    render() {
        return (
            <motion.div className="main" initial="out" animate="in" exit="out" variants={pageVariants}>
                <div className="introDiv">
                    <div className="introHeaderSection">
                        <img className="introImageButterfly" id="introimagebutterfly" alt="butterfly" src="introImages/butterfly.png"/>
                        <p className="introTitle">Sterling + Alanna</p>
                        <p className="introSubHeader">THE VELAZQUEZ WEDDING</p>
                        <p className="introDate">April 6th, 2024 | 5:30 pm</p>
                    </div>
                    <img className="introImageFlower" id="introimageflower" alt="flowers" src="introImages/flowers.png"/>
                    <div className="introFade"></div>
                </div>

                <div className="homeGalleryContainer">
                    <div className="homeGalleryDiv">
                        <div className="homeGalleryColumn left">
                            <Fade id="weddinglink">
                                <div className="homeGallerySection wedding">
                                    <Link to='/wedding'>
                                        <p className="homeGalleryText">WEDDING</p>
                                    </Link>
                                    <Link to='/wedding'>
                                        <LazyLoadImage className="homeGalleryPic" alt="weddingmenu" src="introImages/twirl.jpg" loading="lazy" />
                                    </Link>
                                </div>
                            </Fade>
                            <Fade id="travellink">
                                <div className="homeGallerySection travel">
                                    <Link to='/wedding'>
                                        <LazyLoadImage className="homeGalleryPic" alt="weddingmenu" src="introImages/field.jpg" loading="lazy" />
                                    </Link>
                                    <Link to='/wedding'>
                                        <p className="homeGalleryText">TRAVEL</p>
                                    </Link>
                                </div>
                            </Fade>
                            <Fade id="faqbuttonfade">
                                <button className="faqButton">FAQs</button>
                            </Fade>
                        </div>
                        <div className="homeGalleryColumn right">
                            <div className="homeGallerySection ourStory">
                                <Fade id="storylink">
                                    <Link to='/wedding'>
                                        <p className="homeGalleryText">OUR STORY</p>
                                    </Link>
                                    <Link to='/wedding'>
                                        <LazyLoadImage className="homeGalleryPic" alt="weddingmenu" src="introImages/ring.jpg" loading="lazy" />
                                    </Link>
                                </Fade>
                            </div>
                            <Fade id="giftslink">
                                <div className="homeGallerySection gifts">
                                    <Link to='/wedding'>
                                        <LazyLoadImage className="homeGalleryPic" alt="weddingmenu" src="introImages/arms.jpg" loading="lazy" />
                                    </Link>
                                    <Link to='/wedding'>
                                        <p className="homeGalleryText">GIFTS</p>
                                    </Link>
                                </div>
                            </Fade>
                            <Fade id="faqbuttonfade2">
                                <button className="faqButton mobile">FAQs</button>
                            </Fade>
                        </div>
                    </div>
                    <div className="galleryFlower left">
                        <Fade id="homeflowerleft" threshold="0.2">
                            <LazyLoadImage className="flowerImage" alt="flower" src="introImages/homeflowers.png" loading="lazy"/>
                        </Fade>
                    </div>
                    <div className="galleryFlower right1">
                        <Fade id="homeflowerright1" threshold="0.1">
                            <LazyLoadImage className="flowerImage" alt="flower" src="introImages/homeflowers2.png" loading="lazy"/>
                        </Fade>
                    </div>
                    <div className="galleryFlower right2">
                        <Fade id="homeflowerright2" threshold="0.1">
                            <LazyLoadImage className="flowerImage" alt="flower" src="introImages/homeflowers.png" loading="lazy"/>
                        </Fade>
                    </div>
                    <div className="homeContainer fade"></div>
                </div>

                <div className="rsvpFormDiv">
                    <div className="rsvpHeaderContainer">
                        <Fade id="rsvpHeaderFade">
                            <p className="rsvpHeaderCursive">Please</p>
                        </Fade>
                        <Fade id="rsvpSubheaderFade">
                            <p className="rsvpHeaderScript">RSVP</p>
                        </Fade>
                        <Fade>
                            <p className="rsvpHeaderDate">by 03.06.2024</p>
                        </Fade>
                    </div>
                </div>
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

export default Home;