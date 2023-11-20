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
                        <p className="hotelSubheader">There are plenty of hotels in the area to fit all budgets.<br/>
                            We highly recommend the Hilton Garden Inn as it will have a shuttle service 
                            to the ceremony and a room block for all our traveling guests!
                        </p>
                        <div className="hotelRow">
                            <Hotel name="Hilton Garden Inn" image="travelImages/hilton.jpg" time="10" price="165"
                                link="https://www.hilton.com/en/hotels/atlmcgi-hilton-garden-inn-atlanta-south-mcdonough/" />
                            <Hotel name="Holiday Inn Express" image="travelImages/holiday.jpg" time="10" price="160"
                                link="https://www.ihg.com/holidayinnexpress/hotels/us/en/mcdonough/atlmd/hoteldetail?cm_mmc=GoogleMaps-_-EX-_-US-_-ATLMD" />
                        </div>
                        <p className="hotelSubheader">These Atlanta hotels are much further from the venue, but you'll find many more activities to do 
                            in the city!
                        </p>
                        <div className="hotelRow atlanta">
                            <Hotel name="The Moxy - Midtown" image="travelImages/moxy.jpg" time="38" price="232"
                                link="https://www.marriott.com/en-us/hotels/atlox-moxy-atlanta-midtown/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0" />
                            <Hotel name="The Renaissance - Midtown" image="travelImages/renaissance.jpg" time="37" price="265"
                                link="https://www.marriott.com/en-us/hotels/atlbd-renaissance-atlanta-midtown-hotel/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0" />
                        </div>
                    </div>
                </div>

                <div className="placesDiv">
                    <div className="placesDivHeader">
                        <Fade id="placesheaderfade" threshold="0.9">
                            <p className="placesDivHeaderText">Once You're</p><br />
                        </Fade>
                        <Fade id="placessubheaderfade" threshold="0.9">
                            <p className='placesDivSubheaderText'>THERE</p>
                        </Fade>
                        <Fade id="placesdetails" threshold="0.9">
                            <p className='placesDetailsText'>We're excited to share some of our favorite places in the area with you!<br/>
                                We also have some information / tips below on how we'll be moving around this wedding weekend.</p>
                        </Fade>
                        <div className="travelTipSection">
                            <p className="travelTipHeader">Transportation</p>
                            <p className="travelTipDetails">Our shuttle service will leave from Hilton Garden Inn at 4 PM and return at 10:45 PM. Rideshare services like Uber 
                            are also widely available in the city.</p>
                        </div>
                        <div className="travelTipSection">
                            <p className="travelTipHeader">Parking</p>
                            <p className="travelTipDetails">There is enough parking for all guests in front of the venue. If you wish to arrive early and explore around The Square, you
                                may also use this parking area.</p>
                        </div>
                        <div className="travelTipSection">
                            <p className="travelTipHeader">Travel Tips</p>
                            <p className="travelTipDetails">For anyone staying in Atlanta, be sure to check traffic before leaving as the trip can take anywhere up to an hour. And 
                                check the weather, it might be cold!</p>
                        </div>
                    </div>

                    <div className="locationSection">
                        <img className="locationImage country" src="travelImages/McDonough.jpg" alt="McDonough"></img>
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
                        </div>
                    </div>
                    <div className="locationSection">
                        <img className="locationImage city" src="travelImages/Atlanta.jpg" alt="McDonough"></img>
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
                        </div>
                    </div>

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