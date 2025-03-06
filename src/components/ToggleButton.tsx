import {motion} from 'framer-motion'
import { useState } from 'react'

const ToggleButton = () => {
    const [isMoved, setIsMoved] = useState(false)
  return (
    <motion.button
    onClick={() => setIsMoved(!isMoved)}
     className='px-12 py-2 rounded-r-full rounded-l-full bg-purple-500'>
        <motion.button 
        initial = {{
            x : -40
        }}
        animate = {isMoved ? {
            x : 40
        } : {x : -40}}
        transition={{
            duration : 1,
            type : 'spring'
        }}
        className='bg-gradient-to-tr shadow-lg backdrop-blur-md from-zinc-900 via-slate-300 to-white  p-4 px-4 rounded-full'></motion.button>
    </motion.button>
  )
}

export default ToggleButton