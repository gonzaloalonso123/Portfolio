import React from "react";
import { motion } from "framer-motion";
import XImage from "../images/x.png";
import Gonzalo from "../images/gonzalo.webp";

export const AboutMe = ({ close }) => {
  return (
    <motion.div
      className="bg-white max-w-4xl p-10 rounded-3xl flex justify-between shadow relative mt-10 md:mt-24"
      style={{
        width: "90%",
        maxHeight: "70vh",
      }}
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
      }}
    >
      <div className="absolute top-4 right-4">
        <img
          src={XImage}
          className="h-3 cursor-pointer hover:scale-110"
          onClick={close}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <h1 className="md:text-xl font-bold">Name:</h1>
        <h1 className="md:text-xl">Gonzalo Alonso</h1>
        <h1 className="md:text-xl font-bold">Years alive:</h1>
        <h1 className="md:text-xl">25</h1>
        <h1 className="md:text-xl font-bold">Location:</h1>
        <h1 className="md:text-xl">🇳🇱 🇪🇸</h1>
        <h1 className="md:text-xl font-bold">Favorite language:</h1>
        <h1 className="md:text-xl">JavaScript/Typescript</h1>
        <h1 className="md:text-xl font-bold">Favorite framework:</h1>
        <h1 className="md:text-xl">React</h1>
        <h1 className="md:text-xl font-bold">Hobbies:</h1>
        <h1 className="md:text-xl">Programming, Music, Sports, Going out</h1>
        <h1 className="md:text-xl font-bold">Email:</h1>
        <h1 className="md:text-xl">gonalonso.gar@gmail.com</h1>
      </div>
      <img
        src={Gonzalo}
        className="w-56 rounded-xl bg-white bg-opacity-70 border-4 m-6 border-black hidden lg:block"
      />
    </motion.div>
  );
};
