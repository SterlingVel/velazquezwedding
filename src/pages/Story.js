import React from 'react';
import '../css/Story/Story.css';
import '../css/Story/Animations.css';
import '../css/Story/Mobile.css';
import '../css/index.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import Fade from '../tools/fade.js'
import { LazyLoadImage } from "react-lazy-load-image-component";
import ImageWrapper from '../tools/imageWrapper';

var key = 0;
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

const sbtext1 = ("This story begins on February 28th, 2018, when two kids who had just started college began exchanging messages on an online " + 
    "dating app. Neither had expected much out of the online experience, but it wasn't long before they had connected and were spending late " + 
    "nights sharing their life stories and growing closer with each passing day.").split(' ');
const sbtext2 = ("There was Alanna, a girl born and raised in McDonough, Georgia, who had a strong desire to leave her small town and explore " +
    "what the world had to offer.").split(' ');
const sbtext3 = ("And there was Sterling, a boy raised in Miami, Florida who had immigrated from Cuba as a baby with his family and had only " +
    "recently moved to Atlanta.").split(' ');
const sbtext4 = (" Feeling as though they were missing something from their lives, their paths had finally crossed after bridging this gap of " + 
    "hundreds of miles over two decades.").split(' ');
const sbtext5 = ("Following weeks of conversation, they decided to take the plunge and meet in Alanna's hometown. The nervous excitement of " + 
    "that first date was quickly replaced by the realization that they had found what was missing. What had started as another online connection " +
    "had transformed into a real-world romance, marked by a mutual desire to explore new places and have someone special to share the experience " + 
    "with.").split(' ');
const sbtext6 = ("They made it official on April 6th, 2018. Over the next several years, their bond only strengthened until they could hardly " + 
    "envision their lives before they met. Now, six years later on April 6th, 2024, they stand on the precipice of a new chapter.").split(' ');

class Story extends React.Component {

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
        var index1 = 10, index2 = 10, index3 = 10, index4 = 15, index5 = 20, index6 = 15 

        return (
            <motion.div className="main" initial="out" animate="in" exit="out" variants={pageVariants}>
                <div className="storyDiv">
                    <div className="storyHeaderSection">
                        <p className="storyTitle">STERLING + ALANNA:</p>
                        <p className="storySubHeader">Our Story</p>
                    </div>
                    <img className="storyButterfly1" id="storybutterfly1" alt="butterfly" src="storyImages/32.PNG" />
                    <img className="storyButterfly2" id="storybutterfly2" alt="butterfly" src="storyImages/pinkbf.png" />
                    <img className="storyFlowerLeft" id="storyflowerleft" alt="flowers" src="storyImages/17.PNG" />
                    <img className="storyFlowerRight" id="storyflowerright" alt="flowers" src="storyImages/25.PNG" />
                    <img className="storyLeaf" id="storyleaf" alt="flowers" src="storyImages/19.PNG" />
                </div>

                <div className="storybookDiv">
                    <Fade id="sbfade1" threshold="0.1">
                        <div className="storybookSection" id="sb1">
                            <ImageWrapper className="sbFlower" id="sbflower1" image="storyImages/SB1.PNG" />
                            <p className="sbText" id="sbtext1">
                                {sbtext1.map(word => <span className="sbWord" style={{transitionDelay: `${++index1 * 0.03}s`}} key={key++}>{word} </span>)}
                            </p>
                            <ImageWrapper className="sbPicture" id="sbpicture1" image="storyImages/RC.jpg" />
                        </div>
                    </Fade>
                    <Fade id="sbfade2" threshold="0.4">
                        <div className="storybookSection" id="sb2">
                            <ImageWrapper className="sbFlower" id="sbflower2" image="storyImages/SB2.png" />
                            <ImageWrapper className="sbPicture" id="sbpicture2" image="storyImages/Alanna.jpg" />
                            <p className="sbText" id="sbtext2">
                                {sbtext2.map(word => <span className="sbWord" style={{transitionDelay: `${++index2 * 0.03}s`}} key={key++}>{word} </span>)}
                            </p>
                        </div>
                    </Fade>
                    <Fade id="sbfade3" threshold="0.4">
                        <div className="storybookSection" id="sb3">
                            <ImageWrapper className="sbFlower" id="sbflower3" image="storyImages/SB3.PNG" />
                            <p className="sbText" id="sbtext3">
                                {sbtext3.map(word => <span className="sbWord" style={{transitionDelay: `${++index3 * 0.03}s`}} key={key++}>{word} </span>)}
                            </p>
                            <ImageWrapper className="sbPicture" id="sbpicture3" image="storyImages/Sterling.jpg" />
                        </div>
                    </Fade>
                    <Fade id="sbfade4" threshold="0.2">
                        <div className="storybookSection" id="sb4">
                            <ImageWrapper className="sbFlower" id="sbflower4" image="storyImages/SB4.PNG" />
                            <p className="sbText" id="sbtext4">
                                {sbtext4.map(word => <span className="sbWord" style={{transitionDelay: `${++index4 * 0.03}s`}} key={key++}>{word} </span>)}
                            </p>
                        </div>
                    </Fade>
                    <Fade id="sbfade5" threshold="0.1">
                        <div className="storybookSection" id="sb5">
                            <ImageWrapper className="sbFlower" id="sbflower5" image="storyImages/SB5.PNG" />
                            <ImageWrapper className="sbPicture" id="sbpicture4" image="storyImages/NY.jpg" />
                            <p className="sbText" id="sbtext5">
                                {sbtext5.map(word => <span className="sbWord" style={{transitionDelay: `${++index5 * 0.03}s`}} key={key++}>{word} </span>)}
                            </p>
                        </div>
                    </Fade>
                    <Fade id="sbfade6" threshold="0.05">
                        <div className="storybookSection" id="sb6">
                            <ImageWrapper className="sbFlower" id="sbflower6" image="storyImages/SB6.PNG" />
                            <div className="sbTextWrapper">
                                <p className="sbText" id="sbtext6">
                                    {sbtext6.map(word => <span className="sbWord" style={{transitionDelay: `${++index6 * 0.03}s`}} key={key++}>{word} </span>)}
                                </p>
                            </div>
                        </div>
                    </Fade>
                </div>

                <div className="engagementGalleryDiv">
                    <div className="engagementGallery">
                        <ImageWrapper className="engagementPic" id="engagementpic1" image="storyImages/EP1.jpg" />
                        <ImageWrapper className="engagementPic" id="engagementpic2" image="storyImages/EP2.jpg" />
                        <ImageWrapper className="engagementPic" id="engagementpic3" image="storyImages/EP3.jpg" />
                        <ImageWrapper className="engagementPic" id="engagementpic4" image="storyImages/EP4.jpg" />
                        <ImageWrapper className="engagementPic" id="engagementpic5" image="storyImages/EP5.jpg" />
                        <ImageWrapper className="engagementPic" id="engagementpic6" image="storyImages/EP6.jpg" />
                    </div>
                </div>

                <div className="pageFooter story"></div>
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

export default Story;