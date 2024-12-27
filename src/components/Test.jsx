import { animate, motion, stagger } from "motion/react"


const shapeVariants = {
    initialCirc: {
        x: -100,
        opacity: 1
    },
    animateCirc: {
        y: 200,
        opacity: 1,
        transition: {
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 3
        }
    },
    initialRect: {
        x: -100,
        opacity: 0
    },
    animateRect: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 3
        }
    }
}

const listVariants = {
    initialList: {
        x: 20,
        y: -95,
        opacity: 0
    },
    animateList: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            staggerChildren: 1,
        }
    }
}

const Test = () => {
    return (
        <div>
            <section style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <motion.div
                    variants={shapeVariants}
                    initial="initialCirc"
                    animate="animateCirc"
                    style={{ width: "100px", height: "100px", background: "cyan", borderRadius: "50%" }}
                >
                </motion.div>

                <motion.div
                    variants={shapeVariants}
                    initial="initialRect"
                    animate="animateRect"
                    style={{ width: "100px", height: "100px", background: "cyan" }}
                >
                </motion.div>
                <motion.ul 
                variants={listVariants} 
                initial="initialList" 
                animate="animateList"
                style={{listStyle: "none", margin: "10px"}}>
                    <motion.li variants={listVariants} style={{background: "green", borderRadius: "10px"}}>js</motion.li>
                    <motion.li variants={listVariants} style={{background: "red", borderRadius: "10px"}}>react</motion.li>
                    <motion.li variants={listVariants} style={{background: "grey", borderRadius: "10px"}}>next</motion.li>
                </motion.ul>
            </section>
        </div>
    )
}
export default Test
