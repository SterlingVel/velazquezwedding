import React from 'react';
import '../css/Home.css';
import '../css/HomeAnimations.css';
import '../css/index.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import Fade from '../tools/fade.js'

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
    }

    render() {
        return (
            <motion.div className="main" initial="out" animate="in" exit="out" variants={pageVariants}>
                <div className="introDiv">
                    <div className="introHeaderSection">
                        <img className="introImageButterfly" id="introimagebutterfly" alt="butterfly" src="introImages/butterfly.png"></img>
                        <p className="introTitle">Sterling + Alanna</p>
                        <p className="introSubHeader">THE VELAZQUEZ WEDDING</p>
                        <p className="introDate">April 6th, 2024 | 5:30 pm</p>
                    </div>
                    <img className="introImageFlower" id="introimageflower" alt="flowers" src="introImages/flowers.png"></img>
                    <div className="introFade"></div>
                </div>

                <div className="homeGalleryContainer">
                    <div className="homeGalleryDiv">
                        <div className="homeGalleryColumn left">
                            <div className="homeGallerySection wedding">
                                <Link to='/wedding'>
                                    <Fade id="weddinglink">
                                        <p className="homeGalleryText">WEDDING</p>
                                        <img className="homeGalleryPic" alt="weddingmenu" src="introImages/twirl.jpg" loading="lazy"/>
                                    </Fade>
                                </Link>
                            </div>
                            <div className="homeGallerySection travel">
                                <Link to='/wedding'>
                                    <Fade id="travellink">
                                        <img className="homeGalleryPic" alt="weddingmenu" src="introImages/field.jpg" loading="lazy"/>
                                        <p className="homeGalleryText">TRAVEL</p>
                                    </Fade>
                                </Link>
                            </div>
                            <Fade id="faqbuttonfade">
                                <button className="faqButton">FAQs</button>
                            </Fade>
                        </div>
                        <div className="homeGalleryColumn right">
                            <div className="homeGallerySection ourStory">
                                <Link to='/wedding'>
                                    <Fade id="storylink">
                                        <p className="homeGalleryText">OUR STORY</p>
                                        <img className="homeGalleryPic" alt="weddingmenu" src="introImages/ring.jpg" loading="lazy"/>
                                    </Fade>
                                </Link>
                            </div>
                            <div className="homeGallerySection gifts">
                                <Link to='/wedding' id="storylink">
                                    <Fade id="giftslink">
                                        <img className="homeGalleryPic" alt="weddingmenu" src="introImages/arms.jpg" loading="lazy"/>
                                        <p className="homeGalleryText">GIFTS</p>
                                    </Fade>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="galleryFlower left">
                        <Fade id="homeflowerleft" threshold="0.2">
                            <img className="flowerImage" alt="flower" src="introImages/homeflowers.png" loading="lazy"></img>
                        </Fade>
                    </div>
                    <div className="galleryFlower right1">
                        <Fade id="homeflowerright1" threshold="0.1">
                            <img className="flowerImage" alt="flower" src="introImages/homeflowers2.png" loading="lazy"></img>
                        </Fade>
                    </div>
                    <div className="galleryFlower right2">
                        <Fade id="homeflowerright2" threshold="0.1">
                            <img className="flowerImage" alt="flower" src="introImages/homeflowers.png" loading="lazy"></img>
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