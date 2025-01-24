
import 'animate.css'; 
import epic from '../e2.jpg';
import apic from '../Assetmanagement.jpg';
import tpic from '../td.jpg';
import mpic from '../moviecatlog.jpg';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const project = [
    {
        photo: epic,
        name: "E-Commerce",
        stacks: "Tech Stacks: ReactJS, TailwindCSS, Java, SpringBoot",
    },
    {
        photo: apic,
        name: "Asset-Management",
        stacks: "Tech Stacks: HTML, CSS, JavaScript, PHP, PhpMyAdmin",
    },
    {
        photo: tpic,
        name: "TO-Do List",
        stacks: "Tech Stacks: HTML, CSS, JavaScript",
    },
    // {
    //     photo: mpic,
    //     name: "E-Commerce",
    //     stacks: "Tech Stacks: ReactJS, TailwindCSS, Java, SpringBoot",
    // },
];

const Projects = () => { // Add this line to define the functional component properly
    useEffect(() =>{
        AOS.init({duration:1200})
    })
    return (
        <div>
            <div className="w-full lg:w-full md:p-10 lg:p-20 p-3 flex flex-col justify-start text-center lg:text-left">
                <h6 className="text-beige font-normal text-2xl">PROJECTS</h6>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
                    {project.map((proj, index) => (
                        <div
                        data-aos="fade-in"
                            key={index}
                            className="project-item border-1 border-bordercol bg-container p-4 rounded-lg shadow-md scale-95 hover:scale-100 transition-all duration-300 ease-in-out" 
                        >
                            <div className="mb-4">
                                <img
                                    src={proj.photo}
                                    alt={proj.name}
                                    className="w-full lg:h-80 md:h-80 h-60 object-cover rounded-lg"
                                />
                            </div>
                            <div className="text-xl text-beige font-normal mb-2">{proj.name}</div>
                            <div className="text-base text-smalltext">{proj.stacks}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
