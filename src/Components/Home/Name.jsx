import React, { useState } from 'react'
import './first.css'

const Name = () => {
    const [exploreClicked, setExploreClicked] = useState(false);

    const handleExploreClick = () => {
        setExploreClicked(true);        
        window.scrollTo({
            top: window.innerHeight/2, 
            behavior: 'smooth' 
        });
    };
    return (
        <>
            <div className='name absolute text-[12vh] md:text-[14vw] text-center flex items-center justify-center top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] select-none bg-[#2322226b] rounded-xl -py-3 px-4 pointer-events-none leading-none'>
                Tarang
            </div>

            <div onClick={handleExploreClick} className='w-fit border-2 border-white text-white absolute top-[90%] rounded-xl px-5 py-3 text-xl font-serif cursor-pointer left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                Explore
            </div>
        </>
    )
}

export default Name