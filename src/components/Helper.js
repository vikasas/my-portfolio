import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react";
const Helper = () =>{
    useEffect(() =>  {
        AOS.init({duration:1200})
    })
    return(
        <div className="">
        <div className="w-full h-[70vh]  md:h-[70vh] tracking-wider lg:h-screen bg-container flex justify-center items-center">
            <div className="w-3/4 h-4/5 p-4 lg:p-2 lg:w-3/4  lg:h-1/2 md:p-2 md:w-3/4  md:h-1/2 text-center">
                <p className="sm:text-8xl lg:text-8xl text-5xl text-beige font-ballet font-extralight "data-aos="fade-in">Hey, wanna Know </p>
                <p className="sm:text-8xl lg:text-8xl text-5xl text-beige font-ballet font-extralight mt-1 lg:mt-6"data-aos="fade-in">Me More</p>
                <p className="text-normal text-smalltext font-sm font-small  mt-6"data-aos="fade-in">Premium web design, development</p>
               <Link to="/contact"><button className="lg:mt-8 font-small md:mt-8 mt-6 bg-btnbg px-4 py-2 lg:px-6 lg:py-2 md:px-6 md:py-2 font-normal text-btntextcol hover:opacity-80">GET IN TOUCH</button></Link> 
            </div>
        </div>
        </div>
    )
}
export default Helper;