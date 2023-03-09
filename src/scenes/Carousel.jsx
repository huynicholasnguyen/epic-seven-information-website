import React from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import Arby from '../assets/arby.png';
import Choux from '../assets/choux.png';
import Kawerik from '../assets/kawerik.png';
import LcBellona from '../assets/lcbellona-build.png';
import Zahhak from '../assets/zahhak.png';

function Carousel() {
    const slides = [
        {Choux},{Arby}, {Kawerik}, {LcBellona}, {Zahhak},
    ];

    return(
        <div className = 'max-w-[1400px] h-[700px] w-full m-auto py-16 px-4 relative group'>
            <div style = {{backgroundImage: slides[0]}}className = 'w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
            {/*LEFT ARROW*/}
            <div className = 'hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft size = {30} />
            </div>

            {/*RIGHT ARROW*/}
            <div className = 'hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight size = {30} />
            </div>
        </div>
    )
}

export default Carousel;