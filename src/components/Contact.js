import pic from "../pic2.png";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Footer from "./Footer";

const socialmedia = [
  { icon: <FaInstagram />, name: "Instagram", link: "https://www.instagram.com/vikaaas_as?igsh=MWp5dHJ6MDRsZHhzYg==" },
  { icon: <FaLinkedin />, name: "LinkedIn", link: "https://www.linkedin.com/in/vikas-as-006128284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { icon: <FaTwitter />, name: "Twitter", link: "https://www.twitter.com" },
  { icon: <SiLeetcode />, name: "LeetCode", link: "https://leetcode.com/u/vikas_as18/" },
  { icon: "", name: "Resume", link: "https://drive.google.com/file/d/1P7tUNSRALzkIiQ1HGhkHQlBFE7Bvfb1J/view?usp=drivesdk " },
  { icon: <FaInstagram />, name: "Instagram", link: "https://www.instagram.com/vikaaas_as?igsh=MWp5dHJ6MDRsZHhzYg==" },
];

const Contact = () => {
  return (
    <div>
      <div className="w-full h-auto bg-background text-beige flex flex-col lg:flex-row justify-center items-start p-10 mt-10">
        <div className="w-full lg:w-1/3">
          <div className="h-3/4 flex justify-center ">
            <img src={pic} alt="Profile" className="w-60 h-60 sm:w-80 sm:h-80 lg:w-96 lg:h-96" />
          </div>
        </div>

        <div className="lg:ml-20 mt-10 h-auto w-full lg:w-4/5 flex flex-col justify-start text-center lg:text-left">
          <div className="lg:ml-20 lg:w-3/4 w-full flex flex-col justify-start">
            <div className="border-2 border-bordercol w-full bg-container p-10 rounded-md">
              <h6 className="text-sm font-normal text-smalltext">Contact</h6>
              <p className="text-5xl text-beige mt-3 font-light">Let's get in touch</p>
              <input
                type="text"
                placeholder="Name"
                className="bg-hovercol text-smalltext p-3 mt-5 w-full focus:outline-none focus:ring-2 focus:ring-bordercol"
              />
              <input
                type="text"
                placeholder="Email"
                className="bg-hovercol text-smalltext p-3 mt-5 w-full focus:outline-none focus:ring-2 focus:ring-bordercol"
              />
              <textarea
                placeholder="Your Message"
                className="bg-hovercol text-smalltext p-3 mt-5 w-full focus:outline-none focus:ring-2 focus:ring-bordercol"
              ></textarea>
              <a href="mailto:your-vikasas202002@gmail.com">
                <button className="bg-btnbg text-btntextcol w-full p-3 mt-5 hover:opacity-80">
                Send Message
                </button>
                </a>
            </div>

            <div className="w-full">
              <div className="grid mt-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {socialmedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer flex items-center justify-start p-4 bg-container border border-bordercol hover:bg-hovercol hover:opacity-1 hover:border-beige transition"
                  >
                    <span>{social.icon}</span>
                    <span className="ml-2">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
