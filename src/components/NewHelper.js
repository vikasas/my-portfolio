import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react";
const NewHelper = () =>{
  useEffect(() =>{
    AOS.init({duration:1200})
  })
  const service = [
    {
      no: "01",
      name: "Web Design",
      info: "Focus on designing modern, visually appealing, and user-centric websites that stand out. Our goal is  to create responsive designs, blending creativity with functionality, tailored for academic projects and beyond."
    },
    {
      no: "02",
      name: "Web Development",
      info: "Learn to build dynamic and robust web applications with hands-on experience in the latest technologies. From responsive layouts to optimized performance."
    },
    {
      no: "03",
      name: "Problem Solving",
      info: "Dive deep into problem-solving with a focus on data structures and algorithms. With experience solving 300+ DSA questions  and building the confidence to tackle complex problems efficiently."
    }
  ];
  
      
    return(
        <div className=" w-full lg:w-full flex flex-col justify-start  text-left lg:text-left">
            <h6 className="text-2xl font-ballet tracking-wide lg:text-start md:text-start text-center text-beige">INTRESTS</h6>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
                {service.map((serv , index) =>(
                    <div key={index} data-aos="fade-in"  className="bg-container  border border-bordercol mt-6 p-10 md:p-14 lg:p-10  transform scale-95 hover:scale-100 transition-transform duration-300 ease-in-out">
                        <div className="">
                        <p className="text-smalltext">{serv.no}</p>
                        <p className="text-beige text-2xl font-ballet">{serv.name}</p>
                        <p className="text-smalltext text-sm font-small mt-3">{serv.info}</p>
                        <Link to="/about"><button className="lg:mt-5 md:mt-5 mt-4 bg-btnbg px-3 py-1 lg:px-6 lg:py-2 md:px-6 md:py-2 font-normal  text-btntextcol hover:opacity-80">Know More..</button></Link>
                        </div>
                        </div>
                ))}
            </div>
        </div>
    )
}
export default NewHelper;