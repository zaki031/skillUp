"use client"
import React from 'react'
import { useTheme } from "next-themes";
import {MdOutlineDarkMode,MdLightMode } from "react-icons/md"


const Button = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <button
            onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}
            className='bg-main  transition-all duration-100 text-white  px-2 py-2 text-md md:text-3xl rounded-[50%] fixed bottom-[100px]  right-[50px] z-[100000]'>
          {theme == "dark"?<MdLightMode/>: <MdOutlineDarkMode/> }
        </button>
    )
}

export default Button