// import React from 'react'

import Logo from '../assets/a-letter-logo-png-106.png'
export default function header() {
  return (
    <>
      {/* for mobiles */}
      <div className="md:hidden h-fit w-screen bg-sky-500 px-2 py-4 flex justify-between shadow-2xl">
        <div className="h-[30px] w-[30px] mt-4 ml-2 hover:h-[33px] hover:w-[33px]">
          <img src={Logo} />
        </div>
        <div className="text-slate-50 font-bold text-l mt-4 mr-2">
          <button className="bg-slate-50 text-black px-3 py-1 rounded hover:bg-sky-950 hover:text-slate-200">
            Menu
          </button>
        </div>
      </div>

      {/* for web browser */}

      <div className="hidded  md:bg-sky-500 md:text-slate-50 md:h-fit md:w-screen md:px-6 md:py-4 md:flex md:justify-between md:items-center md:shadow-2xl">
        <div className="md:h-[60px] md:w-[60px]  ">
          <img
            className="hidden md:grid md:hover:bg-slate-50 md:hover:rounded-full"
            src={Logo}
          />
        </div>
        <div className="hidden md:space-x-6 md:h-full md:w-full md:flex md:justify-center md:items-center">
          <a
            className="hidden md:grid md:hover:bg-sky-900 md:text-slate-50 md:px-4 md:py-1 md:rounded-sm md:font-bold md:font-serif md:text-xl"
            href="/contact"
          >
            Home
          </a>
          <a
            className="hidden md:grid md:hover:bg-sky-900 md:text-slate-50 md:px-4 md:py-1 md:rounded-sm md:font-bold md:text-xl md:font-serif"
            href="/home"
          >
            About Us
          </a>
          <a
            className="hidden md:grid md:hover:bg-sky-900 md:text-slate-50 md:px-4 md:py-1 md:rounded-sm md:font-bold md:text-xl md:font-serif"
            href="/about"
          >
            Blogs
          </a>

          <a
            className="hidden md:grid md:hover:bg-sky-900 md:text-slate-50 md:px-4 md:py-1 md:rounded-sm md:font-bold md:text-xl md:font-serif"
            href="/about"
          >
            Projects
          </a>
        </div>
        <div className="md:h-fit md:w-fit">
          <button className="hidden md:grid md:bg-sky-800 md:px-5 md:py-0 md:rounded md:mx-2 md:hover:bg-sky-950 md:hover:text-slate-200">
            Download CV
          </button>
        </div>
      </div>
    </>
  );
}
