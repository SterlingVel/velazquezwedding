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
            guest: '',
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
            this.changeGuests(weddingList[name].guests)
        else
            this.changeGuests(false)

        this.setState({
            name: name,
            list: list
        });
        document.getElementById("errorname").style.display = "none"
    }
    setDropName(e, name) {
        e.stopPropagation()
        document.getElementById("rsvpname").value = name
        this.setState({
            name: name,
            list: []
        });
        this.changeGuests(weddingList[name].guests)
        document.getElementById("errorname").style.display = "none"
    }
    setEmail(e) {
        var email = e.target.value;
        this.setState({ email: email });
        document.getElementById("erroremail").style.display = "none"
    }
    changeGuests(guests) {
        if (guests === 1 && !document.getElementById("extraguests").className.includes("hide")) {
            document.getElementById("partydiv").className = "partyDiv"
            document.getElementById("rsvpguest").required = true
            document.getElementById("plusonediv").className = "plusOneDiv show"
        } else if (guests && !document.getElementById("extraguests").className.includes("hide")) {
            document.getElementById("rsvpguest").required = false
            document.getElementById("plusonediv").className = "plusOneDiv"
            document.getElementById("partydiv").className = "partyDiv show"
        } else {
            document.getElementById("partydiv").className = "partyDiv"
            document.getElementById("rsvpguest").required = false
            document.getElementById("plusonediv").className = "plusOneDiv"
        }
    }
    setGuest(e) {
        var guest = e.target.value;
        this.setState({ guest: guest });
    }
    setNote(e) {
        var note = e.target.value;
        this.setState({ note: note });
    }

    toggleGuests(input) {
        document.getElementById("extraguests").className = "rsvpSection " + input
        if (input === "")
            this.changeGuests(weddingList[this.state.name] ? weddingList[this.state.name].guests : false)
        else
            this.changeGuests(false)
    }
    openDropdown(e) {
        e.stopPropagation()
        document.getElementById("dropdowndiv").style.display = "block"
    }
    closeDropdown() {
        if (document.getElementById("dropdowndiv").style.display === "block")
            document.getElementById("dropdowndiv").style.display = "none"
    }
    toggleGuestInput(toggle, input) {
        document.getElementById("rsvpguest").required = input
        document.getElementById("plusoneinput").className = "rsvpSection" + toggle
    }
    preventScroll(id) {
        setTimeout(() => {
            if (!this.isInViewport(document.getElementById(id)))
                document.getElementById(id).scrollIntoView();
        }, 100)
    }
    isInViewport(element) {
        var rect = element.getBoundingClientRect();
        var html = document.documentElement;
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || html.clientHeight) &&
          rect.right <= (window.innerWidth || html.clientWidth)
        );
    }

    submitForm(e) {
        e.preventDefault();
        var list = Object.keys(weddingList)
        if (!list.includes(this.state.name)) {
            document.getElementById("errorname").style.display = "block"
        } else if (!emailTest.test(this.state.email.toLowerCase())) {
            document.getElementById("erroremail").style.display = "block"
        } else {
            var rsvp = document.getElementById('acceptRSVP').checked ? "Accepted" : "Declined"
            var guests = weddingList[this.state.name].guests
            var acceptedGuests = '', declinedGuests = ''
            if (rsvp === "Accepted") {
                if (guests === 1 && document.getElementById("accept_plusone").checked) {
                    acceptedGuests = this.state.guest
                } else if (guests) {
                    acceptedGuests = guests.filter((name) => document.getElementById("accept_" + name).checked).join(', ')
                    declinedGuests = guests.filter((name) => document.getElementById("decline_" + name).checked).join(', ')
                }
            }
            
            window.Email.send({
                SecureToken: "35935e09-e4b9-4cc1-bc74-ce32ca401db2",
                To: 'sterling@velazquezwedding.com',
                From: "sterling@velazquezwedding.com",
                Subject: `RSVP ${rsvp} from ${this.state.name}`,
                Body: `<html><p>Name: ${this.state.name}</p></br><p>Email: ${this.state.email}</p></br>` + 
                    `<p>Accepted Guests: ${acceptedGuests}</p></br><p>Declined Guests: ${declinedGuests}</p></br>` +
                    `<p>Message: ${this.state.note}</p></br></br></html>`
            }).then(function () { })
            document.getElementById("rsvpformdiv").classList.toggle("submitted")
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

                <div className="rsvpFormDiv" id="rsvpformdiv">
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
                            <div className="radioButtonWrapper accept">
                                <input className="radioButton" name="option" type="radio" id="acceptRSVP" defaultChecked />
                                <label className="rsvpLabel" htmlFor="acceptRSVP" onClick={e => this.toggleGuests("")}>Gladly Accept</label>
                            </div>
                            <div className="radioButtonWrapper decline">
                                <input className="radioButton" name="option" type="radio" id="declineRSVP" />
                                <label className="rsvpLabel" htmlFor="declineRSVP" onClick={e => this.toggleGuests("hide")}>Regretfully Decline</label>
                            </div>
                        </div>

                        <form className="rsvpForm" id="rsvpform" onSubmit={e => this.submitForm(e)}>
                            <div className="rsvpContainer" id="rsvpcontainer">
                                <div className="rsvpSection" onClick={e => this.openDropdown(e)}>
                                    <p className="rsvpNameLabel name">First and Last Name *</p>
                                    <input className="rsvpInput name" id="rsvpname" defaultValue="" onInput={e => this.setName(e)} onBlur={e => this.preventScroll("rsvpname")} required></input>
                                    <div className="dropdownDiv" id="dropdowndiv">
                                        {
                                            this.state.list.map((each) =>
                                                <p className="dropdownName" onClick={e => this.setDropName(e, each)} key={key++}>{each}</p>
                                            )
                                        }
                                    </div>
                                    <p className="errorCatch" id="errorname">Name not found on wedding list</p>
                                </div>
                                <div className="rsvpSection">
                                    <p className="rsvpNameLabel email">Email Address *</p>
                                    <input className="rsvpInput email" id="rsvpemail" defaultValue="" onInput={e => this.setEmail(e)} onBlur={e => this.preventScroll("rsvpemail")} required></input>
                                    <p className="errorCatch" id="erroremail">Please enter a valid email</p>
                                </div>
                                <div className="rsvpSection" id="extraguests">
                                    <div className="partyDiv" id="partydiv">
                                        <div className="partyHeader">
                                            <p className="additionalGuestsHeader">Additional Guests</p>
                                            <p className="attendingHeader">Attending?</p>
                                        </div>
                                        <div className="partyGuests" id="partyguests">
                                            {
                                                weddingList[this.state.name] && typeof weddingList[this.state.name].guests === "object" ?
                                                    weddingList[this.state.name].guests.map((guest) =>
                                                        <div className='partyGuestSection' key={key++}>
                                                            <p className='partyGuest'>{guest}</p>
                                                            <div className='attendingDiv'>
                                                                <input className='radioButtonGuests' name={'option_' + guest} type='radio' id={'accept_' + guest} defaultChecked />
                                                                <label className='rsvpLabelGuests' htmlFor={'accept_' + guest}>YES</label>
                                                                <input className='radioButtonGuests' name={'option_' + guest} type='radio' id={'decline_' + guest} />
                                                                <label className='rsvpLabelGuests' htmlFor={'decline_' + guest}>NO</label>
                                                            </div>
                                                        </div>
                                                    ) : <div />
                                            }
                                        </div>
                                    </div>
                                    <div className="plusOneDiv" id="plusonediv" >
                                        <div className="plusOneQuestion">
                                            <p className="plusOneText">Will you be bringing<br />a guest?</p>
                                            <div className="plusOneButtonDiv">
                                                <input className="radioButtonGuests" name="plusone" type="radio" id="accept_plusone" defaultChecked />
                                                <label className="rsvpLabelGuests" htmlFor="accept_plusone" onClick={e => this.toggleGuestInput(" show", true)}>YES</label>
                                                <input className="radioButtonGuests" name="plusone" type="radio" id="decline_plusone" />
                                                <label className="rsvpLabelGuests" htmlFor="decline_plusone" onClick={e => this.toggleGuestInput("", false)}>NO</label>
                                            </div>
                                        </div>
                                        <div className="rsvpSection show" id="plusoneinput">
                                            <p className="rsvpNameLabel">Guest Name *</p>
                                            <input className="rsvpInput guest" id="rsvpguest" defaultValue="" onInput={e => this.setGuest(e)} onBlur={e => this.preventScroll("rsvpguest")}></input>
                                        </div>
                                    </div>
                                </div>

                                <textarea className="rsvpNote" id="rsvpnote" defaultValue="" onInput={e => this.setNote(e)} onBlur={e => this.preventScroll("rsvpnote")} placeholder="Optional Message"></textarea>
                                <button type="submit" className="rsvpSubmit">SUBMIT</button>
                            </div>

                        </form>
                    </Fade>

                    <div className="rsvpFormSubmitted" id="rsvpformsubmitted">
                        <div className="rsvpHeaderContainer">
                            <Fade id="rsvpHeaderFade">
                                <p className="rsvpSubmitCursive">RSVP</p>
                            </Fade>
                            <Fade id="rsvpSubheaderFade">
                                <p className="rsvpSubmitScript">SENT</p>
                            </Fade>
                        </div>
                        <p className="submittedSubheader" id="submittedsubheader">Thank you!</p>
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

// Fix scroll on mobile input blur
// Format email with new info
// FAQ page
// Upgrade menu design, primarily make it better on mobile