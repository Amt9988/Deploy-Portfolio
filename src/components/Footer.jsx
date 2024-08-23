// import React from 'react'

export default function Footer() {
  return (
    <>
      <div className="hidden md:grid h-fit w-screen">
        <div className="bg-black text-slate-100 px-10 py-8">
          <div className="h-full w-full grid grid-cols-4">
            <div className="h-full w-full text-slate-500 px-2 py-6">
              {/* Services */}
              <div className="h-full w-full justify-center">
                <h1 className="text-center text-2xl font-mono font-bold hover:cursor-pointer border-white border-2 rounded-lg text-slate-50">
                  Service
                  {/* items */}
                </h1>
                <div className="text-base text-slate-500 my-8 space-y-2 text-center">
                  <h1>Web Development</h1>
                  <h1>Mobile Development</h1>
                  <h1>Wordpress Web Development</h1>
                  <h1>Portfolio Website Development</h1>
                  <h1>E-commerce Website Development</h1>
                  <h1>Landing Page Development</h1>
                  <h1>Software Development</h1>
                </div>
              </div>
            </div>
            {/* Web Projects */}
            <div className="h-full w-full text-slate-500 px-2 py-6">
              <div className="h-full w-full justify-center">
                <h1 className="text-center text-2xl font-mono font-bold hover:cursor-pointer border-white border-2 rounded-lg text-slate-50 ">
                  Web Projects
                </h1>
                <div className="text-base text-slate-500 space-y-2 my-8">
                  <h1>
                    <a href="#">Blogging Website (pending)</a>
                  </h1>
                  <h1>
                    <a href="#">E-commerce Website (Pending)</a>
                  </h1>
                  <h1>
                    <a href="#">Tic Tac Toe Game (Pending)</a>
                  </h1>
                  <h1>
                    <a href="#">Wait for this Project</a>
                  </h1>
                  <h1>
                    <a href="#">Wait for this Project</a>
                  </h1>
                  <h1>
                    <a href="#">Wait for this Project</a>
                  </h1>
                  
                </div>
              </div>
            </div>
            {/* Android App */}
            <div className="h-full w-full text-slate-500 px-2 py-6">
              <div className="h-full w-full justify-center">
                <h1 className="text-center text-2xl font-mono font-bold hover:cursor-pointer border-white border-2 text-slate-50 rounded-lg">
                  Android Apps
                </h1>
                <div className="my-8 space-y-2">
                  <h1>
                    <a href="#">General Knowledge</a>
                  </h1>
                  <h1>
                    <a href="#">Python Tutorials</a>
                  </h1>
                  <h1>
                    <a href="#">NCERT Math</a>
                  </h1>
                  <h1>
                    <a href="#">Game App</a>
                  </h1>
                  <h1>
                    <a href="#">Musice App</a>
                  </h1>
                  <h1>
                    <a href="#">E-commerce App</a>
                  </h1>
                </div>
              </div>
            </div>
            {/* Contact Us */}
            <div className="h-full w-full text-slate-500 px-2 py-6">
              <div className="h-full w-full justify-center">
                <h1 className="text-center text-2xl font-mono font-bold hover:cursor-pointer border-white border-2 rounded-lg text-slate-50">
                  Contact US
                </h1>
                <div className="my-8 space-y-2">
                  <h1>
                    <a href="#">Instagram</a>
                  </h1>
                  <h1>
                    <a href="#">Facebook</a>
                  </h1>
                  <h1>
                    <a href="#">ay3106222@gmail.com(Email Id)</a>
                  </h1>
                  <h1>
                    <a href="#">Linkedin</a>
                  </h1>
                  <h1>
                    <a href="#">Github</a>
                  </h1>
                  <h1>
                    <a href="#">Twitter</a>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          {/* here we can add some urls */}
        </div>
      </div>
    </>
  );
}
