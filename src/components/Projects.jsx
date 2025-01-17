import React from 'react';

// import { chatApp, currencyConverter, fakeStoreApi, jobPortal } from '../assets/index';\

const jobPortal = "https://res.cloudinary.com/shivsundar/image/upload/v1736506202/Portfolio/projectPics/ulnhngtxwibvic4gvdtq.png";

const currencyConverter = "https://res.cloudinary.com/shivsundar/image/upload/v1735755593/Portfolio/projectPics/yhehltitl0uxqmhmywim.png";

const chatApp = "https://res.cloudinary.com/shivsundar/image/upload/v1735755591/Portfolio/projectPics/ew7eddj9bnlwpk5drays.png";

const fakeStoreApi = "https://res.cloudinary.com/shivsundar/image/upload/v1735755592/Portfolio/projectPics/ng9kf9ez3ysljf5o9v1g.png";



const projects = [
  {
    name: "Chat Application",
    image: chatApp,
    // Video URL for hover functionality - Add hover feature later
    video: "https://path-to-your-chat-app-demo-video.mp4",
    github: "https://github.com/shivsundar3009/chat-app", // Replace with your GitHub link
    live: "https://chat-app-60lc.onrender.com", // Replace with your live demo link
    techStack: ["React", "Node.js","ExpressJs", "MongoDB", "Socket.IO" ,"RTK"], // Add actual tech stack
    description: "A real-time chat application with user authentication, message history, and Socket.IO integration.",
  },
  {
    name: "Fake Store API Project",
    image: fakeStoreApi,
    // Video URL for hover functionality - Add hover feature later
    video: "https://path-to-your-fake-store-demo-video.mp4",
    github: "https://github.com/shivsundar3009/ecommerce-fakeStoreApi-react", // Replace with your GitHub link
    live: "https://ecommerce-fake-store-api-react.vercel.app/", // Replace with your live demo link
    techStack: ["React", "Tailwind CSS", "FakeStoreApi" ,"RTK"], // Add actual tech stack
    description: "An e-commerce platform fetching products from the Fake Store API, styled with Tailwind CSS.",
  },
  {
    name: "Currency Converter",
    image: currencyConverter,
    // Video URL for hover functionality - Add hover feature later
    video: "https://path-to-your-currency-converter-demo-video.mp4",
    github: "https://github.com/shivsundar3009/currency-converter-react", // Replace with your GitHub link
    live: "https://currency-converter-react-nu.vercel.app/", // Replace with your live demo link
    techStack: ["React","ExchnageRate API Integration"], // Add actual tech stack
    description: "A real-time currency converter that fetches live exchange rates using API integration.",
  },
  {
    name: "Job Portal (working)",
    image: jobPortal,
    // Video URL for hover functionality - Add hover feature later
    video: "https://path-to-your-job-portal-demo-video.mp4",
    github: "https://github.com/shivsundar3009/job-portal-mern", // Replace with your GitHub link
    live: "https://job-portal-mern-xi.vercel.app/", // Replace with your live demo link
    techStack: ["React", "Node.js", "MongoDB", "Express.js"], // Add actual tech stack
    description: "A job portal for users to search and apply for jobs, with features like user authentication and job management.",
  },
];

const Projects = () => {
  return (
    <section className="py-10 bg-gray-100 dark:bg-gray-900" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-8">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image Section */}
              <div className="relative w-full h-48">
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details Section */}
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project?.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {project?.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <a
                    href={project?.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    GitHub
                  </a>
                  <a
                    href={project?.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Live Demo
                  </a>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  <strong>Tech Stack:</strong> {project.techStack.join(", ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
