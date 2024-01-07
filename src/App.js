import React from 'react';
import Home from "./pages/Home.js";
import Wedding from "./pages/Wedding.js";
import Story from "./pages/Story.js";
import Travel from "./pages/Travel.js";
import Gifts from "./pages/Gifts.js";
import { AnimatePresence } from 'framer-motion';
import { Link, Routes, Route, useLocation } from "react-router-dom";
import MenuLink from "./tools/menuLink.js"

var currentAnswer = null;

function App() {

  const location = useLocation();

  return (
    <div className="App" id="app">

      <div className="navMenu" id="navmenu">
        <div className="navOptions" id="navoptions">
          <MenuLink link="" text="HOME" id="homepage"/>
          <MenuLink link="wedding" text="WEDDING" id="weddingpage" />
          <MenuLink link="story" text="OUR STORY" id="storypage" />
          <MenuLink link="travel" text="TRAVEL" id="travelpage" />
          <MenuLink link="gifts" text="GIFTS" id="giftspage" />
          <MenuLink link="#rsvpform" text="RSVP" action={"rsvp"} id="rsvppage" />
          <a className="navOption" onClick={e => toggleFAQ()}><p className="navOptionText">FAQ</p></a>
        </div>
        <div className="menuButton" onClick={e => openMenu()}>
          <p className="menuButtonText">MENU</p>
        </div>
      </div>

      <div className="faqSection" id="faqsection">
        <p className="faqHeader">Questions?</p>
        <button className="faqClose" onClick={e => toggleFAQ()}>+</button>

        <button className="question" onClick={e => triggerCollapse(0)}>What date should I RSVP by?</button>
        <div className="answerDiv">
          <p className="answer">Please RSVP <span className="faqLink" onClick={e => openLink("rsvppage")}>here</span> by Wednesday, March 6th, 2024.</p>
        </div>
        <button className="question" onClick={e => triggerCollapse(1)}>What day/time will the wedding take place?</button>
        <div className="answerDiv">
          <p className="answer">The wedding will take place on Saturday, April 6th, 2024 at 5:30 pm.</p>
        </div>
        <button className="question" onClick={e => triggerCollapse(2)}>What is the address to the venue?</button>
        <div className="answerDiv">
          <p className="answer">The wedding venue is located at 77 Sloan Street, McDonough, GA 30253</p>
        </div>
        <button className="question" onClick={e => triggerCollapse(3)}>Is there parking available at the venue?</button>
        <div className="answerDiv">
          <p className="answer">Yes! There is plenty of parking available onsite at the venue. A backup parking lot will also be available at the bank just across the street.</p>
        </div>
        <button className="question" onClick={e => triggerCollapse(4)}>Is this an indoor or outdoor event?</button>
        <div className="answerDiv">
          <p className="answer">The ceremony will take place outdoors, weather permitting. Cocktail hour/dancing will take place on a covered veranda, while the main reception will take place indoors.</p>
        </div>
        <button className="question" onClick={e => triggerCollapse(5)}>Am I allowed to bring a plus one?</button>
        <div className="answerDiv">
          <p className="answer">Due to limited space, we are only able to accommodate those guests formally invited on your wedding invitation. If you received a plus one, they will appear under your name when you RSVP. Thank you for understanding!</p>
        </div>
        <button className="question" onClick={e => triggerCollapse(6)}>Are kids invited?</button>
        <div className="answerDiv">
          <p className="answer">We love your little ones! However, we have decided to keep our wedding and reception an adults-only event with the exception of immediate family. We encourage you to use this evening as a date night!</p>
        </div>
        <button className="question" onClick={e => triggerCollapse(7)}>Have you reserved blocks of rooms at one or more hotels?</button>
        <div className="answerDiv">
          <p className="answer">We are currently working on a room block agreement with the Hilton Garden Inn and will post a link to those reservations here shortly!</p>
        </div>
        <button className="question" onClick={e => triggerCollapse(8)}>What transportation options will be available in the area?</button>
        <div className="answerDiv">
          <p className="answer">We recommend utilizing car rental services as well as Uber/Lyft to get around. We especially recommend reserving an Uber ahead of time on the day of the wedding to ensure 
            timely arrival to the event. Traffic in McDonough/Atlanta can be unpredictable so be sure to keep this in mind!</p>
        </div>
        <button className="question" onClick={e => triggerCollapse(9)}>What is the dress code?</button>
        <div className="answerDiv">
          <p className="answer">Cocktail attire. We suggest that men wear a suit or dress shirt with tie and women wear a mid-length, knee-length, or floor-length dress or dressy separates. No jeans or sneakers, please!</p>
        </div>
        <button className="question" onClick={e => triggerCollapse(10)}>What is the weather like in the area?</button>
        <div className="answerDiv">
          <p className="answer">The average daily high temperature in Atlanta in April is 71°F. The average daily low is 51°F. We are hoping for a sunny day, but you might want to consider bringing a light jacket/wearing long sleeves just in case!</p>
        </div>
        <button className="question" onClick={e => triggerCollapse(11)}>What is the wedding day itinerary?</button>
        <div className="answerDiv">
          <p className="answer">The ceremony will begin promptly at 5:30 pm, followed by cocktail hour at 6 pm. At 7 pm, the reception will begin which includes dinner and dancing until the wedding ends at 10:00 pm.</p>
        </div>
        <button className="question" onClick={e => triggerCollapse(12)}>What time should I arrive at your wedding ceremony?</button>
        <div className="answerDiv">
          <p className="answer">We encourage you to arrive at 5:00 pm. This will give you time to park, sign our guestbook, find seats, and converse with other guests before the ceremony begins promptly at 5:30 pm. </p>
        </div>
        <button className="question" id="lastquestion" onClick={e => triggerCollapse(13)}>Could you suggest places to visit while I am in town?</button>
        <div className="answerDiv">
          <p className="answer">Yes! You can click <span className="faqLink" onClick={e => openLink("travelpage")}>here</span> to check out our Travel and Accommodations page for info on things to do in the area. </p>
        </div>
      </div>

      <div className="shadow" id="shadow" onClick={e => toggleFAQ()}></div>

      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/story" element={<Story />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/gifts" element={<Gifts />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;

function toggleFAQ() {
  document.getElementById("faqsection").classList.toggle("show")
  document.getElementById("faqsection").scrollTo({ top:0, behavior: "smooth" });
  document.getElementById("shadow").classList.toggle("show")
}

function openLink(id) {
  toggleFAQ();
  document.getElementById(id).click()
}

function triggerCollapse(id) {
  if (currentAnswer !== null) {
    document.getElementsByClassName("question")[currentAnswer].classList.toggle("active");
    document.getElementsByClassName("answerDiv")[currentAnswer].classList.toggle("active");
    collapseSection(currentAnswer);
  }
  if (currentAnswer === id)
    currentAnswer = null;
  else {
    expandSection(id);
    document.getElementsByClassName("question")[id].classList.toggle("active");
    document.getElementsByClassName("answerDiv")[id].classList.toggle("active");
    currentAnswer = id;
  }
}

function collapseSection(id) {
  var element = document.getElementsByClassName("answerDiv")[id];
  var sectionHeight = element.scrollHeight;
  var elementTransition = element.style.transition;
  element.style.transition = '';

  requestAnimationFrame(function () {
    element.style.height = sectionHeight + 'px';
    element.style.transition = elementTransition;

    requestAnimationFrame(function () {
      element.style.height = 0 + 'px';
    });
  });
}

function expandSection(id) {
  var element = document.getElementsByClassName("answerDiv")[id];
  var sectionHeight = element.scrollHeight;
  element.style.height = sectionHeight + 'px';
  element.addEventListener('transitionend', function (e) {
    element.removeEventListener('transitionend', e);
  });
}

export function openMenu(rsvp) {
  document.getElementById("navmenu").classList.toggle("show");
}
