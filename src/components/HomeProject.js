import brain from "../brain.jpg"
import chatroom from "../chatroom.jpg"
import todo from "../todo.jpg"
import { More } from "../icons/More"
import { Link } from "react-router-dom"

const HomeProject = () =>{
    const project =[
        {
        photo: brain,
        name: "Second Brain",
        stacks: "Tech Stacks: Nodejs , Expressjs , Mongodb , ReactJS, TailwindCSS",
        link: " "
    },
     {
        photo: chatroom,
        name: "ChatRoom",
        stacks: "Tech Stacks: Nodejs , Websocket , ReactJS, TailwindCSS",
        link: "https://chat-room-frontennd.vercel.app/"
    },
    {
        photo: todo,
        name: "TO-Do List",
        stacks: "Tech Stacks: ReactJs , JavaScript , Nodejs, Expressjs ,Jwt",
        link:" "
    },
    ]
    return(
        <div className="w-full h-[80vh]">
            <h6 className="text-beige font-ballet tracking-wide text-2xl">PROJECTS</h6>
            <div className="text-beige cursor-pointer flex justify-end hover:scale-100 transition-all duration-300 ease-in-in">
                <Link to="/projects">
                    <More/>
                </Link>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4 text-start">
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
    )
}

export default HomeProject