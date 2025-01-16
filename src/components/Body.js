import pic from '../pic2.png';
import Skills from './Skills';
import Projects from './Projects';
import Helper from './Helper';
import Footer from './Footer';
import NewHelper from './NewHelper';

const Body = () => {
  return (
    <div>
      <div className="w-screen h-auto flex flex-col items-center justify-center p-4">
        <div className="w-3/4 sm:w-1/2 lg:w-1/3 h-auto mb-6">
          <img
            src={pic}
            alt="Profile"
            className="z-10 shadow-lg w-full rounded-md" 
          />
        </div>
        <div className="text-center px-4">
          <p className="text-beige text-5xl sm:text-6xl lg:text-8xl font-light leading-tight">
            Web Designer
          </p>
          <p className="text-beige text-5xl sm:text-6xl lg:text-8xl font-light leading-tight mt-3">
            & Developer
          </p>
          <p className="text-smalltext text-lg sm:text-xl lg:text-2xl font-normal mt-6">
            Vikas, a passionate Developer studying final year BE at GM Institute of Technology
          </p>
        </div>
        <div className="mt-8 w-full px-4">
          <Skills />
        </div>
        <div>
          <NewHelper/>
        </div>
        <div className="w-full mt-12 px-4">
          <Projects />
        </div>
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

export default Body;
