import React, { useEffect, useState } from "react";
import Sky from "./images/bg-1.webp";
import ChineseHouses from "./images/chinesehouse.webp";
import Moon from "./images/moon.png";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { Stack } from "./components/Stack";
import { motion } from "framer-motion";
import Gonzalo from "./images/gonzalo.webp";

export const Home = () => {
  const [scroll, setScroll] = useState(0);
  const [currentOpen, setCurrentOpen] = useState("");

  useEffect(() => {
    const scrollListener = window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }, 1000);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full flex flex-col justify-center items-center home">
      <img
        src={Sky}
        className="min-h-max absolute top-0 left-0 -z-10 sky object-cover"
        style={{
          filter: `brightness(${0.1 + scroll / 1000})`,
          height: "200vh",
          minWidth: '100vw'
        }}
      />
      <img
        src={Moon}
        className="absolute top-0 left-50 -z-10"
        style={{
          filter: "drop-shadow(0px 0px 20px #fff)",
          transform: `translateX(-${scroll / 10}px) translateY(-${
            scroll / 10
          }px) scale(${1 + scroll / 1000})`,
          width: "90%",
          maxWidth: "450px",
        }}
      />
      <img
        src={ChineseHouses}
        className="absolute top-0 left-0 -z-10 contain object-cover"
        style={{
          filter: `brightness(${0.2 + scroll / 1000})`,
          transform: `translateY(${scroll / 10}px)`,
          height: "200vh",
          minWidth: '100vw'
        }}
      />
      <div className="flex flex-col justify-center items-center w-full fixed top-0 text-shadow">
        <motion.div
          className="flex py-2 justify-center items-center flex-col"
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <motion.h1
            className="text-3xl md:text-5xl font-black "
            style={{
              textShadow: "0 0 10px #fff",
            }}
          >
            Gonzalo Alonso
          </motion.h1>
          <h2
            className="text-xl md:text-2xl font-black"
            style={{
              textShadow: "0 0 10px #fff",
            }}
          >
            Full Stack Developer
          </h2>
        </motion.div>
        {currentOpen === "" ? (
          <></>
        ) : currentOpen === "About me" ? (
          <AboutMe close={() => setCurrentOpen("")} />
        ) : currentOpen === "Projects" ? (
          <Projects close={() => setCurrentOpen("")} />
        ) : currentOpen === "Stack" ? (
          <Stack close={() => setCurrentOpen("")} />
        ) : (
          <></>
        )}
      </div>
      {currentOpen === "" && (
        <>
          <motion.div
            className="absolute flex flex-col md:flex-row bottom-48 md:bottom-36  md:flex gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            transition={{ delay: 0.8 }}
          >
            <motion.div
              className="header-button"
              onClick={() => setCurrentOpen("About me")}
              variants={item}
              transition={{ type: "spring", stiffness: 100 }}
            >
              About
            </motion.div>
            <motion.div
              className="header-button"
              onClick={() => setCurrentOpen("Projects")}
              variants={item}
              transition={{ type: "spring", stiffness: 100 }}
            >
              Projects
            </motion.div>
            <motion.div
              className="header-button"
              onClick={() => setCurrentOpen("Stack")}
              variants={item}
              transition={{ type: "spring", stiffness: 100 }}
            >
              Tools/tech
            </motion.div>
          </motion.div>
        </>
      )}
    </div>
  );
};
