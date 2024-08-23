// import React from 'react'
import Roadmap from '../assets/Roadmap images.jpeg'
export default function FeedbackForm() {
  return (
    <>
      <div className="h-fit w-screen bg-sky-100 text-slate-700">
        <h1 className="text-center text-xl font-bold font-serif">
          Feedback Form
        </h1>
        <div className="h-fit w-full grid flex-wrap grid-cols-[40%_60%]">
          <div className="bg-blue-500 text-white h-fit w-full mx-6 my-10 rounded-lg">
             <div className="h-fit w-full mx-auto">
                <h1 className="text-center text-xl font-serif font-bold">RoadMap of Full Stock Developer</h1>
             </div>
             <div className='w-full h-full flex justify-center mb-4 mt-6'>
              <img className='h-[250px] w-[400px] rounded-xl shadow-xl' src={Roadmap} alt="Roadmap Images "/>
             </div>
          </div>

          <div className="bg-white text-blue-500 h-fit w-full mx-6 my-10 shadow-xl border-spacing-3">
            <h1 className="text-center mt-6 text-2xl font-serif font-bold">
              Submit Your Feedback
            </h1>
            <div className="grid justify-center text-black">
              <div className="">
                <input
                  className="  text-lg font-serif font-bold mt-2 text-center bg-sky-200"
                  type="text"
                  placeholder="Enter Your Name"
                />
              </div>

              <div className="border-slate-900">
                <input
                  className="text-black text-lg font-serif font-bold mt-2 text-center bg-sky-200"
                  type="email"
                  placeholder="Enter You Email"
                />
              </div>
               <div>
                 <textarea className='resize-none bg-sky-200 text-black mt-2 w-[280px] h-[100px] px-2 py-2 text-xl' placeholder='Enter Your Feedback'/>
               </div>
              <div className="flex justify-around my-2 mb-12">
                <div className="">
                  <button className="bg-sky-500 text-slate-200 px-3 py-2 rounded-xl">
                    Submit
                  </button>
                </div>
                <div className="">
                  <button className="bg-sky-500 text-slate-200 px-3 py-2 rounded-xl font-serif">
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
