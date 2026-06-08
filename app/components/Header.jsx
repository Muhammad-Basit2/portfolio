import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <div>
        <Image src={assets.profile_img} alt='' className='rounded-full w-32 dark:bg-none' priority />
        
      </div>
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo text-gray-900 dark:text-white'>Hi! I'm Basit <Image src={assets.hand_icon} alt='' className='w-6' /> </h3>
      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo text-gray-900 dark:text-white'>
        frontend web developer based in Pakistan.
      </h1>
      <p className='max-w-2xl mx-auto font-Ovo text-gray-700 dark:text-gray-300'>
        I am a frontend developer from Gujrat,Pakistan .....
      </p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href="#contact"
        className='px-10 py-3 border border-gray-900 dark:border-white rounded-full bg-black dark:bg-white text-white dark:text-black flex item-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors'
        >contact me <Image src={assets.right_arrow_white} alt='' className='w-4 dark:invert'/> </a>
      
        <a href="/sample-resume.pdf" download 
        className='px-10 py-3 border rounded-full border-gray-500 dark:border-gray-400 text-gray-900 dark:text-white flex item-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors' >my resume <Image src={assets.download_icon} alt='' className='w-5 dark:invert'/> </a>
      
      </div>
    </div>
  )
}

export default Header
