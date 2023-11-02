import React from 'react';
import '../css/Wedding.css';
import '../css/index.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

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
            duration: 1
        }
    }
}

class Wedding extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
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
                    <img className="weddingImageFlower left1" alt="flowers" src="weddingImages/1.PNG"></img>
                    <img className="weddingImageFlower left2" alt="flowers" src="weddingImages/b7.png"></img>
                    <img className="weddingImageFlower right" alt="flowers" src="weddingImages/bouquet_top.png"></img>
                </div>

                <div className="hazlehurstDiv">
                    <div className="hazlehurstImageWrapper">
                        <div className="hazlehurstFade"></div>
                        <img className='hazlehurstImage' src="weddingImages/hazelhurst-house.jpg" alt="house"></img>
                        <div className="hazlehurstFade"></div>
                    </div>
                    <p className="hazlehurstHeader">Ceremony and Reception</p>
                    <p className="hazlehurstDate">5:30 - 10:00 in the evening</p>
                    <p className="hazlehurstAddressHeader">THE HAZLEHURST HOUSE</p>
                    <p className='hazlehurstAddress'>77 Sloan Street<br />McDonough, GA 30253</p>
                    <button className="hazlehurstMap">MAP</button>
                    <div className="sectionDivider"></div>
                </div>

                <div className="scheduleDiv">
                    <div className="sectionDivider schedule"></div>
                    <div className="scheduleWrapper">
                        <div className="scheduleSection">
                            <p className="scheduleHeader">CEREMONY</p>
                            <p className="scheduleTime">5:30 pm</p>
                        </div>
                        <div className="scheduleSection">
                            <p className="scheduleHeader">COCKTAILS</p>
                            <p className="scheduleTime">6:00 pm</p>
                        </div>
                        <div className="scheduleSection">
                            <p className="scheduleHeader">DINNER</p>
                            <p className="scheduleTime">7:00 pm</p>
                        </div>
                        <div className="scheduleSection">
                            <p className="scheduleHeader">PARTY TIME</p>
                            <p className="scheduleTime">8:00 pm and onward</p>
                        </div>
                        <img className="scheduleFlower" alt="flower" src="weddingImages/24.PNG"></img>
                        <img className="scheduleButterfly" alt="butterfly" src="weddingImages/32.PNG"></img>
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
        const classes = document.getElementById('navoptions').classList;
        let timer = 0;
        window.addEventListener('resize', function () {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            else
                classes.add('stop-transitions');
      
            timer = setTimeout(() => {
                classes.remove('stop-transitions');
                timer = null;
            }, 100);
        });
    }
    
}

export default Wedding;