// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from 'react';
import classes from "./ProfileBar.module.css"
import Video from "../../assets/banner-vid.mp4"

class TextScramble {
    constructor(el) {
      this.el = el;
      this.chars = '!@#$%^&*()_-=+{}:"|<>?,./;';
      this.update = this.update.bind(this);
    }
    setText(newText) {
      const oldText = this.el.innerText;
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise(resolve => (this.resolve = resolve));
      this.queue = [];
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || '';
        const to = newText[i] || '';
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        this.queue.push({ from, to, start, end });
      }
      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      return promise;
    }
    update() {
      let output = '';
      let complete = 0;
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i];
        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar();
            this.queue[i].char = char;
          }
          output += `<span class="dud">${char}</span>`;
        } else {
          output += from;
        }
      }
      this.el.innerHTML = output;
      if (complete === this.queue.length) {
        this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
  }
  




function ProfileBar(){
    const [index, setIndex] = useState(0);
  const textRef = useRef(null);
  const textScramble = useRef(null);

  const phrases = [
    "Ethical Hacker",
    "DevSecOps Engineer",
    "Cyber Security Engineer",
  ];

  useEffect(() => {
    textScramble.current = new TextScramble(textRef.current);

    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    textScramble.current.setText(phrases[index]).then(() => {
      setTimeout(() => {
        // Do something after animation completes if needed
      }, 1000); // Adjust the delay here
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);




return(
    <>
<div className={classes.main}>

    {/* ####################################### */}
    {/* ## Start Of The Video Banner Section ## */}
    {/* ####################################### */}
    <div className={classes.cover1}></div>
        <div className={classes.cover2}></div>
    <div className={classes.s1}>
        <video loop autoPlay muted>
            <source src={Video} />
        </video>
        </div>
    {/* ####################################### */}
    {/* ### End Of The Video Banner Section ### */}
    {/* ####################################### */}
    

    {/* ######################################## */}
    {/* ## Start Of The Profile Image Section ## */}
    {/* ######################################## */}

    <div className={classes.s2}>
        <img src="https://placehold.co/135" alt="Profile Image" />
    </div>

    {/* ######################################## */}
    {/* ### End Of The Profile Image Section ### */}
    {/* ######################################## */}


    {/* ############################### */}
    {/* ## Start Of The Name Section ## */}
    {/* ############################### */}

    <div className={classes.s3}>
        <p className={classes.Name}>Mashrur Rahman</p>
    </div>

    {/* ############################### */}
    {/* ### End Of The Name Section ### */}
    {/* ############################### */}

    {/* ######################################## */}
    {/* ## Start Of The Animated Text Section ## */}
    {/* ######################################## */}

    <i><div className={classes.subtitel} id="subtitel" ref={textRef}></div></i>
    
    {/* ######################################## */}
    {/* ### End Of The Animated Text Section ### */}
    {/* ######################################## */}




{/* ######################################### */}
{/* ###### Start Of The Social Section ###### */}
{/* ######################################### */}
    <div className={classes.s4}>
        <ul>
            <li><i className="bi bi-linkedin"></i></li>
            <li><i className="bi bi-reddit"></i></li>
            <li><i className="bi bi-facebook"></i></li>
            <li><i className="bi bi-github"></i></li>
        </ul>
    </div>


{/* ####################################### */}
{/* ###### End Of The Social Section ###### */}
{/* ####################################### */}
<b className={classes.hr + " " + classes.anim}></b>
<div className={classes.s5}><span>Contact Me <i className="bi bi-send"></i></span></div>


</div>
</>
 );
}

export default ProfileBar