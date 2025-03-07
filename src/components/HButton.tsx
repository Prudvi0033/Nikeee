import { motion } from "framer-motion"
const HButton = () => {
    return (
        <div className=" [perspective :: 1000px] [transform-style:preserve-3d] flex h-screen w-full bg-neutral-900 items-center justify-center">
            <motion.div 
            whileHover={{
                rotateX : 20,
                rotateY : 20,
                boxShadow : '0px 10px 30px rgba(8, 112, 184, 0.7)',
                y : -5
            }}
            whileTap={{
                y : -2
            }}
            transition={{
                duration : 0.3,
                ease : "easeInOut"
            }}
            style={{
                translateZ : 100
            }}
            className="flex group relative items-center">
                <button className="relative text-neutral-500 bg-black px-12 py-4 rounded-lg">
                    <span className="group-hover:text-cyan-500 transition-colors duration-200">Toggle</span>
                </button>
                <span className="absolute mx-auto bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-3/4"></span>
                <span className="absolute opacity-0 transition-opacity duration-200 group-hover:opacity-100 mx-auto bottom-0 inset-x-0 h-[4px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-sm w-full"></span>
            </motion.div>
        </div>

    )
}

export default HButton