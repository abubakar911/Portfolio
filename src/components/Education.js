import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const Details = ({ type, time, place, info }) => {
  return (
    <li className="text-center my-8 first:mt-0 last:mb-0 w-[77%] mx-auto flex flex-col items-center justify-between md:w-[100%]">
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl md:text-xl xs:text-[24px] text-primary dark:text-primaryDark">
          {type}
        </h3>
        <span className="capitalize font-medium text-primary/80 dark:text-primaryDark/80 xs:text-sm ">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-md ">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-48">
      <h2 className="font-bold text-6xl mb-28 w-full text-center md:text-5xl xs:text-5xl md:mb-16 text-primary dark:text-primaryDark">
        Education
      </h2>

      <div
        ref={ref}
        className="w-[75%] mx-auto relative lg:w-[90%] md:w-[93%] "
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute -left-10 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] xs:-left-[25px] "
        />
        <ul>
          <Details
            type="Government College University Faisalabad"
            time="2023-2027"
            place="Kotwali Rd, Gurunanakpura, Faisalabad, Punjab"
            info="Currently pursuing a Bachelor of Science in Data Analytics. 
            Developing strong analytical and problem-solving skills through 
            coursework in data science, machine learning, statistical analysis, 
            and big data technologies. Gaining hands-on experience with tools 
            such as Python, R, SQL, and data visualization software like Tableau 
            and Power BI. Real-world datasets to solve industry-related 
            challenges. Planning to specialize in AI-driven data analytics and 
            explore internship opportunities to apply theoretical knowledge in 
            practical settings."
          />

          <Details
            type="Punjab College Daewoo Campus"
            time="2021-2023"
            place="Punj Pullian Stop, Daewoo Road, Faisalabad, Punjab"
            info="Completed Intermediate in ICS (Computer Science) with distinction. 
            Acquired advanced skills in programming languages such as C++ and Java, 
            along with a strong foundation in algorithms, data structures, and database management. 
            Actively participated in coding competitions, Completed multiple projects, 
            including building a small e-commerce website as part of final year assignments."
          />
          <Details
            type="Umul Madaris Model School Boys Campus"
            time="2017-2021"
            place="Street Gulberg, Block B, Faisalabad, Punjab"
            info="Completed matriculation in Computer Science with distinction. 
            Gained in-depth knowledge in subjects like programming, algorithms, 
            and data structures. Actively participated in school coding competitions."
          />
        </ul>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute -right-10 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] xs:-right-[25px]"
        />
      </div>
    </div>
  );
};

export default Education;
