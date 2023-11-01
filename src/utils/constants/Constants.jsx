import React from "react";

import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

export const MainBoxCategories = [
    { name: "Home", icon: <AiFillHome fontSize={24} />, type: "home" },
    { name: "Trending", icon: <MdLocalFireDepartment fontSize={24} />, type: "category" },
    { name: "Live", icon: <MdLiveTv fontSize={24} />, type: "category" },
]

export const categories = [
    { name: "Music", icon: <CgMusicNote fontSize={24} />, type: "category" },
    { name: "Films", icon: <FiFilm fontSize={24} />, type: "category" },
    { name: "Gaming", icon: <IoGameControllerSharp fontSize={24} />, type: "category" },
    { name: "News", icon: <ImNewspaper fontSize={24} />, type: "category" },
    { name: "Sports", icon: <GiDiamondTrophy fontSize={24} />, type: "category" },
    { name: "Learning", icon: <RiLightbulbLine fontSize={24} />, type: "category" },
    {
        name: "Fashion & beauty",
        icon: <GiEclipse fontSize={24}/>,
        type: "category",
        divider: true,
    },
    { name: "Settings", icon: <FiSettings fontSize={24} />, type: "menu" },
    { name: "Report History", icon: <AiOutlineFlag fontSize={24} />, type: "menu" },
    { name: "Help", icon: <FiHelpCircle fontSize={24} />, type: "menu" },
    { name: "Send feedback", icon: <RiFeedbackLine fontSize={24} />, type: "menu" },
];