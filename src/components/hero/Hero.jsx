import React from 'react'
import './hero.css'
import { Speech } from './Speech'
const Hero = () => {
  return (
    <div className="hero">
      <div className="hSection left">
        {/* title */}
        <h1 className="hTitle">Hey there, <br /> <span>I'm Guy!</span></h1>
       {/* awards */}
        <div className="awards">
          <h2>Blockchain & Front-end dev</h2>
          <p>Lorem ipsum dolor sit amet, consectetur. Fugit, harum!</p>
          <div className="awardList">
            <img src="/award1.png" alt="" />
            <img src="/award2.png" alt="" />
            <img src="/award3.png" alt="" />
          </div>
        </div>
        {/* scroll svg */}
        <a href="#services" className="scroll">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            width="50px"
            height="50px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" width="50px"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M5 15C5 16.8565 5.73748 18.6371 7.05023 19.9498C8.36299 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9497 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9497 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36299 2.73754 7.05023 4.05029C5.73748 5.36305 5 7.14348 5 9V15Z"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <path
                d="M12 6V10"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </a>
        <div />
      </div>
      <div className="hSection right">
          {/* follow */}
          <div className="follow">
            <a href="/">
              <img src="/facebook.png" alt="" />
            </a>
            <a href="/">
              <img src="/instagram.png" alt="" />
            </a>
            <a href="/">
              <img src="/youtube.png" alt="" />
            </a>
            <div className="followTextContainer">
              <div className="followText">Follow me</div>
            </div>
          </div>
          {/* bubble */}
          <Speech />
          {/* certificate */}
          <div className="certificate">
            <img src="/certificate.png" alt="" />
            LMA CERTIFIED <br />
            PROFESSIONAL <br />
            DESIGNER
          </div>
          {/* contact button */}
          <a href="/#contact" className="contactLink">
            <div className="contactButton">
              <svg viewBox="0 0 200 200" width="150" height="150">
                <circle cx="100" cy="100" r="90" fill="pink" />
                <path
                  id="innerCirclePath"
                  fill="none"
                  d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                />
                <text className="circleText">
                  <textPath href="#innerCirclePath">Hire Now •</textPath>
                </text>
                <text className="circleText">
                  <textPath href="#innerCirclePath" startOffset="44%">
                    Contact Me •
                  </textPath>
                </text>
              </svg>
              <div className="arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="50"
                  height="50"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                >
                  <line x1="6" y1="18" x2="18" y2="6" />
                  <polyline points="9 6 18 6 18 15" />
                </svg>
              </div>
            </div>
          </a>
        </div>
        <div className="bg">
          {/* 3d */}
          <div className="hImg">
            <img src="/guy.jpeg" alt="" />
          </div>
        </div>
    </div>
  )
}

export default Hero