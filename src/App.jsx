// import React from 'react'
import About from './components/About';
import Header from './components/header';
import Main from './components/Main';
import Skills from './components/Skills';
import Project from './components/Project';
import Blog from './components/Blog';
import FeedbackForm from './components/FeedbackForm';
import Footer from './components/Footer';
import Tools from './components/Tools'
export default function App() {
  return (
    <>
      <div>
        <Header/>
        <Main/>
        <About/>
        <Skills/>
        <Tools/>
        <Project/>
        <Blog/>
        <FeedbackForm/>
        <Footer/>
      </div>
    </>
  )
}
