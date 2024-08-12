import React from "react";
import africa from "../assets/Images/africa.svg";
import prop from "../assets/Images/prop_img.png";
import GooglePlay from "../assets/APPSTORE & PLAYSTORE BUTTONS/SVG/Asset 2.svg";
import AppleStore from "../assets/APPSTORE & PLAYSTORE BUTTONS/SVG/Asset 1.svg";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoMdLink } from "react-icons/io";
import hillary from "../assets/Images/hillary.jpeg";
import okpoks from "../assets/Images/okpoks.jpeg";
import popup from "../assets/Images/popup.png";
const About = () => {
  return (
    <div>
      <div className="relative w-full min-hin-screen flex flex-col overflow-x-hidden">
        <section className="relative md:pt-[100px] h-screen flex flex-col items-center justify-center gap-4 bg-purple-400">
          <img
            src={africa}
            className="absolute z-[10]  size-[50vw] md:size-[30vw] opacity-40"
          />
          <span className="text-[white]  text-[20px] font-bold px-[10px] py-[10px] bg-[#662D91] relative z-[20]">
            Problem Statement
          </span>
          <div className="md:w-[70vw] w-full px-[10px] text-[white] md:text-[40px] text-[25px] leading-tight text-center relative z-[20] font-machina ">
            In Africa, despite the widespread availability of banking services,
            accessing credit remains a significant challenge. Existing loan
            businesses struggle to recover funds due to consumer resistance and
            predatory practices. The absence of a comprehensive credit system
            hampers economic growth and financial stability for individuals and
            businesses.
          </div>
        </section>
        <section className="w-full h-screen bg-[white] flex md:flex-row flex-col items-center justify-center md:px-[400px]">
          <div className="w-full flex flex-col px-[20px] md:px-0 flex-wrap gap-4  ">
            <div>
              <span className="text-[white]   text-[20px] font-bold px-[10px] py-[10px] bg-[#662D91] relative z-[20]">
                Almond's Solution
              </span>
            </div>

            <div className="md:w-[30vw] w-full font-machina md:text-[20px] text-[12px]">
              Almond is pioneering a working credit system in Nigeria, starting
              with a focus on students. Our solution involves providing access
              to credit through the Almond Banking App, partnered with Safehaven
              Microfinance Bank. This app not only offers financial services but
              also educates users on credit management, aiming to change the
              mindset around credit and debt.
            </div>
          </div>
          <div>
            <div className="relative w-[500px] md:w-[800px] ">
              <img
                src="https://ik.imagekit.io/zjvk6l5gp/128shots_so.png"
                alt="almond app"
              />
            </div>
          </div>
        </section>
        <section className="w-full h-screen bg-[white]">
          <div className="w-full md:px-[100px] px-[20px] gap-4 ">
            <span className="text-[white]   text-[20px] font-bold px-[10px] py-[10px] bg-[#662D91] relative z-[20]">
              Elevator Pitch
            </span>
            <div className="flex gap-10 flex-wrap">
              <div className="md:w-[40vw] font-machina text-[12px] md:text-[20px] mt-[20px]">
                At Almond, we are building a seamless credit system to address
                these financial challenges and inefficiencies. Our process
                integrates evaluation, disbursement, and collection to ensure
                efficiency and reliability. We focus on educating our users
                about credit—how it works, how to maintain a good credit score,
                and how to manage repayments. Starting with students, who are
                more adaptable and open to learning, we aim to instill good
                financial habits early on. We aim to grow our audience within
                the student demographic, with the expectation that they will
                continue using our financial services as they transition into
                the working world. Unlike traditional loans that are
                business-centric, our credit system is customer-focused,
                designed to make financial management easier and more
                sustainable. Through our banking app, we plan to build and
                expand our user base, eventually introducing credit cards and
                broader financial services. Our goal is to create a reliable and
                efficient credit system that empowers Nigerians to manage their
                finances confidently
              </div>
              <div>
                <img src={popup} />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full min-h-screen flex flex-col items-center gap-[100px]">
          <span className="text-[white]   text-[20px] font-bold px-[10px] py-[10px] bg-[#662D91] relative z-[20]">
            Founders
          </span>
          <div
            id="founders"
            className="flex w-full md:px-[350px] flex-wrap  justify-center  space-y-10 md:justify-between "
          >
            <div className=" flex flex-col items-center">
              <div className="relative w-[300px] h-[350px] rounded-[50px] bg-purple-400/20 flex overflow-hidden">
                <img
                  src={okpoks}
                  className="object-cover absolute w-full h-full"
                />
              </div>
              <div>
                <p className="font-bold">CEO/Co-founder</p>
                <span>Ekok Okpokam</span>
                <a
                  href="https://www.linkedin.com/in/ekok-okpokam-12276b182/"
                  className="hover:text-purple-900 flex items-end  gap-2"
                >
                  <IoMdLink />
                  LinkedIn
                </a>
              </div>
            </div>
            <div className=" flex flex-col items-center">
              <div className="relative w-[300px] h-[350px] rounded-[50px] bg-purple-400/20 flex overflow-hidden">
                <img
                  src={hillary}
                  className="object-cover absolute w-full h-full"
                />
              </div>
              <div>
                <p className="font-bold">CTO/Co-founder</p>
                <span>Ogbodo, Hillary</span>
                <a
                  href="https://www.linkedin.com/in/hillary-ogbodo-6352391b0/"
                  className="hover:text-purple-900 flex items-end  gap-2"
                >
                  <IoMdLink />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full  h-[100vh] md:h-[60vh] flex bg-[white] md:flex-row flex-col items-center justify-center px-[20px] gap-[100px] py-[100px]">
          <div className="max-w-[500px] min-h-[300px] rounded-[50px] bg-purple-400/20 flex ">
            <div className=" px-[20px] py-[50px] flex flex-col md:gap-[40px] gap-[20px]">
              <span className="text-[20px] font-medium text-[#662D91] relative z-[20]">
                Market
              </span>
              <p className="text-[17px] text-[#662D91]">
                Africa's growing consumer population needs better financial
                tools. Our focus on students offers a strategic entry point into
                this underserved market.
              </p>
              <div className="text-[#662D91] flex justify-between">
                <span className="font-black text-[30px]">
                  +1.4B{" "}
                  <span className="font-light text-[12px]">
                    People in Africa
                  </span>
                </span>
                <span className="font-black text-[30px]">
                  60%{" "}
                  <span className="underline font-light text-[12px]">
                    <a href="https://au.int/en/youth-development">Under 25</a>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="max-w-[500px] min-h-[300px] rounded-[50px] bg-purple-400/20">
            <div className=" px-[20px] py-[50px] flex flex-col md:gap-[20px]">
              <span className="text-[20px] font-medium text-[#662D91] relative z-[20] flex gap-10">
                Niche
              </span>
              <p className="text-[17px] text-[#662D91]">
                Almond's niche is in providing a holistic approach to credit,
                focusing on education, accessibility, and user experience. By
                targeting students, Almond addresses a specific demographic that
                represents an underserved market with significant potential for
                growth and adoption of new financial tools.
              </p>
            </div>
          </div>
        </section>

        <section
          id="try__banner"
          className="h-[40vh] w-full bg-white flex items-center justify-center  flex-col px-[20px] md:px-0"
        >
          <div className="md:w-[73vw]  h-full rounded-[50px] bg-gradient-to-br from-purple-400 via-purple-500 to-purple-700 flex overflow-hidden">
            <div className="flex px-[20px] items-center justify-center">
              <div className="flex flex-col gap-[20px]">
                <div className="text-[white] text-[30px] font-medium">
                  Join the Future of Finance with Almond
                </div>
                <p className="text-[#662D91] md:w-[70%]">
                  Empower the next generation with accessible credit and
                  financial education. Invest in a sustainable solution for
                  Africa's growing youth population. Together, we can build a
                  stronger, more inclusive economy
                </p>
                <div className="w-full flex   gap-[20px]">
                  <a
                    className="w-[150px] relative"
                    href="https://play.google.com/store/apps/details?id=com.hillary3211.almond"
                  >
                    <img src={GooglePlay} />
                  </a>

                  <a
                    className="w-[150px] relative"
                    href="https://apps.apple.com/ng/app/almond-app/id6479360310"
                  >
                    <img src={AppleStore} />
                  </a>
                </div>
              </div>
              <div className="md:block hidden">
                <img src={prop} />
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact__banner"
          className="md:h-[50vh] w-full  flex justify-center  flex-col  "
        >
          <div className=" flex flex-col md:px-[100px]  px-[20px]  space-y-10 gap-5 text-[#662D91]">
            <span className="text-[50px] font-bold w-full text-center">
              Contact US
            </span>
            <div className=" flex  items-center justify-between flex-wrap">
              <div className="flex flex-col gap-5">
                <MdOutlineEmail className="font-light text-[50px]" />
                <div className="flex flex-col gap-2">
                  <h1 className="text-[40px] font-semibold">Email</h1>
                  <p className="font-light">
                    Send us an email and we'll get back to you promptly.
                  </p>
                  <a className="underline" href="">
                    admin@almondnigeria.com
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <MdOutlineLocalPhone className="font-light text-[50px]" />
                <div className="flex flex-col gap-2">
                  <h1 className="text-[40px] font-semibold">Phone</h1>
                  <p className="font-light">
                    Give us a call during business hours. We're here to help!
                  </p>
                  <a className="underline cursor-pointer" href="">
                    +2348145042045
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <MdOutlineLocationOn className="font-light text-[50px]" />
                <div className="flex flex-col gap-2">
                  <h1 className="text-[40px] font-semibold">Office</h1>
                  <p className="font-light">
                    Visit our office for in-person assistance and support.
                  </p>
                  <a className="underline">Sululere, Lagos, Nigeria. </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
