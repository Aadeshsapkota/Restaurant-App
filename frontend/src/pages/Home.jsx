import React from 'react'
import Navbar from '../components/jsx/Navbar'
import Footer from '../components/jsx/Footer'
function Home({isLoggedIn}) {
  return (
    <>
      <Navbar isLoggedIn = {isLoggedIn}/>

      <Footer/>
    </>
  )
}

export default Home