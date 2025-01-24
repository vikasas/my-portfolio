import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import pic from "../pic2.png";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react";

const socialmedia = [
  { icon: <FaInstagram />, name: "Instagram", link: "https://www.instagram.com/vikaaas_as?igsh=MWp5dHJ6MDRsZHhzYg==" },
  { icon: <FaLinkedin />, name: "LinkedIn", link: "https://www.linkedin.com/in/vikas-as-006128284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { icon: <FaTwitter />, name: "Twitter", link: "https://www.twitter.com" },
  { icon: <SiLeetcode />, name: "LeetCode", link: "https://leetcode.com/u/vikas_as18/" },
  { icon: "", name: "Resume", link: "" },
];

const Contact = () => {
  const form = useRef();
  useEffect(() => {
    AOS.init({duration:1200})
  })

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_m53wxgs", "template_i3pq006", form.current, "tJzIypbSfU0kzdNXp")
      .then(
        () => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Message failed to send: " + error.text);
        }
      );
  };

  return (
    <div>
      <div className="w-full bg-background text-beige flex flex-col lg:flex-row justify-center items-start p-5 sm:p-10 mt-10 space-y-10 lg:space-y-0">
        {/* Profile Image Section */}
        <div className="w-full lg:w-1/3 flex justify-center items-center">
          <img
            src={pic}
            alt="Profile"
            className="w-60 h-60 sm:w-60 sm:h-60 lg:w-80 lg:h-80 object-cover"
          />
        </div>

        {/* Contact Form and Social Links */}
        <div className="lg:ml-20 w-full lg:w-1/2 flex flex-col justify-start text-center lg:text-left">
          <div className="bg-container border-2 border-bordercol p-5 sm:p-10 rounded-md shadow-lg">
            <h6 className="text-sm font-normal text-smalltext">Contact</h6>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-light mt-3">Let's get in touch</p>

            {/* Form */}
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                className="bg-hovercol text-smalltext p-3 mt-5 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-bordercol"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                className="bg-hovercol text-smalltext p-3 mt-5 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-bordercol"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="bg-hovercol text-smalltext p-3 mt-5 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-bordercol"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-btnbg text-btntextcol w-full p-3 mt-5 rounded-md hover:opacity-80"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Social Media Links */}
          <div className="mt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {socialmedia.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-in"
                  className="flex items-center justify-start p-4 bg-container border border-bordercol hover:bg-hovercol hover:opacity-90 hover:border-beige transition"
                >
                  <span className="text-lg">{social.icon}</span>
                  <span className="ml-2 text-sm lg:text-base">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
