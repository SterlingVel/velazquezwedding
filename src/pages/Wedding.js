import React from 'react';
import '../css/Wedding/Wedding.css';
import '../css/Wedding/Animations.css';
import '../css/Wedding/Mobile.css';
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

class Wedding extends React.Component {

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
                <div className="weddingDiv">
                    <div className="weddingHeaderSection">
                        <p className="weddingSubHeader">WELCOME TO OUR</p>
                        <p className="weddingTitle">Wedding Celebration</p>
                    </div>
                    <img className="weddingImageFlower left1" alt="flowers" src="weddingImages/b7.png"/>
                    <img className="weddingImageFlower left2" alt="flowers" src="weddingImages/1.PNG"/>
                    <img className="weddingImageFlower right" alt="flowers" src="weddingImages/bouquet_top.png"/>
                </div>

                <div className="hazlehurstDiv">
                    <Fade threshold="0.6">
                        <div className="hazlehurstImageWrapper">
                            <div className="hazlehurstFade"></div>
                            <LazyLoadImage className='hazlehurstImage' src="weddingImages/hazelhurst-house.jpg" alt="house" loading="lazy"/>
                            <div className="hazlehurstFade"></div>
                        </div>
                    </Fade>
                    <Fade threshold="1">
                        <p className="hazlehurstHeader">Ceremony and Reception</p>
                        <p className="hazlehurstDate">5:30 - 10:00 in the evening</p>
                    </Fade>
                    <Fade threshold="1">
                        <p className="hazlehurstAddressHeader">THE HAZLEHURST HOUSE</p>
                        <p className='hazlehurstAddress'>77 Sloan Street<br />McDonough, GA 30253</p>
                    </Fade>
                    <Fade threshold="1">
                        <a className="mapLink" href="https://maps.app.goo.gl/WTKX7FBdWWSxgkbq9" target='_blank' rel='noreferrer'>
                            <button className="hazlehurstMap">MAP</button>
                        </a>
                    </Fade>
                </div>

                <div className="scheduleDiv">
                    <Fade id="sectionDividerFade" threshold="0">
                        <div className="sectionDivider"></div>
                    </Fade>
                    <div className="scheduleWrapper">
                        <div className="scheduleSection">
                            <Fade threshold="0.8" id="schedule1">
                                <p className="scheduleHeader">CEREMONY</p>
                                <p className="scheduleTime">5:30 pm</p>
                            </Fade>
                        </div>
                        <div className="scheduleSection">
                            <Fade threshold="0.8" id="schedule2">
                                <p className="scheduleHeader">COCKTAILS</p>
                                <p className="scheduleTime">6:00 pm</p>
                            </Fade>
                        </div>
                        <div className="scheduleSection">
                            <Fade threshold="0.8" id="schedule3">
                                <p className="scheduleHeader">DINNER</p>
                                <p className="scheduleTime">7:00 pm</p>
                            </Fade>
                        </div>
                        <div className="scheduleSection">
                            <Fade threshold="0.8" id="schedule4">
                                <p className="scheduleHeader">PARTY TIME</p>
                                <p className="scheduleTime">8:00 pm and onward</p>
                            </Fade>
                        </div>
                        <div className="scheduleFlowerWrapper">
                            <Fade threshold="0.5" id="scheduleflower">
                                <LazyLoadImage className="scheduleFlower" alt="flower" src="weddingImages/24.PNG" loading="lazy"/>
                            </Fade>
                        </div>
                        <div className="scheduleButterflyWrapper">
                            <Fade threshold="0.9" id="schedulebutterfly">
                                <LazyLoadImage className="scheduleButterfly" alt="butterfly" src="weddingImages/32.PNG" loading="lazy"/>
                            </Fade>
                        </div>
                    </div>
                </div>

                <div className="crewDiv">
                    <div className="crewDivHeader">
                        <Fade id="crewheaderfade" threshold="0.9">
                            <p className="crewDivHeaderText">The</p><br />
                        </Fade>
                        <Fade id="crewsubheaderfade" threshold="0.9">
                            <p className='crewDivSubheaderText'>CREW</p>
                        </Fade>
                    </div>
                    <div className="crewHeader bride">
                        <Fade id="crewheaderbrideflower" threshold="0.6">
                            <LazyLoadImage className="brideFlower" alt="flower" src="weddingImages/2.PNG" loading="lazy"/>
                        </Fade>
                        <Fade id="crewheaderbridetext" threshold="0">
                            <p className="crewHeaderText bride">For the Bride</p>
                        </Fade>
                    </div>
                    <div className="crewRow">
                        <Fade>
                            <div className="crewSection">
                                <LazyLoadImage className="crewImage" alt="bridesmaid" src="weddingImages/placeholder.jpg" loading="lazy"/>
                                <div className="crewSectionText">
                                    <p className="crewSectionHeader">Keeley Cauble</p>
                                    <p className="crewSectionSubheader">Maid of Honor</p>
                                </div>
                            </div>
                            <div className="crewSection">
                                <LazyLoadImage className="crewImage" alt="bridesmaid" src="weddingImages/placeholder.jpg" loading="lazy"/>
                                <div className="crewSectionText">
                                    <p className="crewSectionHeader">Amelia Adkisson</p>
                                    <p className="crewSectionSubheader">Bridesmaid</p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className="crewHeader groom">
                        <Fade id="crewheadergroomflower" threshold="0.2">
                            <LazyLoadImage className="groomFlower" alt="flower" src="weddingImages/14.PNG" loading="lazy"/>
                        </Fade>
                        <Fade id="crewheadergroomtext" threshold="0">
                            <p className="crewHeaderText groom">For the Groom</p>
                        </Fade>
                    </div>
                    <div className="crewRow groom">
                        <Fade>
                            <div className="crewSection">
                                <LazyLoadImage className="crewImage" alt="groomsman" src="weddingImages/placeholder.jpg" loading="lazy"/>
                                <div className="crewSectionText">
                                    <p className="crewSectionHeader">Gabriel Torres</p>
                                    <p className="crewSectionSubheader">Best Man</p>
                                </div>
                            </div>
                            <div className="crewSection">
                                <LazyLoadImage className="crewImage" alt="groomsman" src="weddingImages/placeholder.jpg" loading="lazy"/>
                                <div className="crewSectionText">
                                    <p className="crewSectionHeader">Mike Veloso</p>
                                    <p className="crewSectionSubheader">Groomsman</p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <Fade id="crewflowerend" threshold="0.5">
                        <LazyLoadImage className="crewFlower" alt="flower" src="weddingImages/bouquet.png" loading="lazy"/>
                    </Fade>
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

export default Wedding;