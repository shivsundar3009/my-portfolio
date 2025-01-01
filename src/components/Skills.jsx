import React from 'react';

// import { bootstrap, CSS, github, HTML, javascript, mongoDB, mySQL, nodeJs, postman, react, RTK } from '../assets/index';

// import bootstrap from "../assets/skillPics/bootstrap.png";

import bootstrap from "../../public/assets/skillPics/bootstrap.png";

import CSS from "../../public/assets/skillPics/CSS.png";

import HTML from "../../public/assets/skillPics/HTML.png";

import javascript from "../../public/assets/skillPics/javascript.png";

import react from "../../public/assets/skillPics/react.png";

import RTK from "../../public/assets/skillPics/RTK.png";

import nodeJs from "../../public/assets/skillPics/nodeJs.png";

import mongoDB from "../../public/assets/skillPics/mongoDB.png";

import mySQL from "../../public/assets/skillPics/mySQL.png";

import github from "../../public/assets/skillPics/github.png";

import postman from "../../public/assets/skillPics/postman.png";


// import bootstrap from "../assets/skillPics/bootstrap.png";


// import react from "../assets/skillPics/react.png";


// import HTML from "../assets/skillPics/HTML.png";

// import javascript from "../assets/skillPics/javascript.png";

// import react from "../assets/skillPics/react.png";

// import RTK from "../assets/skillPics/RTK.png";

// import nodeJs from "../assets/skillPics/nodeJs.png";

// import mongoDB from "../assets/skillPics/mongoDB.png";

// import mySQL from "../assets/skillPics/mySQL.png";

// import github from "../assets/skillPics/github.png";

// import postman from "../assets/skillPics/postman.png";

// import CSS from "../assets/skillPics/CSS.png"

function Skills() {
  const skills = [
    { name: "HTML", image: HTML },
    { name: "CSS", image: CSS },
    { name: "JavaScript", image: javascript },
    { name: "React", image: react },
    { name: "Redux Toolkit (RTK)", image: RTK },
    { name: "Node.js", image: nodeJs },
    { name: "MongoDB", image: mongoDB },
    { name: "MySQL", image: mySQL },
    { name: "Bootstrap", image: bootstrap },
    { name: "GitHub", image: github },
    { name: "Postman", image: postman },
  ];

  return (
    <section id="skills" className="bg-gray-100 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-lg font-medium text-gray-800 dark:text-white">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
