import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo text-gray-700 dark:text-gray-300">My portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo text-gray-900 dark:text-white">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-gray-300">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
        {workData.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white dark:bg-gray-800 w-[90%] sm:w-10/12 rounded-md absolute bottom-3 left-1/2 -translate-x-1/2 py-3 px-4 sm:px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div className="text-gray-900 dark:text-white">
                <h2>{project.title}</h2>
                <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
              </div>
              
                <Link href={project.link || '#'} target="_blank" className="border border-black dark:border-white rounded-full w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] dark:shadow-[2px_2px_0_#fff] group-hover:bg-lime-300 transition"  >
                <Image src={assets.send_icon} alt="send icon" className="w-5" /> </Link>
              
            </div>
          </div>
        ))}
      </div>

      <a
        href=""
        className={"w-max flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300 border-[0.5px] border-gray-700 dark:border-gray-400 rounded-full py-3 px-10 mx-auto my-20 hover:bg-gray-100 dark:hover:bg-gray-800 duration-500 transition-colors"}
      >
        Show more{" "}
        <Image
          src={assets.right_arrow_bold}
          alt="Right arrow"
          className="w-4 dark:invert"
        />
      </a>
    </div>
  );
};

export default Work;
