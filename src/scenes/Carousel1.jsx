import React from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import Arby from '../assets/arby.png';
import Choux from '../assets/choux.png';
import Kawerik from '../assets/kawerik.png';
import LcBellona from '../assets/lcbellona-build.png';
import Straze from '../assets/straze.png';
import Vildred from '../assets/vildred.png';
import Zahhak from '../assets/zahhak.png';

const Carousel1 = () => {
  return(
    <div
      id="carouselExampleIndicators"
      class="relative"
      data-te-carousel-init
      data-te-carousel-slide
      >
      <div
        class="absolute right-0 bottom-0 left-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
        data-te-carousel-indicators>
        <button
          type="button"
          data-te-target="#carouselExampleIndicators"
          data-te-slide-to="0"
          data-te-carousel-active
          class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-current="true"
          aria-label="Slide 1"></button>
        <button
          type="button"
          data-te-target="#carouselExampleIndicators"
          data-te-slide-to="1"
          class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-label="Slide 2"></button>
        <button
          type="button"
          data-te-target="#carouselExampleIndicators"
          data-te-slide-to="2"
          class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-label="Slide 3"></button>
      </div>
      <div
        class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        <div
          class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] motion-reduce:transition-none"
          data-te-carousel-item
          data-te-carousel-active>
          <img
            src={Straze}
            class="block w-full"
            alt="Straze" />
        </div>
        <div
          class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] motion-reduce:transition-none"
          data-te-carousel-item>
          <img
            src={Zahhak}
            class="block w-full"
            alt="Zahhak" />
        </div>
        <div
          class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] motion-reduce:transition-none"
          data-te-carousel-item>
          <img
            src={Arby}
            class="block w-full"
            alt="Arby" />
        </div>
      </div>
      <button
        class="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselExampleIndicators"
        data-te-slide="prev">
        <span class="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </span>
        <span
          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Previous</span>
      </button>
      <button
        class="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselExampleIndicators"
        data-te-slide="next">
        <span class="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </span>
        <span
          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Next
        </span>
      </button>
    </div>
  )
}
    

export default Carousel1;