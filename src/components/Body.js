import pic from '../pic2.png';
import Skills from './Skills';
import Projects from './Projects';
import Helper from './Helper';
import Footer from './Footer';
import NewHelper from './NewHelper';
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';

const Body = () => {
  useEffect(() => {
    AOS.init({duration:1200})
  })
  return (
    <div>
      {/* Main Container */}
      <div className="w-full h-auto flex flex-col items-center justify-center p-6 sm:p-10">
        
        {/* Profile Image Section */}
        <div className="w-3/4 sm:w-1/2 lg:w-1/3 h-auto mb-6">
          <img
            src={pic}
            alt="Profile"
            className="z-10 shadow-lg w-full rounded-md object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="text-center px-4">
          <p className="text-beige text-4xl sm:text-5xl lg:text-6xl font-ballet font-light tracking-wider leading-tight" data-aos="fade-in">
            Web Designer
          </p>
          <p className="text-beige text-4xl sm:text-5xl lg:text-6xl font-light tracking-wider font-ballet leading-tight mt-2"data-aos="fade-in">
            & Developer
          </p>
          <p className="text-smalltext text-base sm:text-lg font-small lg:text-xl tracking-wider font-normal mt-4" data-aos="fade-in">
            Vikas, a passionate Developer studying final year BE at GM Institute of Technology
          </p>
        </div>
        <div className="mt-8 w-full ">
          <Skills />
        </div>
        <div className="w-full mt-8 px-4" >
          <NewHelper />
        </div>
        <div className="w-full mt-12 ">
          <Projects />
        </div>
      </div>
      <div className="w-full ">
        <Helper />
      </div>
      
      <div className="w-full ">
        <Footer />
      </div>
    </div>
  );
};

export default Body;
