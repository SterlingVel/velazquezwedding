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

                <div className="homeBody">
                    <div className="homeGalleryDiv">
                        <div className="homeGalleryColumn left">
                            <div className="homeGallerySection wedding">
                                <p className="homeGalleryText">WEDDING</p>
                                <img className="homeGalleryPic" alt="weddingmenu" src="introImages/twirl.jpg" />
                            </div>
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
                </div>
            </motion.div>
        );
    }
}

export default Home;