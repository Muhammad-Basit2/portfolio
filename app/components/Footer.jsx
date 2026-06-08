import { useTheme } from "next-themes";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Footer = () => {
const [mounted, setMounted] = useState(false)
const { theme } = useTheme()
useEffect(() => setMounted(true), [])


  return (
    <div className="mt-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <div className="text-center">
        <Image src={mounted && theme === 'dark' ? assets.logo_dark : assets.logo} alt="" className="w-36 mx-auto mb-2" />
        <div className="w-max flex items-center gap-2 mx-auto text-gray-700 dark:text-gray-300">
          <Image src={assets.mail_icon} alt="" className="w-6 dark:invert" />
          muhammadbasit9274@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 dark:border-gray-600 mx-[10%] mt-12 py-6">
        <p className="text-gray-700 dark:text-gray-300">©️ 2026 Basit. All right reserved</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="blank" href="https://github.com/Muhammad-Basit2" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              GitHub
            </a>
          </li>
          <li>
            <a target="blank" href="https://www.linkedin.com/in/muhammad-basit-664247404?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              LinkedIn
            </a>
          </li>
          <li>
            <a target="blank" href="https://www.instagram.com/xmart.basit?igsh=cHMyeGhyMjdxNm10" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
