// import React from 'react'
import Cargame from '../assets/car game images.jpeg'
export default function Project() {
  return (
    <>
      <div className="hidden md:grid h-fit w-screen bg-sky-100 text-slate-700 ">
        <h1 className="text-center   text-3xl font-serif font-bold">
          PROJECTS
        </h1>
        <div className="h-fit w-full my-6">
          <div className="flex justify-between h-fit w-full   grid-cols-4 flex-wrap">
            <div className="h-[300px] w-[250px] bg-sky-500 mx-4 my-4 rounded-md">
              <h1 className="text-center text-slate-700 font-mono text-2xl font-bold">
                PC Car Game
              </h1>
              <div className='px-2 py-2'>
                <img className=" h-[200px] w-[300px] rounded-lg" src={Cargame} />
              </div>
              <div className="h-fit w-fit bg-sky-100 grid justify-center items-center mx-4 my-4">
                <button className="px-3 py-1 flex justify-center items-center rounded-lg">
                  <a href="https://amt9988.github.io/Car-Game/">Play Game</a>
                </button>
              </div>
            </div>

            <div className="h-[300px] w-[250px] bg-sky-500 mx-4 my-4 rounded-md">
              <h1 className="text-center">Project01</h1>
            </div>

            <div className="h-[300px] w-[250px] bg-sky-500 mx-4 my-4 rounded-md">
              <h1 className="text-center">Project01</h1>
            </div>

            <div className="h-[300px] w-[250px] bg-sky-500 mx-4 my-4 rounded-md">
              <h1 className="text-center">Project01</h1>
            </div>
          </div>
        </div>

        {/* second line card */}
      </div>
    </>
  );
}
