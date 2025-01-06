import React from 'react';
import { ReactTyped } from 'react-typed';

// import { github1, linkdin, twitter, profile1 } from '../assets/index';

const github1 = "https://res.cloudinary.com/shivsundar/image/upload/v1735755566/Portfolio/heroSectionIcons/lhxmecadsztvtbvhd5ac.png";

const twitter = "https://res.cloudinary.com/shivsundar/image/upload/v1735755567/Portfolio/heroSectionIcons/wqdcfrhwxsagd7mfiji2.png";

const linkdin = "https://res.cloudinary.com/shivsundar/image/upload/v1735755567/Portfolio/heroSectionIcons/x5l9akx9au3sjl5alf4p.png";

const profile1 = "https://res.cloudinary.com/shivsundar/image/upload/v1735752059/Portfolio/profilePics/kg4jvh2pacm8frooq5iy.png";


function Hero() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center md:pt-2 px-6 lg:px-20 space-y-12 lg:space-y-0">
        {/* Left Side */}
        <div className="lg:w-1/2 text-center lg:text-left flex flex-col gap-7">
           <div className='className="text-5xl md:text-6xl font-extrabold md:flex md:flex-col md:gap-3'>
            <p className='bg-gradient-to-b from-white to-slate-900/10 bg-clip-text text-transparent'>
              Hi, I&#39;m
            </p>
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">

            <ReactTyped strings={["Shivsundar Wakle"]} typeSpeed={100} backSpeed={100} 
            
            loop/>
              
            </span>
            
           </div>
          <div className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>I am a Full Stack Developer.</p>
            <p>I specialize in building scalable web applications.</p>
            <p>I am passionate about learning and implementing new technologies.</p>
          </div>
          <div className="mt-6 flex flex-col gap-4">
            {/* Resume Button */}
            <div>

            <a
             href='https://drive.google.com/file/d/1Bat_TZM3fdrYlUDI0qLE0gwFFIQtK4DU/view?usp=drive_link' target='_blank'
              className="text-lg md:text-xl bg-zinc-900 text-white py-3 px-6 rounded-xl ring-4 ring-purple-700/50 font-bold hover:shadow-lg hover:shadow-slate-800 hover:bg-slate-900 transition">
              📄
              <span className="bg-gradient-to-r from-[#FEAC5E] via-[#C779D0] to-[#4BC0C8] bg-clip-text text-transparent">
                Resume
              </span>
            </a>
                </div>
            {/* Social Media Icons */}
            <div className="flex flex-row space-x-5 mt-4">
              <button onClick={() => window.open('https://github.com/shivsundar3009', '_blank')}>
                <img
                  src={github1}
                  alt="github-link"
                  className="w-12 md:w-14 shadow-lg shadow-gray-300/40  hover:scale-110 transition"
                />
              </button>
              <button onClick={() => window.open('https://www.linkedin.com/in/shivsundar-wakle/', '_blank')}>
                <img
                  src={linkdin}
                  alt="linkedin-link"
                  className="w-12 md:w-14 shadow-lg shadow-gray-300/40  hover:scale-110 transition"
                />
              </button>
              <button onClick={() => window.open('https://x.com/shivsundar3009', '_blank')}>
                <img
                  src={twitter}
                  alt="twitter-link"
                  className="w-12 md:w-14 shadow-lg shadow-gray-300/40  hover:scale-110 transition"
                />
              </button>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={profile1}
            alt="Avatar"
            className="w-48 md:w-64 h-48 md:h-64 rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
