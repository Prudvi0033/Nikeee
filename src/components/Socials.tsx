import { useState } from "react";
import { motion } from "framer-motion";

import twitter from "../assets/twitter.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import gmail from "../assets/gmail.png";
import discord from "../assets/discord.svg";

const icons = [linkedin, twitter, discord, github, gmail];

const Socials = () => {


    return (
        <div className="mb-8 p-4 dm-sans rounded-lg">
            <motion.div className="grid grid-cols-3 gap-4">
                <div className="grid text-xl font-extrabold text-white tracking-widest">
                    <span>SOCI</span>
                    <span>LAS.</span>
                </div>
                {icons.map((icon, index) => (
                    <div key={index} className="border border-neutral-600 border-double p-2 rounded-lg">
                        <img src={icon} className="text-white" width={30} height={30} alt="" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Socials;
