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

const emailTest = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
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
var key = 0;

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            note: '',
            list: []
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
        var keys = Object.keys(weddingList)
        var list = keys.filter(function (a) { return a.substring(0, name.length).toLowerCase() === name.toLowerCase() && a !== name && name !== "" });
        
        if (list.length === 0 && weddingList[name])
            this.changeGuests(null, 1) //weddingList[name].guests
        this.setState({
            name: name,
            list: list
        });
        document.getElementById("errorguests").style.display = "none"
        document.getElementById("errorname").style.display = "none"
    }
    setDropName(e) {
        document.getElementById("rsvpname").value = e
        this.setState({
            name: e,
            list: []
        });
        this.changeGuests(null, 1) //weddingList[name].guests
        document.getElementById("errorguests").style.display = "none"
        document.getElementById("errorname").style.display = "none"
    }
    setEmail(e) {
        var email = e.target.value;
        this.setState({ email: email });
        document.getElementById("erroremail").style.display = "none"
    }
    changeGuests(input, set) {
        document.getElementById("errorguests").style.display = "none"
        var guests = parseInt(document.getElementById("rsvpnumberinput").value);
        var extraGuestDiv =
            `<div className="rsvpSection" id=${"extraguests" + guests}>
            <p className="rsvpNameLabel">Guest Full Name *</p>
            <input className="rsvpInput name" id=${"rsvpname" + guests} defaultValue="" required></input>
        </div>`
        var list = Object.keys(weddingList)

        if (set) {
            var overIndex = 1, underIndex = 0
            while (document.getElementById("extraguests" + (guests - overIndex))) {
                document.getElementById("extraguests" + (guests - overIndex)).remove();
                overIndex++
            }
            while (underIndex < set) {
                if (!document.getElementById("extraguests" + underIndex))
                    document.getElementById("extraguestdiv").innerHTML += this.createGuestDiv(underIndex);
                underIndex++
            }
            guests = set
        } else if (this.state.name === "") {
            document.getElementById("errorguests").innerHTML = "Please enter a name first"
            document.getElementById("errorguests").style.display = "block"
        } else if (!list.includes(this.state.name)) {
            document.getElementById("errorguests").innerHTML = "Name not found on wedding list"
            document.getElementById("errorguests").style.display = "block"
        } else if (guests > 0 && input === -1) {
            document.getElementById("extraguests" + (guests - 1)).remove();
            guests -= 1;
        } else if (guests < (this.state.name ? weddingList[this.state.name].guests : 0) && input === 1) {
            document.getElementById("extraguestdiv").innerHTML += this.createGuestDiv(guests);
            guests += 1;
        }
        document.getElementById("rsvpnumberinput").value = guests;
        
    }
    setNote(e) {
        var note = e.target.value;
        this.setState({ note: note });
    }

    openDropdown(e) {
        e.stopPropagation()
        document.getElementById("dropdowndiv").style.display = "block"
    }
    closeDropdown() {
        document.getElementById("dropdowndiv").style.display = "none"
    }
    createGuestDiv(num) {
        return `<div className="rsvpSection" id=${"extraguests" + num}>
            <p className="rsvpNameLabel">Guest Full Name *</p>
            <input className="rsvpInput name" id=${"rsvpname" + num} defaultValue="" required></input>
        </div>`
    }
    // 400ECA7F36F148B012A87511AA76F7802C7A
    // 35935e09-e4b9-4cc1-bc74-ce32ca401db2
    submitForm(e) {
        e.preventDefault();
        var list = Object.keys(weddingList)
        if (!list.includes(this.state.name)) {
            document.getElementById("errorname").style.display = "block"
        } else if (!emailTest.test(this.state.email.toLowerCase())) {
            document.getElementById("erroremail").style.display = "block"
        } else {
            window.Email.send({
                SecureToken: "35935e09-e4b9-4cc1-bc74-ce32ca401db2",
                To: 'sterling@velazquezwedding.com',
                From: "sterling@velazquezwedding.com",
                Subject: `TEST RSVP from ${this.state.name}`,
                Body: `<html><p>Name: ${this.state.name}</p ></br><p>Email: " + ${this.state.email} + "</p></br><p>Message: " + ${this.state.note} + "</p></br></br></html>`
            }).then(function () { })
    
            console.log("Email Sent")
        }
    }

    render() {
        return (
            <motion.div className="main" initial="out" animate="in" exit="out" variants={pageVariants} onClick={e => this.closeDropdown()}>

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

                    <Fade threshold="0.2">
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
                                <div className="rsvpSection" onClick={e => this.openDropdown(e)}>
                                    <p className="rsvpNameLabel">First and Last Name *</p>
                                    <input className="rsvpInput name" id="rsvpname" defaultValue="" onInput={e => this.setName(e)} required></input>
                                    <div className="dropdownDiv" id="dropdowndiv">
                                        {
                                            this.state.list.map((each) =>
                                                <p className="dropdownName" onClick={e => this.setDropName(each)} key={key++}>{each}</p>
                                            )
                                        }
                                    </div>
                                    <p className="errorCatch" id="errorname">Name not found on wedding list</p>
                                </div>
                                <div className="rsvpSection">
                                    <p className="rsvpNameLabel">Email Address *</p>
                                    <input className="rsvpInput email" id="rsvpemail" defaultValue="" onInput={e => this.setEmail(e)} required></input>
                                    <p className="errorCatch" id="erroremail">Please enter a valid email</p>
                                </div>
                                <div className="rsvpSection">
                                    <p className="rsvpNumber">Number of Guests</p>
                                    <button type="button" className="rsvpSign" id="minus" onClick={() => this.changeGuests(-1)}>-</button>
                                    <input className="rsvpNumberInput" id="rsvpnumberinput" defaultValue={0} type="text" pattern="[0-3]{1}" tabIndex="-1"></input>
                                    <button type="button" className="rsvpSign" id="plus" onClick={() => this.changeGuests(1)}>+</button>
                                    <p className="errorCatch" id="errorguests">Please enter a name first</p>
                                </div>
                                <div className="rsvpSection">
                                    <div className="extraGuestDiv" id="extraguestdiv"></div>
                                </div>
                                <textarea className="rsvpNote" id="rsvpnote" defaultValue="" onInput={e => this.setNote(e)} placeholder="Optional Notes (Dietary restrictions, requests, or send us a message!)"></textarea>
                                <button type="submit" className="rsvpSubmit">SUBMIT</button>
                            </div>
                        </form>
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

export default Home;