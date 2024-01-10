import React from 'react';
import '../css/Travel/Travel.css';
import '../css/Travel/Animations.css';
import '../css/Travel/Mobile.css';
import '../css/index.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import Fade from '../tools/fade.js'
import { LazyLoadImage } from "react-lazy-load-image-component";
import Hotel from "../tools/hotel.js"

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

class Travel extends React.Component {

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
        return (
            <motion.div className="main" initial="out" animate="in" exit="out" variants={pageVariants}>
                <div className="travelDiv">
                    <div className="travelHeaderSection">
                        <p className="travelTitle">Travel</p>
                        <p className="travelSubHeader">AND</p>
                        <p className="travelTitle">Accommodations</p>
                    </div>
                    <img className="travelImageWreath" alt="wreath" src="travelImages/w2.png" />
                    <div className="travelWreathFade left" />
                    <div className="travelWreathFade right" />
                    <div className="introFade"></div>
                </div>

                <div className="hotelDiv">
                    <div className="hotelDivHeader">
                        <Fade id="hotelheaderfade" threshold="0.9">
                            <p className="hotelDivHeaderText">Where to</p><br />
                        </Fade>
                        <Fade id="hotelsubheaderfade" threshold="0.9">
                            <p className='hotelDivSubheaderText'>STAY</p>
                        </Fade>
                    </div>

                    <div className="hotelWrapper">
                        <Fade>
                            <p className="hotelSubheader">There are plenty of hotels in the area to fit all budgets.
                                We highly recommend the Hilton Garden Inn as we have reserved a room block for all our traveling guests with its link below!
                                <br/><br/>
                                <b>The room block at the Hilton Garden Inn lasts until March 4th!</b>
                            </p>
                        </Fade>
                        <div className="hotelRow">
                            <Fade id="hotel1">
                                <Hotel name="Hilton Garden Inn" image="travelImages/hilton.jpg" time="10" price="129"
                                    link="https://www.hilton.com/en/book/reservation/deeplink/?ctyhocn=ATLMCGI&groupCode=STEALA&arrivaldate=2024-04-04&departuredate=2024-04-07&cid=OM,WW,HILTONLINK,EN,DirectLink&fromId=HILTONLINKDIRECT" />
                            </Fade>
                            <Fade id="hotel2">
                                <Hotel name="Courtyard by Marriot" image="travelImages/marriot.jpg" time="11" price="134"
                                    link="https://www.marriott.com/en-us/hotels/atlam-courtyard-atlanta-mcdonough/overview/" />
                            </Fade>
                        </div>
                        <Fade>
                            <p className="hotelSubheader">These Atlanta hotels are much further from the venue, but you'll find many more activities to do
                                in the city!
                            </p>
                        </Fade>
                        <div className="hotelRow atlanta">
                            <Fade id="hotel3">
                                <Hotel name="The Moxy - Midtown" image="travelImages/moxy.jpg" time="38" price="195"
                                    link="https://www.marriott.com/en-us/hotels/atlox-moxy-atlanta-midtown/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0" />
                            </Fade>
                            <Fade id="hotel4">
                                <Hotel name="The Renaissance - Midtown" image="travelImages/renaissance.jpg" time="37" price="309"
                                    link="https://www.marriott.com/en-us/hotels/atlbd-renaissance-atlanta-midtown-hotel/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0" />
                            </Fade>
                        </div>
                    </div>

                    <div className="hotelFlowerWrapperLeft">
                        <Fade id="hotelflowerleft" threshold="0.2">
                            <LazyLoadImage className="hotelDivLeftFlower" src="travelImages/12.PNG" alt="flower" />
                        </Fade>
                    </div>
                    <div className="hotelFlowerWrapperRight">
                        <Fade id="hotelflowerright">
                            <LazyLoadImage className="hotelDivRightFlower" src="travelImages/15.png" alt="flower" />
                        </Fade>
                    </div>

                </div>

                <div className="placesDiv">
                    <div className="placesDivHeader">
                        <div className='placesDivHeaderWrapper'>
                            <Fade id="placesheaderfade" threshold="0.9">
                                <p className="placesDivHeaderText">Once You're</p><br />
                            </Fade>
                            <Fade id="placessubheaderfade" threshold="0.9">
                                <p className='placesDivSubheaderText'>THERE</p>
                            </Fade>
                            <div className="travelButterflyWrapper">
                                <Fade id="travelbutterfly" threshold="0.9">
                                    <LazyLoadImage className="travelButterfly" src="weddingImages/32.PNG" alt="butterfly" />
                                </Fade>
                            </div>
                        </div>
                        <Fade id="placesdetails" threshold="0.9">
                            <p className='placesDetailsText'>We're excited to share some of our favorite places in the area with you!<br />
                                We also have some information / tips below on how we'll be moving around this wedding weekend.</p>
                        </Fade>
                        <Fade id="traveltipwrapper1">
                            <div className="travelTipSection">
                                <p className="travelTipHeader">Transportation</p>
                                <p className="travelTipDetails">We recommend using a car rental or carpooling, especially for Atlanta hotels. Rideshare services like Uber
                                    are also widely available.</p>
                            </div>
                        </Fade>
                        <Fade id="traveltipwrapper2">
                            <div className="travelTipSection">
                                <p className="travelTipHeader">Parking</p>
                                <p className="travelTipDetails">There is enough parking for all guests in front of the venue. If you wish to arrive early and explore around The Square, you
                                    may also use this parking area.</p>
                            </div>
                        </Fade>
                        <Fade id="traveltipwrapper3">
                            <div className="travelTipSection">
                                <p className="travelTipHeader">Travel Tips</p>
                                <p className="travelTipDetails">For anyone staying in Atlanta, be sure to check traffic before leaving as the trip can take anywhere up to an hour. And
                                    check the weather, it might be cold!</p>
                            </div>
                        </Fade>
                    </div>

                    <Fade id="locationsectionfade" threshold="0.2">
                        <div className="locationSection">
                            <LazyLoadImage className="locationImage country" src="travelImages/McDonough.jpg" alt="McDonough" />
                            <div className="locationSectionDetails">
                                <div className="location">
                                    <p className="locationHeader">The McDonough Square</p>
                                    <p className="locationSubheader">Located right by the wedding venue, this block in McDonough's historic downtown is the perfect place to shop, eat,
                                        and relax for the weekend.</p>
                                </div>
                                <div className="location">
                                    <p className="locationHeader">Southern Belle Farm</p>
                                    <p className="locationSubheader">Early April is the best time to stop by this farm and pick all the fresh strawberries you can carry! You can also
                                        enjoy their petting zoo, gem mining, and more.</p>
                                </div>
                                <div className="locationFlowerTop">
                                    <Fade id="locationflower" threshold="0.2">
                                        <img className="locationFlower" src="travelImages/40.png" alt="flower" />
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade id="locationsectionfade2" threshold="0.2">
                        <div className="locationSection">
                            <LazyLoadImage className="locationImage city" src="travelImages/Atlanta.jpg" alt="McDonough" />
                            <div className="locationSectionDetails city">
                                <div className="location">
                                    <p className="locationHeader">Ponce City Market</p>
                                    <p className="locationSubheader">This destination is famous for its food hall, shops, and its rooftop theme park (which is adults only on weekend
                                        nights). It's one of our favorite places in the city!</p>
                                </div>
                                <div className="location">
                                    <p className="locationHeader">Atlanta Botanical Gardens</p>
                                    <p className="locationSubheader">Spring is the best time to visit these gardens because all the flowers are in full bloom! And there's no better
                                        place than the surrounding Piedmont Park to unwind.</p>
                                </div>
                                <div className="locationFlowerBottom">
                                    <Fade id="locationflower2" threshold="0.2">
                                        <img className="locationFlower2" src="travelImages/10.png" alt="flower" />
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </Fade>

                    <div className="pageFooter"></div>
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

export default Travel;