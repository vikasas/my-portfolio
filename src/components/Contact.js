import pic from "../pic2.png";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Footer from "./Footer";

const socialmedia = [
  { icon: <FaInstagram />, name: "Instagram", link: "https://www.instagram.com/vikaaas_as?igsh=MWp5dHJ6MDRsZHhzYg==" },
  { icon: <FaLinkedin />, name: "LinkedIn", link: "https://www.linkedin.com/in/vikas-as-006128284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { icon: <FaTwitter />, name: "Twitter", link: "https://www.twitter.com" },
  { icon: <SiLeetcode />, name: "LeetCode", link: "https://leetcode.com/u/vikas_as18/" },
  { icon: "", name: "Resume", link: "https://drive.google.com/file/d/1P7tUNSRALzkIiQ1HGhkHQlBFE7Bvfb1J/view?usp=drivesdk" },
];

const Contact = () => {
  return (
    <div>
      <div className="w-full bg-background text-beige flex flex-col lg:flex-row justify-center items-start p-5 sm:p-10 mt-10 space-y-10 lg:space-y-0">
        {/* Profile Image Section */}
        <div className="w-full lg:w-1/3 flex justify-center items-center">
          <img
            src={pic}
            alt="Profile"
            className="rounded-full w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 object-cover"
          />
        </div>

        {/* Contact Form and Social Links */}
        <div className="lg:ml-20 w-full lg:w-2/3 flex flex-col justify-start text-center lg:text-left">
          <div className="bg-container border-2 border-bordercol p-5 sm:p-10 rounded-md shadow-lg">
            <h6 className="text-sm font-normal text-smalltext">Contact</h6>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-light mt-3">Let's get in touch</p>

            {/* Form */}
            <input
              type="text"
              placeholder="Name"
              className="bg-hovercol text-smalltext p-3 mt-5 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-bordercol"
            />
            <input
              type="text"
              placeholder="Email"
              className="bg-hovercol text-smalltext p-3 mt-5 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-bordercol"
            />
            <textarea
              placeholder="Your Message"
              className="bg-hovercol text-smalltext p-3 mt-5 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-bordercol"
            ></textarea>
            <a href="mailto:your-vikasas202002@gmail.com">
              <button className="bg-btnbg text-btntextcol w-full p-3 mt-5 rounded-md hover:opacity-80">
                Send Message
              </button>
            </a>
          </div>

          {/* Social Media Links */}
          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {socialmedia.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-start p-4 bg-container border border-bordercol hover:bg-hovercol hover:opacity-90 hover:border-beige transition rounded-md"
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
