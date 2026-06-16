import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo text-gray-700 dark:text-gray-300'>What i offer</h4>
      <h2 className='text-center text-5xl font-Ovo text-gray-900 dark:text-white'>My services</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-gray-300'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dignissimos, mollitia debitis rerum maxime nemo, corrupti, sapiente voluptates deleniti eos illo quibusdam perferendis quisquam. Molestias ea cupiditate vel consectetur quo!
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10 '>
        {serviceData.map(({icon, title, description, link},index)=>(
            <div key={title}
           className='border border-gray-400 dark:border-gray-600 rounded-lg px-8 py-12 cursor-pointer hover:bg-gray-200 hover:scale-105 focus:outline dark:hover:bg-gray-800 hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-900' >
                <Image src={icon} alt='' className='w-10 dark:invert'/>
                <h3 className='text-lg my-4 text-gray-700 dark:text-gray-200'>{title}</h3>
                <p className='text-sm text-gray-600 dark:text-gray-400 leading-5'>{description}</p>
                <a href="{link}" className='flex items-center gap-2 text-sm mt-5 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'>Read more <Image src={assets.right_arrow}  alt='' className='w-4 dark:invert'/></a>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Services
