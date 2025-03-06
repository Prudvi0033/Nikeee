import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
const Box = () => {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <div className="flex justify-center p-10">
            <div className="flex flex-col">
                    <motion.button layout onClick={() => { setIsVisible(!isVisible) }} className='bg-blue-400 p-2 mb-8 rounded-md'>Click</motion.button>
                <AnimatePresence mode='wait'>

                    {isVisible && (
                        <motion.div
                            initial={{
                                rotate: '0deg',
                                scale: 0
                            }}
                            animate={{
                                rotate: "120deg",
                                scale: 1
                            }}
                            transition={{
                                duration: 1,
                                type: 'spring',
                                ease: 'backInOut'
                            }}
                            exit={{
                                rotate: '30deg'
                            }}
                            className="bg-white p-10 rounded-md">
                            Box
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Box