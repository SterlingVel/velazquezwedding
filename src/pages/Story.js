import React from 'react';
import '../css/Story/Story.css';
import '../css/Story/Animations.css';
import '../css/Story/Mobile.css';
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

class Story extends React.Component {

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
                <div className="storyDiv">
                    {/* This story begins on February 28th, 2018, when two kids who had just started college began exchanging messages
                    on an online dating app. Neither had expected much out of the online experience, but it wasn't long before they 
                    had connected and were spending late nights sharing their life stories and growing closer with each passing day.

                    There was Alanna, a girl born and raised in McDonough, Georgia who had a strong desire to leave her small town and
                    explore what the world had to offer. And there was Sterling, a boy raised in Miami, Florida who had immigrated from Cuba
                    as a baby with his family and had only recently moved to Atlanta. Feeling as though they were missing something from
                    their lives, their paths had finally crossed after bridging this gap of hundreds of miles over two decades.

                    Following weeks of conversation, they decided to take the plunge and meet in Alanna's hometown. The nervous excitement
                    of that first date was quickly replaced by the realization that they had found what was missing. What had started as 
                    another online connection had transformed into a real-world romance, marked by a mutual desire to explore new places
                    and have someone special to share the experience with.

                    They made it official on April 6th, 2018. Over the next several years, their bond only strengthened until they could
                    hardly envision their lives before they met. Now, six years later on April 6th, 2024, they stand on the precipice of a 
                    new chapter.   */}
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

export default Story;