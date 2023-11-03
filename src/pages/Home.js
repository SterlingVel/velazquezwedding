import React from 'react';
import '../css/Home.css';
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

class Home extends React.Component {

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
                            <Link to='/wedding'>
                                <div className="homeGallerySection wedding">
                                    <p className="homeGalleryText">WEDDING</p>
                                    <img className="homeGalleryPic" alt="weddingmenu" src="introImages/twirl.jpg" />
                                </div>
                            </Link>
                            <div className="homeGallerySection travel">
                                <img className="homeGalleryPic" alt="weddingmenu" src="introImages/field.jpg" />
                                <p className="homeGalleryText">TRAVEL</p>
                            </div>
                            <button className="faqButton">FAQs</button>
                        </div>
                        <div className="homeGalleryColumn right">
                            <div className="homeGallerySection ourStory">
                                <p className="homeGalleryText">OUR STORY</p>
                                <img className="homeGalleryPic" alt="weddingmenu" src="introImages/ring.jpg" />
                            </div>
                            <div className="homeGallerySection gifts">
                                <img className="homeGalleryPic" alt="weddingmenu" src="introImages/arms.jpg" />
                                <p className="homeGalleryText">GIFTS</p>
                            </div>
                        </div>
                    </div>
                    <img className="homeBody flowerImage left" alt="flower" src="introImages/homeflowers.png"></img>
                    <img className="homeBody flowerImage right1" alt="flower" src="introImages/homeflowers2.png"></img>
                    <img className="homeBody flowerImage right2" alt="flower" src="introImages/homeflowers.png"></img>
                    <div className="homeContainer fade"></div>
                </div>

                <div className="rsvpFormDiv">
                    <div className="rsvpHeaderContainer">
                        <p className="rsvpHeaderCursive">Please</p>
                        <p className="rsvpHeaderScript">RSVP</p>
                        <p className="rsvpHeaderDate">by 03.06.2024</p>
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