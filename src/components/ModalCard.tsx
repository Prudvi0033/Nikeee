import { AnimatePresence, motion } from "framer-motion"
import { ActivityIcon, MessageSquareIcon, Presentation, TimerIcon, X } from 'lucide-react'
import { useState } from "react"

const ModalCard = () => {
    const [open, setOpen] = useState(true)
    return (
        <>
        <AnimatePresence>
            {open && (
                <motion.div 
                initial = {{
                    opacity : 0,
                    scale : 0.98,
                    filter : 'blur(10px)'
                }}
                animate = {{
                    opacity : 1,
                    scale : 1,
                    filter : 'blur(0px)'
                }}
                exit={{
                    opacity : 0,
                    scale : 0.98,
                    filter : "blur(10px)"
                }}
                transition={{
                    duration : 0.5,
                    ease : "easeInOut"
                }}
                className='w-72 p-6 raleway bg-white min-h-[28rem] rounded-lg shadow-lg flex flex-col'>

                    <h2 className="font-bold text-[15px]">Shadcn UI Components</h2>
                    <p className="text-[10px] text-neutral-600 mt-2">A collection of beautiful compoenents, Let's get started</p>
                    <div className="flex mt-4 items-center justify-center">
                        <button className="flex shadow-lg text-sm rounded-lg px-6 py-2 gap-2 justify-center items-center">
                            <img className="w-6 h-6" src="https://imgs.search.brave.com/lp-3aJbix5iVF_-PSNSijLaixh20_8befItaIBfyqnk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb2Rl/cGFycm90LmFpL2xv/Z28uc3Zn" alt="logo" width={30} height={30} />
                            shadcn
                            <span onClick={() => setOpen(false)} className="text-neutral-400"><X size={16} /></span>
                        </button>
                    </div>
                    <div className="bg-gray-100 border shadow-md border-dashed border-neutral-200 flex-1 rounded-lg mt-4 relative">
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.98,
                                filter: "blur(10px)"
                            }}
                            whileHover={{
                                opacity: 1,
                                scale: 1.05,
                                filter: "blur(0px)"
                            }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut"
                            }}
                            className="flex flex-col items-start absolute space-y-3 inset-0 border border-neutral-300 bg-white h-full w-full rounded-lg divide-y divide-neutral-200">

                            <div className="flex justify-center items-center p-2  gap-2">
                                <div className="text-neutral-600 border rounded-lg shadow-lg border-neutral-300 px-2 py-2"><MessageSquareIcon size={16} /></div>
                                <div className="flex flex-col">
                                    <h2 className="text-[12px]">Instant Messaging</h2>
                                    <p className="text-[8px] text-neutral-400">Chat with ease anytime, anywhere</p>
                                </div>
                            </div>

                            <div className="flex justify-center items-center p-2  gap-2">
                                <div className="text-neutral-600 border rounded-lg shadow-lg border-neutral-300 px-2 py-2"><TimerIcon size={16} /></div>
                                <div className="flex flex-col">
                                    <h2 className="text-[12px]">Scheduled Messages</h2>
                                    <p className="text-[8px] text-neutral-400">Plan and send messages at the right time</p>
                                </div>
                            </div>

                            <div className="flex justify-center items-center p-2  gap-2">
                                <div className="text-neutral-600 border rounded-lg shadow-lg border-neutral-300 px-2 py-2"><ActivityIcon size={16} /></div>
                                <div className="flex flex-col">
                                    <h2 className="text-[12px]">Real-time Updates</h2>
                                    <p className="text-[8px] text-neutral-400">Stay informed with live notifications</p>
                                </div>
                            </div>

                            <div className="flex justify-center items-center p-2  gap-2">
                                <div className="text-neutral-600 border rounded-lg shadow-lg border-neutral-300 px-2 py-2"><Presentation size={16} /></div>
                                <div className="flex flex-col">
                                    <h2 className="text-[12px]">Seamless Collaboration</h2>
                                    <p className="text-[8px] text-neutral-400">Work together efficiently with ease</p>
                                </div>
                            </div>

                        </motion.div>
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
        </>
    )
}

export default ModalCard