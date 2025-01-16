import { Link } from "react-router-dom";

const Helper = () =>{
    return(
        <div className="">
        <div className="w-full h-screen sm:h-screen lg:h-screen bg-container flex justify-center items-center">
            <div className="w-3/4 h-4/5  lg:w-3/4  lg:h-1/2 text-center">
                <p className="sm:text-8xl lg:text-8xl text-6xl text-beige font-light ">Hey, wanna Know </p>
                <p className="sm:text-8xl lg:text-8xl text-6xl text-beige font-light mt-2 lg:mt-6">Me More</p>
                <p className="text-xl text-smalltext font-normal  mt-6">Premium web design, development</p>
               <Link to="/contact"><button className="mt-8 bg-btnbg px-6 py-2 font-normal text-btntextcol hover:opacity-80">GET IN TOUCH</button></Link> 
            </div>
        </div>
        </div>
    )
}
export default Helper;