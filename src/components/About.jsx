import React from 'react'
import profile2 from "assets/profilePics/profile2.png"
function About() {
    return (
        <section id='about' className="bg-white dark:bg-gray-900 py-16">
          <div className="container mx-auto flex flex-col lg:flex-row items-center px-6 lg:px-20">
            {/* Left Side: Avatar */}
            <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
              <img
                src={profile2}
                alt="About Avatar"
                className="w-64 h-64 shadow-lg "
              />
            </div>
            {/* Right Side: Description */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                About Me
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                I&#39;m a dedicated Full Stack Developer with expertise in the MERN stack
                and a passion for creating user-friendly, scalable applications. I
                love tackling complex problems and delivering efficient solutions.
              </p>
            </div>
          </div>
        </section>
      );
}

export default About
