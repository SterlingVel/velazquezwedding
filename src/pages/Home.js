import React from 'react';
import '../css/Home/Home.css';
import '../css/Home/Animations.css';
import '../css/Home/Mobile.css';
import '../css/index.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import Fade from '../tools/fade.js'
import { weddingList } from '../tools/list.js'
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

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            note: ''
        };
    }

    componentDidMount() {
        if (window.screen.height / window.screen.width > 0.855)
            document.getElementById("navmenu").className = "navMenu";
        window.scrollTo(0, 0);
        this.addResizeListener();
    }

    setName(e) {
        var name = e.target.value;
        this.stringSearch(name, weddingList);
        this.setState({ name: name });
    }
    setDropName(e) {
        document.getElementById("rsvpname").value = e
        this.setState({ name: e });
    }
    setEmail(e) {
        var email = e.target.value;
        this.setState({ email: email });
    }
    changeGuests(input) {
        var guests = parseInt(document.getElementById("rsvpnumberinput").value);
        var extraGuestDiv = 
        `<div className="rsvpSection" id=${"extraguests" + guests}>
            <p className="rsvpNameLabel">Guest Full Name *</p>
            <input className="rsvpInput name" id=${"rsvpname" + guests} defaultValue="" required></input>
        </div>`

        if (guests > 0 && input === -1) {
            document.getElementById("extraguests" + (guests - 1)).remove();
            guests -= 1;
        }
        else if (guests < 3 && input === 1) {
            document.getElementById("extraguestdiv").innerHTML += extraGuestDiv;
            guests += 1;
        }
        document.getElementById("rsvpnumberinput").value = guests;
    }
    setNote(e) {
        var note = e.target.value;
        this.setState({ note: note });
    }

    stringSearch(input, list) {
        console.log(list.filter(function (a) { 
            console.log(a.name.substring(0, input.length - 1))
            console.log(input)
            return a.name.substring(0, input.length - 1) === input 
        }))
        return list.filter(function (a) { return a.name.substring(0, input.length - 1) === input });
    }

    render() {
        return (
            <motion.div className="main" initial="out" animate="in" exit="out" variants={pageVariants}>

                <div className="introDiv">
                    <div className="introHeaderSection">
                        <img className="introImageButterfly" id="introimagebutterfly" alt="butterfly" src="weddingImages/32.PNG" />
                        <p className="introTitle">Sterling + Alanna</p>
                        <p className="introSubHeader">THE VELAZQUEZ WEDDING</p>
                        <p className="introDate">April 6th, 2024 | 5:30 pm</p>
                    </div>
                    <img className="introImageFlower" id="introimageflower" alt="flowers" src="introImages/flowers.png" />
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
                                    <Link to='/travel'>
                                        <LazyLoadImage className="homeGalleryPic" alt="weddingmenu" src="introImages/field.jpg" loading="lazy" />
                                    </Link>
                                    <Link to='/travel'>
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
                                    <Link to='/story'>
                                        <p className="homeGalleryText">OUR STORY</p>
                                    </Link>
                                    <Link to='/story'>
                                        <LazyLoadImage className="homeGalleryPic" alt="weddingmenu" src="introImages/ring.jpg" loading="lazy" />
                                    </Link>
                                </Fade>
                            </div>
                            <Fade id="giftslink">
                                <div className="homeGallerySection gifts">
                                    <Link to='/gifts'>
                                        <LazyLoadImage className="homeGalleryPic" alt="weddingmenu" src="introImages/arms.jpg" loading="lazy" />
                                    </Link>
                                    <Link to='/gifts'>
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
                            <LazyLoadImage className="flowerImage" alt="flower" src="introImages/homeflowers.png" loading="lazy" />
                        </Fade>
                    </div>
                    <div className="galleryFlower right1">
                        <Fade id="homeflowerright1" threshold="0.1">
                            <LazyLoadImage className="flowerImage" alt="flower" src="introImages/homeflowers2.png" loading="lazy" />
                        </Fade>
                    </div>
                    <div className="galleryFlower right2">
                        <Fade id="homeflowerright2" threshold="0.1">
                            <LazyLoadImage className="flowerImage" alt="flower" src="introImages/homeflowers.png" loading="lazy" />
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

                    <div className="rsvpButtons">
                        <div className="radioButtonWrapper">
                            <input className="radioButton" name="option" type="radio" id="acceptRSVP" defaultChecked />
                            <label className="rsvpLabel" htmlFor="acceptRSVP">Gladly Accept</label>
                        </div>
                        <div className="radioButtonWrapper">
                            <input className="radioButton" name="option" type="radio" id="declineRSVP" />
                            <label className="rsvpLabel" htmlFor="declineRSVP">Regretfully Decline</label>
                        </div>
                    </div>

                    <form className="rsvpForm" id="rsvpform" onSubmit={e => this.submitForm(e)}>
                        <div className="rsvpContainer" id="rsvpcontainer">
                            <div className="rsvpSection">
                                <p className="rsvpNameLabel">First and Last Name *</p>
                                <input className="rsvpInput name" id="rsvpname" defaultValue="" onInput={e => this.setName(e)} required></input>
                                <div className="dropdownDiv">
                                    {/* <p className="dropdownName" onClick={e => this.setDropName("Sterling Velazquez")}>Sterling Velazquez</p>
                                    <p className="dropdownName" onClick={e => this.setDropName("Alanna Adkisson")}>Alanna Adkisson</p> */}
                                </div>
                            </div>
                            <div className="rsvpSection">
                                <p className="rsvpNameLabel">Email Address *</p>
                                <input className="rsvpInput email" id="rsvpemail" defaultValue="" onInput={e => this.setEmail(e)} required></input>
                            </div>
                            <div className="rsvpSection">
                                <p className="rsvpNumber">Number of Guests</p>
                                <button type="button" className="rsvpSign" id="minus" onClick={() => this.changeGuests(-1)}>-</button>
                                <input className="rsvpNumberInput" id="rsvpnumberinput" defaultValue={0} type="text" pattern="[0-3]{1}" tabIndex="-1"></input>
                                <button type="button" className="rsvpSign" id="plus" onClick={() => this.changeGuests(1)}>+</button>
                            </div>
                            <div className="rsvpSection">
                                <div className="extraGuestDiv" id="extraguestdiv"></div>
                            </div>
                            <textarea className="rsvpNote" id="rsvpnote" defaultValue="" onInput={e => this.setNote(e)} placeholder="Optional Notes (Dietary restrictions, requests, or send us a message!)"></textarea>
                            <button type="submit" className="rsvpSubmit">SUBMIT</button>
                        </div>
                    </form>
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