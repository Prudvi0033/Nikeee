import { motion } from 'framer-motion'
import { useState } from 'react'

const Spring = () => {
    const [state, setState] = useState(false)
    return (
        <div className='flex flex-col gap-4'>
            <button
                onClick={() => { setState(!state) }}
                className='bg-cyan-700 px-3 rounded-md py-2'>Toggle</button>
            {state && (
                <motion.div 
                initial = {{
                    x : -100
                }}

                animate = {state ?{ 
                    x : 100,
                    rotate : 180
                } : {x : -100}}
                
                transition={{
                    duration : 1,
                    type : 'spring',
                    stiffness : 90
                }}
                className='bg-cyan-500 p-12 rounded-md'></motion.div>
            )}
        </div>
    )
}

export default Spring