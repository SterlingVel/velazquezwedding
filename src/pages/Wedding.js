import React from 'react';
import '../css/Wedding.css';
import '../css/WeddingAnimations.css';
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

class Wedding extends React.Component {

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
                <div className="weddingDiv">
                    <div className="weddingHeaderSection">
                        <p className="weddingSubHeader">WELCOME TO OUR</p>
                        <p className="weddingTitle">Wedding Celebration</p>
                    </div>
                    <img className="weddingImageFlower left1" alt="flowers" src="weddingImages/b7.png"></img>
                    <img className="weddingImageFlower left2" alt="flowers" src="weddingImages/1.PNG"></img>
                    <img className="weddingImageFlower right" alt="flowers" src="weddingImages/bouquet_top.png"></img>
                </div>

                <div className="hazlehurstDiv">
                    <Fade threshold="0.6">
                        <div className="hazlehurstImageWrapper">
                            <div className="hazlehurstFade"></div>
                            <img className='hazlehurstImage' src="weddingImages/hazelhurst-house.jpg" alt="house"></img>
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
                        <button className="hazlehurstMap">MAP</button>
                    </Fade>
                </div>

                <div className="scheduleDiv">
                    <Fade id="sectionDividerFade" threshold="0">
                        <div className="sectionDivider"></div>
                    </Fade>
                    <div className="scheduleWrapper">
                        <div className="scheduleSection">
                            <Fade threshold="1" id="schedule1">
                                <p className="scheduleHeader">CEREMONY</p>
                                <p className="scheduleTime">5:30 pm</p>
                            </Fade>
                        </div>
                        <div className="scheduleSection">
                            <Fade threshold="1" id="schedule2">
                                <p className="scheduleHeader">COCKTAILS</p>
                                <p className="scheduleTime">6:00 pm</p>
                            </Fade>
                        </div>
                        <div className="scheduleSection">
                            <Fade threshold="1" id="schedule3">
                                <p className="scheduleHeader">DINNER</p>
                                <p className="scheduleTime">7:00 pm</p>
                            </Fade>
                        </div>
                        <div className="scheduleSection">
                            <Fade threshold="1" id="schedule4">
                                <p className="scheduleHeader">PARTY TIME</p>
                                <p className="scheduleTime">8:00 pm and onward</p>
                            </Fade>
                        </div>
                        <div className="scheduleFlowerWrapper">
                            <Fade threshold="0" id="scheduleflower">
                                <img className="scheduleFlower" alt="flower" src="weddingImages/24.PNG"></img>
                            </Fade>
                        </div>
                        <div className="scheduleButterflyWrapper">
                            <Fade threshold="1" id="schedulebutterfly">
                                <img className="scheduleButterfly" alt="butterfly" src="weddingImages/32.PNG"></img>
                            </Fade>
                        </div>
                    </div>
                </div>

                <div className="crewDiv">
                    <div className="crewDivHeader">
                        <p className="crewDivHeaderText">The</p><br />
                        <p className='crewDivSubheaderText'>CREW</p>
                    </div>
                    <div className="crewHeader bride">
                        <img className="brideFlower" alt="flower" src="weddingImages/2.PNG"></img>
                        <p className="crewHeaderText bride">For the Bride</p>
                    </div>
                    <div className="crewRow">
                        <div className="crewSection">
                            <img className="crewImage" alt="bridesmaid" src="weddingImages/placeholder.jpg"></img>
                            <div className="crewSectionText">
                                <p className="crewSectionHeader">Keeley Cauble</p>
                                <p className="crewSectionSubheader">Maid of Honor</p>
                            </div>
                        </div>
                        <div className="crewSection">
                            <img className="crewImage" alt="bridesmaid" src="weddingImages/placeholder.jpg"></img>
                            <div className="crewSectionText">
                                <p className="crewSectionHeader">Amelia Adkisson</p>
                                <p className="crewSectionSubheader">Bridesmaid</p>
                            </div>
                        </div>
                    </div>
                    <div className="crewHeader groom">
                        <img className="groomFlower" alt="flower" src="weddingImages/14.PNG"></img>
                        <p className="crewHeaderText groom">For the Groom</p>
                    </div>
                    <div className="crewRow groom">
                        <div className="crewSection">
                            <img className="crewImage" alt="groomsman" src="weddingImages/placeholder.jpg"></img>
                            <div className="crewSectionText">
                                <p className="crewSectionHeader">Gabriel Torres</p>
                                <p className="crewSectionSubheader">Best Man</p>
                            </div>
                        </div>
                        <div className="crewSection">
                            <img className="crewImage" alt="groomsman" src="weddingImages/placeholder.jpg"></img>
                            <div className="crewSectionText">
                                <p className="crewSectionHeader">Mike Veloso</p>
                                <p className="crewSectionSubheader">Groomsman</p>
                            </div>
                        </div>
                    </div>
                    <img className="crewFlower" alt="flower" src="weddingImages/bouquet.png"></img>
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