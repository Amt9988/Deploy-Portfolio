// import React from 'react'
import Image from '../assets/Developer.jpeg'

export default function Main() {
  return (
    <>
    {/* For Android Devices */}
      <div className="md:hidden bg-green-200 h-full w-full text-white px-2 py-2">
        <div className='grid grid-cols-2 w-full h-full justify-between '>

          <div className='mx-8 my-6 text-center text-xl font-serif'>
            <h1 className='font-bold text-slate-400 font-serif text-2xl shadow-sm'>Hello 👋</h1>
            <h className='font-bold font-serif text-slate-400 text-2xl shadow-sm'>I'm a Softwere Engineer 💻</h>
            

            <h1 className='text-slate-700 font-bold text-sm font-sans shadow-sm'>I build thing a Softwere App/Web</h1>

            <h1 className='text-slate-700 font-bold font-sans shadow-sm text-xl'>I'm from India</h1>
          </div>
          <div className='px-4 py-4 grid justify-center  items-center cursor-pointer'>
            <img className='rounded-xl w-50 h-40 shadow-2xl ' src={Image}/>

            <div className='flex space-x-6 my-1 mx-3'>
              <div className='md:hidden w-full space-x-4 text-xl  my-2'>
                    <i className="fa-brands fa-linkedin text-sky-500 hover:text-sky-600 cursor-pointer"></i>
                    <i className="fa-brands fa-square-instagram text-red-400 hover:text-red-500 cursor-pointer"></i>
                    <i className="fa-brands fa-facebook text-sky-800 hover:text-sky-900 cursor-pointer"></i>
                    <i className="fa-brands fa-whatsapp text-green-400 hover:text-green-500 cursor-pointer"></i>
                  </div>
            </div>
          </div>

        </div>
        <div className='mx-4 flex justify-between'>
              <button className='bg-sky-400 px-2 py-1 rounded hover:bg-sky-700 hover:text-slate-300 '>Download CV</button>
          </div>
      </div>


      {/* For Desktop devices */}

      <div className='hidden md:grid md:h-fit md:w-screen'>
        <div className='md:h-full md:w-full md:grid md:grid-cols-2 md:bg-sky-100'>
             <div className='md:h-full md:w-full'>
                <div className='h-full w-full   my-16'>
                  <h1 className='mx-10 text-3xl font-sans font-bold text-slate-600'>Hello👋</h1>
                  <h1 className='mx-10 text-3xl font-sans font-bold text-slate-600'>I'm a <span className='font-extrabold'>Softwere Engineer</span> 💻</h1>
                  <h1 className='mx-10 text-xl font-sans font-bold text-slate-600'>I build thing a Softwere App/Web</h1>
                  <h1 className='mx-10 text-3xl font-sans font-bold text-slate-600'>I'm from India</h1>

                  <div className='w-full space-x-4 text-3xl mx-16 my-2'>
                    <i className="fa-brands fa-linkedin text-sky-500 hover:text-sky-600 cursor-pointer"></i>
                    <i className="fa-brands fa-square-instagram text-red-400 hover:text-red-500 cursor-pointer"></i>
                    <i className="fa-brands fa-facebook text-sky-800 hover:text-sky-900 cursor-pointer"></i>
                    <i className="fa-brands fa-whatsapp text-green-400 hover:text-green-500 cursor-pointer"></i>
                  </div>
                </div>
             </div>
             <div className='md:h-full md:w-full'>
                <div className='my-4 '>
                  <img className='h-[300px] w-[300px] mx-auto rounded-full shadow-2xl hover:border-spacing-1' src={Image}/>
                </div>

                <div className='h-fit w-full grid justify-center text-slate-600'>
                  <h1 className='mx-10 text-xl font-sans font-semibold'>Amit Yadav</h1>
                  <h1 className='text-xl font-sans font-semibold'>BCA (Computer Science)</h1>
                </div>
             </div>
        </div>
      </div>
    </>
  )
}
