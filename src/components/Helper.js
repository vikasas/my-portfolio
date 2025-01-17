import { Link } from "react-router-dom";

const Helper = () =>{
    return(
        <div className="">
        <div className="w-full h-fit sm:h-screen lg:h-screen bg-container flex justify-center items-center">
            <div className="w-3/4 h-4/5 p-6 lg:p-2 lg:w-3/4  lg:h-1/2 text-center">
                <p className="sm:text-8xl lg:text-8xl text-5xl text-beige font-light ">Hey, wanna Know </p>
                <p className="sm:text-8xl lg:text-8xl text-5xl text-beige font-light mt-1 lg:mt-6">Me More</p>
                <p className="text-normal text-smalltext font-sm  mt-6">Premium web design, development</p>
               <Link to="/contact"><button className="lg:mt-8 md:mt-8 mt-6 bg-btnbg px-4 py-2 lg:px-6 lg:py-2 md:px-6 md:py-2 font-normal text-btntextcol hover:opacity-80">GET IN TOUCH</button></Link> 
            </div>
        </div>
        </div>
    )
}
export default Helper;