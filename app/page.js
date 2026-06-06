"use client";
import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';

const page = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <About/>
    <Services/>
    <Work/>
    </>
  )
}

export default page
