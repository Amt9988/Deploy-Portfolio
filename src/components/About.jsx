// import React from 'react'
import png from "../assets/Developer image.jpg"
export default function About() {
  return (
    <>
      <div className="hidden md:grid h-fit w-full bg-sky-100 text-slate-700">
        <div className="">
          <h1 className="text-3xl font-serif font-bold text-center">ABOUT US</h1>
        </div>
      </div>
      <div className="hidden md:grid h-fit w-full bg-sky-100 text-slate-600">
        <div className="h-full w-full grid grid-cols-2">
          <div className="h-full w-full mx-8 mt-12">
            <img className="h-[300px] w-[300px] rounded-full" src={png} alt="this is developer images" />
          </div>
          <div className="h-full w-full   mt-12 px-6">
            <h1 className="text-xl font-serif font-bold mt-6 text-justify">
              As a seasoned Full Stack Developer, I bring a comprehensive skill
              set that spans both front-end and back-end technologies, allowing
              me to deliver end-to-end solutions that drive business success and
              enhance user experiences. With a strong foundation in designing,
              developing, and deploying web applications, I am adept at
              leveraging a wide range of tools and frameworks to build robust,
              scalable, and efficient systems.
            </h1>
            <button className="bg-sky-500 text-white px-4 py-2 rounded-lg shadow-2xl mx-6 my-2">Read More</button>
          </div>
        </div>
      </div>
    </>
  );
}
