const NewHelper = () =>{

    const service = [
        {
            no:"01",
          name: "Web Design",
          info: "We create aesthetically pleasing and user-friendly website designs that help businesses engage their customers and build a strong online presence. Responsive and creative designs tailored to your brand."
        },
        {
            no:"02",
          name: "Web Development",
          info: "Our web development services include building fast, scalable, and secure websites using the latest technologies. We focus on creating responsive, performance-optimized, and fully functional websites."
        },
        {
            no:"03",
          name: "Problem Solving",
          info: "We help businesses overcome challenges by identifying issues and providing innovative, effective solutions. Whether it's optimizing processes or resolving technical problems, our team works to deliver impactful solutions."
        }
      ];
      
    return(
        <div className=" w-full lg:w-full flex flex-col justify-start  text-left lg:text-left">
            <h6 className="text-2xl font-normal text-beige">Intrests</h6>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
                {service.map((serv , index) =>(
                    <div key={index} className="bg-container border border-bordercol mt-6 p-14 scale-95 hover:scale-100 transition-all duration-300 ease-in-out ">
                        <p className="text-smalltext">{serv.no}</p>
                        <p className="text-beige text-2xl font-normal">{serv.name}</p>
                        <p className="text-smalltext text-sm font-normal mt-3">{serv.info}</p>
                        </div>
                ))}
            </div>
        </div>
    )
}
export default NewHelper;