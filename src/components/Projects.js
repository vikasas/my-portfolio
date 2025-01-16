import React, { useEffect, useState } from "react";
import 'animate.css'; 
import Footer from "./Footer";
import epic from '../e2.jpg';
import apic from '../Assetmanagement.jpg';
import tpic from '../td.jpg';
import mpic from '../moviecatlog.jpg'

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
    {
        photo: mpic,
        name: "E-Commerce",
        stacks: "Tech Stacks: ReactJS, TailwindCSS, Java, SpringBoot",
    },
];

const Projects = () => {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                }
            },
            { threshold: 0.5 } 
        );

        const elements = document.querySelectorAll('.project-item');
        elements.forEach((element) => observer.observe(element));

        return () => {
            elements.forEach((element) => observer.unobserve(element));
        };
    }, []);

    return (
        <div>
        <div className="  w-full lg:w-full flex flex-col justify-start text-center lg:text-left">
            <h6 className="text-beige font-normal text-2xl">PROJECTS</h6>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  gap-4 mt-4">
                {project.map((proj, index) => (
                    <div
                        key={index}
                        className={`project-item border-1 border-bordercol bg-container p-4 rounded-lg shadow-md scale-95 hover:scale-100 transition-all duration-300s ease-in-out ${
                            inView ? "animate__animated animate__fadeIn " : ""
                        }`}>
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
