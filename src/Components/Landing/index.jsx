import { BackgroundImage, Center, Text, Box } from '@mantine/core';
import LandingBg from "../../../public/assets/LandingBg.svg";
import "./landing.css";
import {motion} from "framer-motion";


import { useState, useEffect } from 'react';

const Landing = () => {
    const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = new Date("October 26, 2023").getTime();

  const getTime = () => {
    const currentTime = new Date().getTime();
    const time = deadline - currentTime;

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / (1000 * 60)) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(getTime, 1000);

    return () => clearInterval(interval);
  }, []);
    return (
        <>

    <BackgroundImage
        className = "landingbg"
        src={LandingBg}
      >
            <div className='container'>
            <div className="content">
      <div className="smallContainer">
        <motion.h3 initial={{opacity : 0, y : "-100%"}} animate ={{opacity : 1, y : 0}} transition={{duration : 1.5, delay : 1}} drag dragConstraints = {{left : 0, right : 0, top : 0, bottom : 0}} dragElastic = {1}>27-29th OCTOBER</motion.h3>
        <h1>TRANSFINITTE</h1>
        <h2>Innovation Knows No Bounds</h2>
        <div className="buttonHolder">
          <button id="regbtn" onClick={() => {window.location.href = "/register"}}>REGISTER NOW</button>
          <button id="archbtn">2022 ARCHIVE</button>
        </div>
      </div>
      <motion.div className="timer" initial={{opacity : 0, transform : "scale(0.1)"}} animate ={{opacity : 1, transform : "scale(1)"}} transition={{duration : 1, delay : 1}}>
        <div className="element">
          <div className="time">{days}</div>
          <div className="timeText">DAYS</div>
        </div>
        <div className="element">
          <div className="time">{hours}</div>
          <div className="timeText">HOURS</div>
        </div>
        <div className="element">
          <div className="time">{minutes}</div>
          <div className="timeText">MINUTES</div>
        </div>
        <div className="element">
          <div className="time">{seconds}</div>
          <div className="timeText">SECONDS</div>
        </div>
      </motion.div>
    </div>
            </div>
            </BackgroundImage>
        </>
    )
}


export default Landing;