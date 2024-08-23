// import React from 'react'
import tailwindcss from '../assets/pngwing.com.png'
import Reactjs from '../assets/pngwing.com(1).png'
import Nextjs from '../assets/pngwing.com(2).png'

import Nodejs from '../assets/pngwing.com(4).png'

import Expressjs from '../assets/pngwing.com(3).png'

import Mongodb from '../assets/pngwing.com(5).png'

import SpringBoot from '../assets/pngwing.com(6).png'

import mySQL from '../assets/pngwing.com(7).png'
export default function Skills() {
  return (
    <>
      <div className="hidden md:grid h-fit w-full bg-sky-100 text-slate-100">
        <div className="h-full w-full my-8">
          <h1 className="text-3xl font-bold font-serif text-slate-700 cursor text-center">
            MY SKILLS
          </h1>
        </div>

        <div className="my-6">
          <h1 className="text-2xl text-slate-700 font-sans font-bold text-center">
            FRONTEND SKILLS
          </h1>
        </div>
        <div className="hidden md:flex justify-around h-fit w-full bg-sky-100 text-slate-700 py-2">
          <div className="bg-white px-6 py-8 grid justify-center items-center rounded-md">
            <i className="fa-brands fa-html5 justify-center text-4xl text-red-600"></i>
          </div>

          <div className="bg-white px-6 py-8 grid justify-center items-center rounded-md">
            <i className="fa-brands fa-css3-alt justify-center text-4xl text-sky-400"></i>
          </div>

          <div className="h-fit w-fit bg-white px-6 py-8 grid justify-center items-center rounded-md">
            <img
              className="h-[60px] w-[40px]"
              src={tailwindcss}
              alt=" tailwindcss "
            />
          </div>

          <div className="bg-white px-6 py-8 grid justify-center items-center rounded-md">
            <i className="fa-brands fa-js justify-center text-4xl text-yellow-300"></i>
          </div>

          <div className="h-fit w-fit bg-white px-6 py-8 grid justify-center items-center rounded-md">
            <img className="h-[60px] w-[40px]" src={Reactjs} alt="Reactjs" />
          </div>

          <div className="h-fit w-fit bg-white px-6 py-8 grid justify-center items-center rounded-md">
            <img className="h-[60px] w-[40px]" src={Nextjs} alt="Nextjs" />
          </div>
        </div>

        <div className="bg-sky-100 text-slate-700 h-fit w-full">
          <div className="my-6 mx-auto">
            <h1 className="text-center text-2xl font-sans font-bold">
              BACKEND SKILLS
            </h1>

            <div className="hidden md:flex justify-between items-center mx-12">
              <div className="h-fit w-fit bg-white px-6 py-8 grid justify-center items-center rounded-md">
                <img className="h-[60px] w-[40px]" src={Nodejs} alt="Node js" />
              </div>

              <div className="h-fit w-fit bg-white px-6 py-8 grid justify-center items-center rounded-md">
                <img
                  className="h-[60px] w-[40px]"
                  src={Expressjs}
                  alt="Express js"
                />
              </div>

              <div className="h-fit w-fit bg-white px-6 py-8 grid justify-center items-center rounded-md">
                <img
                  className="h-[60px] w-[40px]"
                  src={Mongodb}
                  alt="Mongodb"
                />
              </div>

              <div className="h-fit w-fit bg-white px-6 py-8 grid justify-center items-center rounded-md">
                <img
                  className="h-[60px] w-[40px]"
                  src={mySQL}
                  alt="mySQL Database"
                />
              </div>

              <div className="h-fit w-fit bg-white px-6 py-8 grid justify-center items-center rounded-md">
                <img
                  className="h-[60px] w-[40px]"
                  src={SpringBoot}
                  alt="Spring Boot framework"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
