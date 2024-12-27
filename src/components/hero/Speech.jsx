import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'motion/react'

export const Speech = () => {
  return (
    <motion.div animate={{opacity: [0, 1]}} transition={{ duration: 1}} className="bubbleContainer">
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
    </motion.div>
  )
}
