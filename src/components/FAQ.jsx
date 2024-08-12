import React from "react";
import { faq } from "../data";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const FAQ = () => {
  return (
    <div className=" md:w-[80vw] md:px-[100px] px-[20px] flex flex-col gap-[50px]">
      <div>
        <h1 className="text-[40px] font-semibold">
          Frequently Asked Questions
        </h1>
        <p className="font-light">
          Find answers to common questions about our water services and customer
          concerns.
        </p>
      </div>
      <div className="">
        {faq.map((item, key) => {
          return <Row question={item.question} answer={item.answer} />;
        })}
      </div>
    </div>
  );
};

export default FAQ;

const Row = ({ answer, question }) => {
  const [reveal, setReveal] = useState(false);
  return (
    <div
      onClick={() => {
        setReveal(!reveal);
      }}
      className="py-[20px] flex flex-col border-b-[1px] border-b-black gap-[10px] cursor-pointer transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_purple-400] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none flex-wrap"
    >
      <div className="flex justify-between">
        <span className="font-medium">{question}</span>
        <span className="text-[20px] hover:-rotate-90">
          <RiArrowDropDownLine />
        </span>
      </div>
      <AnimatePresence>
        {reveal && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-[14px] font-light w-[60vw]"
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};
