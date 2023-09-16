import React, { useEffect } from "react";
import projects from "../content/projects";
import { motion } from "framer-motion";
import XImage from "../images/x.png";

export const Projects = ({ close }) => {
  return (
    <motion.div
      className="tab"
      initial={{
        y: "100%",
      }}
      animate={{
        y: "0",
      }}
      transition={{
        duration: 0.6,
      }}
    >
      <div className="fixed top-4 right-4">
        <img
          src={XImage}
          className="h-3 cursor-pointer hover:scale-110"
          onClick={close}
          style={{
            top: "12vh",
          }}
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-6 px-4">
        <h1 className="text-xl font-black">My projects</h1>
        <h3>
          These are my projects so far. A combination of web applications,
          desktop applications, and games.
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 py-10 pb-28 mt-5 w-4/5 max-w-6xl mx-auto relative overflow-y-scroll max-h-full px-8">
        {projects.map((project) => {
          return (
            <div className="bg-white shadow-2xl rounded-md">
              <img src={project.image} className="w-full h-2/5 rounded-t-md" />
              <div className="p-4 flex flex-col justify-between items-left h-3/5">
                <h2 className="text-xl md:text-2xl font-black">
                  {project.name}
                </h2>
                <p className="text-lg py-2">{project.description}</p>
                <hr className="w-4/5 m-y-2 bg-black mx-auto" />
                <div className="flex gap-1 items-center justify-between w-full">
                  <div>
                    {project.stack.map((stack) => {
                      return (
                        <div className="flex items-center gap-2">
                          <img src={stack.image} className="w-4" />
                          <p className="font-bold text-4">{stack.name}</p>
                        </div>
                      );
                    })}
                  </div>
                  <div>
                    {project.links.map((link) => {
                      return (
                        <div className="p-0.5 m-0.5 border rounded-md border-gray-300">
                          <a href={link.url} target="_blank">
                            <img src={link.image} className="w-4" />
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};
