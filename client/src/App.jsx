import { useState } from 'react'
import './App.css'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Albums from './Pages/Albums'
import Contactus from './Pages/Contactus'
import NotFoundPage from './Pages/NotFoundPage'
import Logo from './Component/Logo'
import IndividualAlbum from './Pages/IndividualAlbum'
import { Footer } from './Component/Footer'
import Genres from './Pages/Genres'
import Eras from './Pages/Eras'




export default function App() {
  

  return (
     <section className='App'>
      <div className='App-header'>
        <Logo/>
        <h1 className='album-mania'>ALBUM-MANIA</h1>
        <div  className='NavBars'>
          <Link to="/" className='navbar-box'>Home</Link>
          <Link to ="/About" className='navbar-box'>About</Link>
          <Link to="/Albums" className='navbar-box'> Albums</Link>
          <Link to="/Contactus" className='navbar-box'>Contact Us</Link>
        </div>
      </div>
      <div className='App-main'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Albums" element={<Albums/>}/>
        <Route path="/Albums/:id" element={<IndividualAlbum/>}/>
        <Route path="/Contactus" element={<Contactus/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
        <Route path="/genres" element={<Genres/>}/>
        <Route path="/eras" element={<Eras/>}/>
      </Routes>
      </div>
      <Footer/>
    </section>
  )
}


