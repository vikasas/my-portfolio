import pic from "../pic2.png";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Helper from "./Helper";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react";
import Letstalk from "./Letstalk";

const socialmedia = [
  { icon: <FaInstagram />, name: "Instagram", link: "https://www.instagram.com/vikaaas_as?igsh=MWp5dHJ6MDRsZHhzYg==" },
  { icon: <FaLinkedin />, name: "LinkedIn", link: "https://www.linkedin.com/in/vikas-as-006128284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { icon: <FaTwitter />, name: "Twitter", link: "https://www.twitter.com" },
  { icon: <SiLeetcode />, name: "LeetCode", link: "https://leetcode.com/u/vikas_as18/" },
  { icon: "", name: "Resume", link: "" },
  { icon: <FaInstagram />, name: "Instagram", link: "https://www.instagram.com/vikaaas_as?igsh=MWp5dHJ6MDRsZHhzYg==" },
];

const About = () => {
  useEffect(()=>{
    AOS.init({duration:1200})
  })
  return (
    <div>
      <div className="w-screen h-auto bg-background text-beige flex flex-col lg:flex-row justify-center items-start p-5 lg:p-10 mt-10">
        <div className="w-full lg:w-1/2 flex justify-center mb-5 lg:mb-0 lg:sticky top-10">
          <div className="h-auto flex justify-center ">
            <img src={pic} alt="Profile" className="w-60 h-60 sm:w-80 sm:h-80 md:h-80 md:w-80 lg:w-96 lg:h-96 " />
          </div>
        </div>
        <div className="ml-0 lg:ml-10 w-full lg:w-3/4 flex flex-col justify-start text-center lg:text-left">
          <div>
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-light font-ballet mb-2" >Vikas AS</h1>
            <h2 className="text-sm sm:text-2xl font-light font-small text-smalltext">Passionate Web Developer</h2>
          </div>
          <div className="mt-6 font-small text-base tracking-wider font-light leading-relaxed bg-container p-5 sm:p-10 border-2 border-bordercol">
            <p>
              Hi, I'm <strong>Vikas AS</strong>, a passionate and ambitious web developer currently in my final year at{" "}
              <strong>GM Institute of Technology</strong>. With a CGPA of <strong>8.52</strong>, I have consistently
              demonstrated dedication and a strong grasp of both academics and practical problem-solving.
            </p>
            <br />
            <p data-aos="fade-in">
              I thrive on building responsive, user-friendly, and visually appealing web applications. My journey in
              technology has been fueled by curiosity and a drive to turn innovative ideas into reality. From designing
              sleek user interfaces to optimizing functionality, I enjoy the challenge of creating digital solutions
              that make an impact.
            </p>
            <br />
            <p data-aos="fade-in">
              Beyond my love for coding, I am eager to learn, adapt, and grow as a professional in the ever-evolving
              tech landscape. Let's connect and create something amazing together!
            </p>
          </div>
          <div className="w-full">
            <div className="grid mt-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {socialmedia.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  data-aos="fade-in"
                  className="cursor-pointer flex items-center justify-start p-4 font-small tracking-wider bg-container border border-bordercol hover:bg-hovercol hover:opacity-1 hover:border-beige transition"
                >
                  <span>{social.icon}</span>
                  <span className="ml-2">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="overflow-y-scroll font-small tracking-wide h-60 sm:h-60 lg:h-80 cursor-pointer mt-4 font-normal text-base leading-relaxed bg-container p-5 sm:p-10 border-2 border-bordercol">
            <h6 className="text-smalltext">SKILLS</h6>
            <p className="mt-6 text-xl font-normal" data-aos="fade-in">Java</p> <hr className="border-skiltextcol mt-5" />
            <p className="mt-3 text-xl font-normal" data-aos="fade-in">DSA</p> <hr className="border-skiltextcol mt-3" />
            <p className="mt-3 text-xl font-normal" data-aos="fade-in">DBMS</p> <hr className="border-skiltextcol mt-3" />
            <p className="mt-3 text-xl font-normal" data-aos="fade-in">SQL</p> <hr className="border-skiltextcol mt-3" />
            <p className="mt-3 text-xl font-normal" data-aos="fade-in">HTML & CSS</p> <hr className="border-skiltextcol mt-3" />
            <p className="mt-3 text-xl font-normal" >JavaScript</p> <hr className="border-skiltextcol mt-3" />
            <p className="mt-3 text-xl font-normal" d>ReactJS</p> <hr className="border-skiltextcol mt-3" />
            <p className="mt-3 text-xl font-normal" >Tailwindcss</p> <hr className="border-skiltextcol mt-3" />
            <p className="mt-3 text-xl font-normal" >Web Design</p> 
            {/* <p className="mt-3 text-xl font-normal">SpringBoot</p> */}
          </div>
          <div className="cursor-pointer mt-4 font-small tracking-wide text-base leading-relaxed bg-container p-5 sm:p-10 border-2 border-bordercol">
            <h6 className="text-smalltext">Education</h6>
            <div className="flex flex-col gap-3 sm:gap-5">
              <div className="flex flex-col sm:flex-row justify-between mt-3">
                <p className="text-xl font-normal" data-aos="fade-in">GM Institute of Technology</p>
                <p className="text-xl font-normal" data-aos="fade-in">8.52 CGPA</p>
              </div>
              <hr className="border-skiltextcol" />
              <div className="flex flex-col sm:flex-row justify-between mt-3">
                <p className="text-xl font-normal" data-aos="fade-in">Siddaganga PU Science College</p>
                <p className="text-xl font-normal" data-aos="fade-in">86%</p>
              </div>
              <hr className="border-skiltextcol" />
              <div className="flex flex-col sm:flex-row justify-between mt-3">
                <p className="text-xl font-normal" data-aos="fade-in">Bapuji Higher Primary English Medium CBSE School</p>
                <p className="text-xl font-normal" data-aos="fade-in">78.6%</p>
              </div>
              <hr className="border-skiltextcol" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Letstalk/>
      </div>
      <div>
        <Helper />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
