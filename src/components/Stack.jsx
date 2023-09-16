import React from "react";
import stack from "../content/stack";
import { motion } from "framer-motion";
import XImage from "../images/x.png";

export const Stack = ({ close }) => {
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
      <div className="absolute top-4 right-4">
        <img
          src={XImage}
          className="h-3 cursor-pointer hover:scale-110"
          onClick={close}
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-6 px-4">
        <h1 className="text-xl font-black">My Tech and Tools</h1>
        <h3>
          These are the technologies and tools I have studied, worked with, or
          used to build my projects.
        </h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 py-10 pb-28 mt-5 max-w-6xl mx-auto relative w-4/5 box-border overflow-y-scroll max-h-full">
        {stack.map((stack) => {
          return (
            <div className="bg-white rounded-2xl flex gap-2 md:gap-4 items-center justify-left p-1 md:p-4 flex-col grid-item shadow mx-auto">
              <img src={stack.image} className="rounded-t-2xl w-20 h-20" />
              <p className="font-black">{stack.name}</p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};
