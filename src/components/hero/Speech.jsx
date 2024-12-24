import React from 'react'
import { TypeAnimation } from 'react-type-animation'

export const Speech = () => {
  return (
    <div className="bubbleContainer">
        <div className="bubble">
        <TypeAnimation
      sequence={[
        1000, // wait 1s before starting
        'We produce food for Mice',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'We produce food for Hamsters',
        1000,
   
      ]}
      wrapper="span"
      speed={40}
      deletionSpeed={60}
      // omitDeletionAnimation
      repeat={Infinity}
    />
        </div>
        <img src="/boy.png" alt="" />
    </div>
  )
}
