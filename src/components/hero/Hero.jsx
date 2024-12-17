import React from 'react'
import './hero.css'

const Hero = () => {
  return <div className="hero">
    <div className="hSection left">
      {/* title */}
      <h1 className="hTitle">Hey, there, <br /> <span>I'm Guy</span></h1>
      <div className="awards">
        <h2>Top Rated Designer</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, harum!</p>
      {/* awards */}
        <div className="awardList">
          <img src="/award1.png" alt="" />
          <img src="/award2.png" alt="" />
          <img src="/award3.png" alt="" />
        </div>
      </div>
      {/* awards */}
      <a href="#services">
      <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <motion.path
              animate={{ y: [0, 5] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
      </a>
    </div>
    <div className="hSection right"></div>
  </div>
}

export default Hero