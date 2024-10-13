// @flow strict

import * as React from 'react';

function ProjectCard({ project }) {

  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <div className="flex justify-center w-full">
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl"
          >
            {project.name}
          </a>
        </div>
      </div>
      <div className="group overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8 cursor-pointer">
        <img
          src={project.image}
          alt={`${project.name} screenshot`}
          className="w-full h-72 object-cover rounded-t-lg transform transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
        <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
          <div className="flex space-x-4 mb-4">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">View on GitHub</a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">Live Demo</a>
          </div>
          <div className="flex flex-wrap mb-2">
            {project.tools.map((tech, index) => (
              <span key={index} className="bg-gradient-to-r from-pink-500 to-violet-600 text-white text-xs font-semibold mr-2 mb-2 px-3 py-1 rounded-lg transition duration-300 hover:bg-purple-500 hover:shadow-lg transform hover:scale-105">
                {tech}
              </span>
            ))}
            <p className="text-white text-sm lg:text-base mb-2">{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;