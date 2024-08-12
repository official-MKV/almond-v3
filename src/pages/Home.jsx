import React from "react";
import Hero from "../components/Hero";
import bridgecard from "../assets/Images/bridgecard.svg";
import SafeHaven from "../assets/Images/safehaven.svg";
import UfitPay from "../assets/Images/UfitPay.png";
import { features, reviews } from "../data";
import pattern from "../assets/Images/testpattern.png";
import avatar from "../assets/Images/avatar.jfif";
import { FaStar } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { whyus } from "../data";
import deafultImg from "../assets/Images/default.jpg";
import FAQ from "../components/FAQ";
const Home = () => {
  const controls = useAnimation();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const loopAnimation = async () => {
      await controls.start({
        x: [-width, 0],
        transition: { duration: 20, ease: "linear", repeat: Infinity },
      });
    };
    loopAnimation();
  }, [width, controls]);
  return (
    <div>
      <div className=" bg-purple-400 w-full min-h-screen ">
        <Hero />
        <div className="h-[20vh] w-full bg-[#f5f5f5]">
          <div className=" relative w-full flex items-center h-full justify-center gap-[5vw] z-[1000]">
            <div className="absolute top-2 font-helvetica">
              <p>Our Trusted Partners</p>
            </div>
            <div className="w-[200px]">
              <img src={bridgecard} />
            </div>
            <div className="w-[200px]">
              <img src={SafeHaven} />
            </div>
            <div className="w-[200px]">
              <img src={UfitPay} />
            </div>
          </div>
        </div>
        <section
          id="features"
          className="w-full min-h-screen bg-white flex flex-col"
        >
          <div className=" w-full  flex items-center  justify-center text-[30px] font-medium  pt-[30px]">
            What you can do with the Almond App
          </div>
          <div className="  w-full flex flex-wrap items-center justify-center space-y-[50px] md:space-x-[70px]">
            {features.map((item, index) => {
              return <FeaturesCard {...item} index={index} />;
            })}
          </div>
        </section>
        <section
          id="credit__banner"
          className="h-[90vh] w-full bg-white flex items-center justify-center"
        >
          <div className="relative w-[80vw] h-[50vh] rounded-[50px] flex-wrap bg-[black] flex overflow-hidden">
            <div className="z-10 relative flex md:w-1/2 w-full text-[white] flex-col px-[20px] justify-center text-left gap-[20px]">
              <div className="text-[20px] font-bold">
                Build your credit with Almond
              </div>
              <p className="font-light">
                Credit allows you to borrow money now and repay it later, making
                it easier to make significant purchases. Building a good credit
                score with Almond involves timely payments and wise debt
                management. A strong credit score offers benefits like better
                loan rates and higher credit limits. Start building your credit
                with Almond to unlock more financial opportunities.
              </p>
              <div className="flex cursor-pointer relative ">
                <div
                  className="relative  overflow-hidden  px-[10px] py-[7px]  hover:bg-purple-300 bg-purple-500 rounded-[8px] text-white"
                  id="button"
                >
                  <span className="relative z-20">Build Your Credit Today</span>
                  {/* <div class="z-10 absolute inset-0 bg-white/20 bg-opacity-50 backdrop-blur-md rounded-[8px]"></div> */}
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:relative  overflow-hidden absolute md:opacity-100 opacity-70">
              <img src={pattern} className="object-cover" />
            </div>
          </div>
        </section>
        <section
          id="testimonial__section"
          className="w-full h-[50vh] overflow-hidden"
        >
          <motion.div
            className="flex w-full h-full items-center justify-center gap-[50px]"
            animate={controls}
          >
            {reviews.map((item, key) => (
              <TestimonialCard key={key} {...item} />
            ))}
            {reviews.map((item, key) => (
              <TestimonialCard key={`duplicate-${key}`} {...item} />
            ))}
          </motion.div>
        </section>

        <section
          id="whyus__banner"
          className="md:h-[90vh] min-h-[90vh] w-full bg-white flex items-center justify-center  flex-col pb-[100px] "
        >
          <span className="text-[30px] font-bold">Why Almond ?</span>
          <div className="w-[80vw] md:h-[50vh] rounded-[50px] bg-gradient-to-br from-purple-400 via-purple-500 py-[50px] to-purple-700 flex overflow-x-hidden">
            <div className="flex md:flex-row  space-y-10 flex-col md:px-[20px] items-center justify-center md:divide-x-2 divide-[#dbadff] ">
              {whyus.map((item) => {
                return (
                  <div className="px-[50px]  w-full md:max-w-[500px]">
                    <div className="flex flex-col gap-3">
                      <p className="font-medium text-[white] text-[20px]">
                        {item.title}
                      </p>
                      <p className="text-white/90 font-light">{item.content}</p>
                    </div>
                    <div className=" flex items-baseline gap-3 text-[#662D91] cursor-pointer hover:underline transition-all duration-700 ease-in-out ">
                      Learn More <GoArrowUpRight />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section
          id="contact__banner"
          className="min-h-[50vh] w-full  flex justify-center  flex-col  "
        >
          <div className=" flex flex-col py-[100px] md:py-0 md:px-[100px] flex-wrap px-[20px]  text-[white]">
            <span className=" text-[30px] md:text-[50px] font-bold w-full text-center">
              Contact US
            </span>
            <div className=" flex flex-wrap gap-10  items-center justify-between  ">
              <div className="relative flex flex-col md:gap-5 ">
                <MdOutlineEmail className="md:font-light  text-[25px] md:text-[50px]" />
                <div className="flex flex-col gap-2">
                  <h1 className="md:text-[40px] text-[20px] font-semibold">
                    Email
                  </h1>
                  <p className="md:font-light">
                    Send us an email and we'll get back to you promptly.
                  </p>
                  <a className="underline" href="">
                    admin@almondnigeria.com
                  </a>
                </div>
              </div>
              <div className="flex flex-col md:gap-5">
                <MdOutlineLocalPhone className="font-light  text-[30px] md:text-[50px]" />
                <div className="flex flex-col gap-2">
                  <h1 className=" text-[20px] md:text-[40px] font-semibold">
                    Phone
                  </h1>
                  <p className="md:font-light">
                    Give us a call during business hours. We're here to help!
                  </p>
                  <a className="underline cursor-pointer" href="">
                    +2348145042045
                  </a>
                </div>
              </div>
              <div className="relative flex flex-col md:gap-5 justify-end">
                <MdOutlineLocationOn className="font-light  text-[30px] md:text-[50px]" />
                <div className="flex flex-col gap-2">
                  <h1 className=" text-[20px] md:text-[40px] font-semibold">
                    Office
                  </h1>
                  <p className="font-light">
                    Visit our office for in-person assistance and support.
                  </p>
                  <a className="underline">Sululere, Lagos, Nigeria. </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq__section " className="bg-[white]">
          <FAQ />
        </section>
        <section id="contactus__section"></section>
      </div>
    </div>
  );
};

const TestimonialCard = ({ picture, name, university, review, source }) => {
  return (
    <div
      id="testimonial__card"
      className=" flex flex-col min-w-[400px] h-[200px] rounded-[40px] bg-[white] group "
    >
      <div className="h-1/3 px-[20px] flex items-center gap-[20px]">
        <div className="relative size-[50px] rounded-full overflow-hidden">
          <img src={deafultImg} className="" style={{ objectFit: "cover" }} />
        </div>
        <div className="text-black relative flex flex-col">
          <span className="font-bold">{name}</span>
          <span className="text-[gray] text-[12px] ">{university}</span>
        </div>
      </div>
      <div className="h-1/3 text-[15px] px-[20px] text-[gray]">
        <p>{review}</p>
      </div>
      <div className="flex flex-col px-[20px] gap-[10px] pt-[10px]">
        <div className="h-[1px] w-[50%] bg-[gray] opacity-20" />
        <div className="flex gap-2 text-purple-800">
          <FaStar className="" />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <div className="relative w-full justify-center  flex px-[20px]">
          <span className="text-[12px] flex items-center gap-5 text-[gray]">
            Source:
            <FaSquareXTwitter />
          </span>
        </div>
      </div>
    </div>
  );
};
const FeaturesCard = ({ icon, title, description, index }) => {
  return (
    <div
      className={`w-[400px] min-h-[200px] rounded-[20px] shadow-lg ${
        index > 5 ? "hidden" : ""
      } md:relative md:flex overflow-hidden group gap-[15px] flex flex-col`}
    >
      <div id="icon" className="w-full px-[20px] pt-[10px]">
        <span className="relative size-[50px] bg-gradient-to-br  flex items-center z-20 justify-center from-purple-400 to group-hover: to-purple-800 rounded-[20%] shadow-[0px_10px_30px_5px_#b3b9fb]">
          {icon}
        </span>
      </div>
      <div
        id="content"
        className="relative  gap-[10px] flex flex-col px-[20px] z-20 group-hover:text-[white] transition-all duration-1000"
      >
        <p className="text-[20px] font-bold ">{title}</p>
        <p className="font-Aeonik text-[16px] text-[gray] group-hover:text-[white]">
          {description}
        </p>
      </div>
      <div className=" inset-0 absolute w-0 group-hover:w-full transition-all duration-700 ease-in-out  h-full bg-gradient-to-br  from-purple-400 to bg-purple-800 " />
    </div>
  );
};

export default Home;
