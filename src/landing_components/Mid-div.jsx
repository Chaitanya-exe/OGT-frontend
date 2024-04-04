import React from "react";
import { FcHome } from "react-icons/fc";
import { LiaCertificateSolid } from "react-icons/lia";
import { GiMeditation } from "react-icons/gi";
import { GiHighFive } from "react-icons/gi";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import animation from "../img/Animation - 1712234950082.json";
const variants = {
  initial: {
    x: "-100%",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      // delay:0.4,
      type: "spring",
      stiffness: 100,
      damping: 25,
      // staggerChildren:0.2
    },
  },
};

export default function Middiv() {
  return (
    <div className=" p-1 group/one  text-wrap ">
      <motion.div
        variants={variants}
        initial="initial"
        whileInView="animate"
        className=" my-4 mx-16 p-2 md:w-1/  *:duration-1000 *:ease-linear *:bg-cyan-50  *:shadow *:rounded-lg *:p-3 *:m-4 *:text-slate-900"
      >
        <motion.div
          variants={variants}
          className="delay-100  group-hover/one:opacity-100  hover:delay-75  hover:bg-purple-100 hover:shadow-sm hover:shadow-purple-400"
        >
          <h1 className=" capitalize tracking-wide text-lg pb-2 font-serif">
            Unleash Your{" "}
            <span className="text-blue-700">Potential on a Global Stage</span>{" "}
            for tech startups.
          </h1>
          <p className=" leading-tight">
            Connect & Create isn't just our motive, it's our mission. We
            envision a world where skilled individuals can seamlessly connect
            with exciting projects across the globe. Our platform fosters a
            vibrant marketplace of talent, empowering Developers to showcase
            their expertise and collaborate with businesses seeking the perfect
            fit.
            <span className="inline-flex space-x-2 align-middle text-white mx-1 px-2">
              <FcHome />
              <LiaCertificateSolid />
            </span>
          </p>
        </motion.div>
        <motion.div
          variants={variants}
          className=" delay-200  group-hover/one:opacity-100  hover:delay-75 hover:bg-purple-100 hover:shadow-sm hover:shadow-purple-400"
        >
          <h1 className=" capitalize tracking-wide text-lg pb-2 font-serif">
            Fostering{" "}
            <span className="text-blue-700"> Growth and Building Dreams</span> &
            Easily get Projects
          </h1>
          <p className="leading-tight">
            O G T transcends simple project matchmaking. We aim to cultivate a
            thriving ecosystem for professional growth. By providing access to
            diverse opportunities and fostering meaningful connections, we
            empower Developers to build fulfilling careers, while simultaneously
            enabling businesses to unlock the potential of a globalized
            workforce.
            <span className="inline-flex space-x-2 align-middle text-white mx-1 px-2">
              <GiMeditation className="text-green-500" />
            </span>
          </p>
        </motion.div>
        <motion.div
          variants={variants}
          className=" delay-300  group-hover/one:opacity-100  hover:delay-75  hover:bg-purple-100 hover:shadow-sm hover:shadow-purple-400"
        >
          <h1 className=" capitalize tracking-wide text-lg pb-2 font-serif">
            breaking Down Geographical Barriers:
          </h1>
          <p className=" leading-tight">
            O G T embraces the revolution in remote work. Gone are the days of
            location limitations. Our platform streamlines the process of
            finding and hiring top talent, regardless of geographical
            boundaries. Businesses can now access a wider pool of skilled
            professionals, fostering diversity and expertise within their teams.
            This flexibility empowers Developers to work from anywhere,
            fostering a healthy work-life balance and attracting top talent to
            even the most niche projects.
            <span className="inline-flex space-x-2 align-middle text-white mx-1 px-2">
              <GiHighFive className="text-red-500" />
            </span>
          </p>
        </motion.div>
        <motion.div
          variants={variants}
          className="  delay-500  group-hover/one:opacity-100 hover:delay-75 hover:bg-purple-100 hover:shadow-sm hover:shadow-purple-400 "
        >
          <h1 className=" capitalize tracking-wide text-lg pb-2 font-serif">
            A World of Solutions at Your Fingertips
          </h1>
          <p className=" leading-tight">
            O G T recognizes that successful businesses rely on a network of
            skilled professionals. Our platform extends beyond connecting
            Developers with project work. Businesses can leverage the global
            talent pool to find specialists for a variety of needs, from
            marketing and accounting to design and development. This simplifies
            the process of finding the perfect fit for any business need,
            eliminating geographical constraints and ensuring access to the best
            talent available.
            <span className="inline-flex space-x-2 align-middle text-white mx-1 px-2">
              <BsEmojiHeartEyesFill className="text-yellow-400 bg-red-600 rounded-full" />
            </span>
          </p>
        </motion.div>
      </motion.div>
      <div className=" flex justify-center mt-1 pb-2">
        <div className="flex justify-center items-center flex-col -space-y-64">
          <Link to={"/home"} className="button w-fit">
            Browse Projects
          </Link>
          <div className="">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: animation,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              height="97vh"
              width="36vw"
            />
          </div>
        </div>
      </div>

      {/* <div className="">
        <span className="w-44 h-44 animate-move  rounded-full inline-block  bg-gradient-to-br from-indigo-100 via-sky-100 to-pink-900  blur-sm "></span>
        <span className="w-40 h-40  animate-move2  absolute left-1/4 top-96 rounded-full inline-block  bg-gradient-to-br from-indigo-100 via-sky-100 to-pink-900 opacity-20 -z-0   blur-sm "></span>
        <span className="w-32 h-32 animate-move2 absolute right-44 top-44 rounded-full inline-block  bg-gradient-to-br from-indigo-100 via-sky-100 to-pink-900 opacity-20 -z-0  blur-sm "></span>
      </div> */}
    </div>
  );
}
