import 'animate.css'; 
import epic from '../e2.jpg';
import apic from '../Assetmanagement.jpg';
import todo from '../todo.jpg';
import brain from '../brain.jpg'
import chatroom from '../chatroom.jpg'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const project = [
     {
        photo: brain,
        name: "Second Brain",
        stacks: "Tech Stacks: Nodejs , Expressjs , Mongodb , ReactJS, TailwindCSS",
        link:" "
    },
     {
        photo: chatroom,
        name: "ChatRoom",
        stacks: "Tech Stacks: Nodejs , Websocket , ReactJS, TailwindCSS",
        link:"https://chat-room-frontennd.vercel.app/"
    },
    {
        photo: todo,
        name: "TO-Do List",
        stacks: "Tech Stacks: ReactJs , JavaScript , Nodejs, Expressjs ,Jwt",
        link:" "
    },
    {
        photo: epic,
        name: "E-Commerce",
        stacks: "Tech Stacks: ReactJS, TailwindCSS, Java, SpringBoot",
        link : "https://capstone-two-xi.vercel.app/"
    },
    {
        photo: apic,
        name: "Asset-Management",
        stacks: "Tech Stacks: HTML, CSS, JavaScript, PHP, PhpMyAdmin",
        link: "https://github.com/vikasas/Asset-Management"
    }
];

const Projects = () => { 
    useEffect(() =>{
        // AOS.init({duration:1000})
    })
    return (
        <div>
            <div className="w-full  lg:w-full md:p-10 lg:p-20 p-3 flex flex-col justify-center items-center text-center lg:text-left">
                <h6 className="text-beige font-ballet tracking-wide text-2xl">PROJECTS</h6>
                <div className='w-5/6 flex flex-col justify-center items-center'>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
                    {project.map((proj, index) => (
                        <a
                            href={proj.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            className="project-item border-1 border-bordercol bg-container p-4 rounded-lg shadow-md scale-95 hover:scale-100 transition-all duration-300 ease-in-out block"
                        >
                            <div className="mb-4 w-full h-72 flex flex-col justify-center items-center">
                                <img
                                    src={proj.photo}
                                    alt={proj.name}
                                    className="w-full lg:h-full md:h-80 h-60 object-cover rounded-lg"
                                />
                            </div>
                            <div className="text-xl text-beige tracking-wider font-ballet mb-2">{proj.name}</div>
                            <div className="text-base text-smalltext tracking-wider font-small">{proj.stacks}</div>
                        </a>
                    ))}
                </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
