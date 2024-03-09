import React from 'react';
import { MoonStar, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
const Hero = () => {
    const { resolvedTheme, theme, setTheme } = useTheme()
    return (
        <div className='h-[100vh] w-100 font-serif dark:bg-black '>
            <div className=' flex justify-center py-20 '>
                <button
                    cursor={"pointer"}
                    onClick={() => {
                        setTheme(resolvedTheme === "light" ? "dark" : "light")
                    }}
                >
                    {theme === "light" ? <MoonStar /> : < Sun />}
                </button>
            </div>
            <div className=" text-5xl  text-center ">
                <h1>Next js Next-Themes</h1>
            </div>

        </div>
    )
}

export default Hero