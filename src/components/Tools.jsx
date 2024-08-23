// import React from 'react'
import vsCode from '../assets/pngwing.com(13).png'

import AndroidStudio from '../assets/pngwing.com(15).png'

import Git from '../assets/pngwing.com(14).png'

import Github from '../assets/pngwing.com(8).png'

export default function Tools() {
  return (
    <>
      <div className="hidden md:grid h-fit w-screen bg-sky-100 text-slate-700">
        <div>
          <h1 className="text-2xl font-bold font-serif text-center">TOOLS</h1>
        </div>
        <div className="h-fit w-full flex justify-evenly">
          <div>
            <img src={vsCode} alt="VS Code Editor" className="w-[90px]" />
          </div>

          <div>
            <img
              src={AndroidStudio}
              alt="Android Studio"
              className="w-[160px]"
            />
          </div>

          <div>
            <img src={Git} alt="Git Tools" className="w-[90px]" />
          </div>

          <div>
            <img
              src={Github}
              alt="Github"
              className="w-[120px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
