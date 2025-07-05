import pic from '../pic2.png';
import Skills from './Skills';
import Helper from './Helper';
import Footer from './Footer';
import NewHelper from './NewHelper';
import { delay, motion , useScroll } from 'framer-motion'
import Letstalk from './Letstalk';
import HomeProject from './HomeProject';

const textvarient = {
  offscreen :{
    opacity: 0

  },
  onscreen:{
    opacity:1,
    transition:{
      type: 'spring',
      delay: 0.5,
      stiffness:120
    }
  }
}

const Body = () => {
  const { scrollYProgress } = useScroll()
  return (
    <div>
      <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: " rgb(237, 214, 182)",
                }}
            />
      <div className="w-full h-auto flex flex-col items-center justify-center p-6 sm:p-10">
        <div className="w-3/4 sm:w-1/2 lg:w-1/3 h-auto mb-6">
          <img
            src={pic}
            alt="Profile"
            className="z-10 shadow-lg w-full rounded-md object-cover"
          />
        </div>
        <div className="text-center px-4">
          <motion.p  className="text-beige text-4xl sm:text-5xl lg:text-6xl font-ballet font-light tracking-wider leading-tight" 
            variants={textvarient}
            initial="offscreen"
            whileInView="onscreen"
           
          >
            Web Designer
          </motion.p>
          <motion.p className="text-beige text-4xl sm:text-5xl lg:text-6xl font-light tracking-wider font-ballet leading-tight mt-2" 
            variants={textvarient}
            initial="offscreen"
            whileInView="onscreen"
          >
            & Developer
          </motion.p>
          <motion.p className="text-smalltext text-base sm:text-lg font-small lg:text-xl tracking-wider font-normal mt-4"
            variants={textvarient}
            initial="offscreen"
            whileInView="onscreen"
          >
            Vikas, a passionate Developer studying final year BE at GM Institute of Technology
          </motion.p>
        </div>
        <div className="mt-8 w-full ">
          <Skills />
        </div>
        <div className="w-full mt-8 px-4" >
          <NewHelper />
        </div>
        {/* <div className="w-full mt-12 ">
          <HomeProject/>
        </div> */}
      </div>
      <div>
      <Letstalk/>
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