import { ArrowBigRightDash, ArrowRight, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const Stagger = () => {
    const [isOpen, setIsOpen] = useState(false);

    const items = ["item1", "item2", "items3", "item4"]

    const barVariants = {
        open: {
            width: "16rem",
            opacity: 1,
            transition: { duration: 0.5 },
        },
        close: {
            opacity: 0,
            transition: { duration: 0.3 },
            ease: 'easeInOut'
        },
    };

    const childVarients = {
        open: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" },
          },
          close: {
            opacity: 0,
            y: -10,
            transition: { duration: 0.2, ease: "easeIn" },
          },
    }

    const staggeredVarients = {
        open: {
            transition: {
                staggeredChildren: 0.2,
                delayChildren: 0.3
            }
        },
        close: {
            transition: {
                staggeredChildren: 0.1,
                delayChildren: 0
            }
        }
    }

    return (
        <div className="flex items-center">
            {!isOpen && (
                <button
                    className="bg-white rounded-full p-4 shadow-md"
                    onClick={() => setIsOpen(true)}
                >
                    <ArrowBigRightDash size={30} />
                </button>
            )}

            <motion.div
                initial={false}
                animate={isOpen ? "open" : "close"}
                variants={barVariants}
                className="overflow-hidden bg-white rounded-md shadow-lg"
            >
                {isOpen && (
                    <motion.div
                        initial="close"
                        animate="open"
                        exit="close"
                        variants={childVarients} className="min-h-[12rem] w-64 p-2">
                        <motion.div

                            variants={staggeredVarients}
                            transition={{
                                duration: 0.3
                            }}
                            className="divide-y divide-neutral-300">
                            {items.map((item, index) => (
                                <div key={index} className="flex p-3 justify-between">
                                    {item} <ArrowRight className="text-neutral-400" />
                                </div>
                            ))}
                            <motion.div
                                variants={childVarients}
                                onClick={() => setIsOpen(false)}
                                className="cursor-pointer flex items-center justify-center p-4"
                            >
                                <X className="text-neutral-400 rounded-full transition-colors" />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default Stagger;
