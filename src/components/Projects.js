import { color, easeIn, easeOut, motion, scale, useScroll, useSpring, useTransform } from "framer-motion"
import { FaJava  } from "react-icons/fa";
import { useRef } from "react"
import brain from '../brain.jpg'
import chatroom from '../chatroom.jpg'
import todo from '../todo.jpg'
import asset from '../asset.jpg'
import ecom from '../ecom.jpg'
import { 
  SiNodedotjs, SiTypescript, SiExpress, SiMongodb, SiReact, 
  SiHtml5, SiCss3, SiJavascript, SiPhp, SiPhpmyadmin, 
  SiTailwindcss, SiSpringboot, SiJsonwebtokens, SiGithub
} from "react-icons/si"

const projects = [
  {
    photo: brain,
    name: "Second Brain",
    stacks: [
      <SiNodedotjs className="text-2xl" />, 
      <SiTypescript className="text-2xl" />, 
      <SiExpress className="text-2xl" />, 
      <SiMongodb className="text-2xl" />, 
      <SiReact className="text-2xl" />
    ],
    dis: "A Second Brain is a digital system for capturing, organizing, and retrieving your ideas, notes, and inspirations. It can include curated resources like insightful YouTube videos and Twitter threads, helping you build a personal knowledge hub accessible anytime.",
    link: "https://brainly-frontend-ten.vercel.app/",
    icons: <SiGithub className="text-2xl cursor-pointer" />
  },
  {
    photo: chatroom,
    name: "ChatRoom",
    stacks: [
      <SiNodedotjs className="text-2xl" />,
      // <SiWebsocket className="text-2xl" />,
      <SiReact className="text-2xl" />,
      <SiTailwindcss className="text-2xl" />
    ],
    dis: "A real-time Chat Room application where anyone can join a room using a unique ID and start chatting instantly. Built using WebSocket for seamless bi-directional communication, and a modern frontend stack including React and Tailwind CSS.",
    link: "https://chat-room-frontennd.vercel.app/",
    icons: <SiGithub className="text-2xl cursor-pointer" />
  },
  {
    photo: todo,
    name: "TO-Do List",
    stacks: [
      <SiReact className="text-2xl" />,
      <SiJavascript className="text-2xl" />,
      <SiNodedotjs className="text-2xl" />,
      <SiExpress className="text-2xl" />,
      <SiJsonwebtokens className="text-2xl" />
    ],
    dis: "A full-stack To-Do List application with user authentication and JWT-based session handling. Users can securely sign up or log in, and manage their tasks with features like adding, editing, and deleting to-dos.",
    link: "#",
    icons: <SiGithub className="text-2xl cursor-pointer" />
  },
  {
    photo: ecom,
    name: "E-Commerce",
    stacks: [
      <SiReact className="text-2xl" />,
      <SiTailwindcss className="text-2xl" />,
      <FaJava className="text-2xl" />,
      <SiSpringboot className="text-2xl" />
    ],
    dis: "A modern E-Commerce web application built with React and TailwindCSS on the frontend, and Java with Spring Boot on the backend. It features product listings, shopping cart functionality, and user-friendly UI/UX, designed to provide a seamless shopping experience.",
    link: "https://capstone-two-xi.vercel.app/",
    icons: <SiGithub className="text-2xl cursor-pointer" />
  },
  {
    photo: asset,
    name: "Asset-Management",
    stacks: [
      <SiHtml5 className="text-2xl" />,
      <SiCss3 className="text-2xl" />,
      <SiJavascript className="text-2xl" />,
      <SiPhp className="text-2xl" />,
      <SiPhpmyadmin className="text-2xl" />
    ],
    dis: "A web-based Asset Management system developed using PHP, JavaScript, and PhpMyAdmin for managing organizational assets efficiently. It enables tracking, updating, and managing hardware or software inventories through a simple and intuitive interface.",
    link: "https://github.com/vikasas/Asset-Management",
    icons: <SiGithub className="text-2xl cursor-pointer" />
  }
]

const stackvarient = {
  hover:{
    scale:0.9,
    transition : {
      ease : easeIn
    }
  }
}

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance])
}

function ProjectSection({ project, index }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, 300)

  return (
    <section className="project-container">
      <div ref={ref}>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
        <img src={project.photo} alt={project.name} />
        </a>
      </div>
      <motion.div
        className="project-info"
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y }}
      >
        <div className="project-info-content">
          <div>
            <h2>{project.name}</h2>
            <motion.div className="flex flex-wrap gap-3 text-beige cursor-pointer" 
            variants={stackvarient}
            whileHover="hover"
            >{project.stacks}</motion.div>
          </div>
          <div className="mt-4">
            <p>{project.dis}</p>
          </div>
          <div className="mt-5">
           <a  href={project.link}
                target="_blank" rel="noopener noreferrer"> <motion.button className="bg-beige hover:opacity-80  px-6 py-3 lg:px-4 lg:py-2 font-medium text-btntextcol text-sm rounded-md" whileHover={{scale :1.1}} >visit website</motion.button></a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default function Projects() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div id="example">
      {projects.map((project, index) => (
        <ProjectSection key={index} project={project} index={index} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
      <StyleSheet />
    </div>
  )
}



function StyleSheet() {
  return (
    <style>{`
        html {
            scroll-snap-type: y mandatory;
        }

        .project-container {
            height: 100vh;
            scroll-snap-align: start;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            background: #0E0E0E;
        }
            

        .project-container > div {
            width: 300px;
            height: 400px;
            margin: 20px;
            background: rgb(26, 26, 26);
            overflow: hidden;
            border-radius: 12px;
            border: 1px solid #343230;
            transition: transform 0.3s ease;
        }

        .project-container > div:hover {
            transform: translateY(-10px);
        }

        .project-link {
            display: block;
            width: 100%;
            height: 100%;
            text-decoration: none;
        }

        .project-container img {
            width: 300px;
            height: 400px;
            object-fit: cover;
            transition: transform 0.3s ease;
        }

        .project-link:hover img {
            transform: scale(1.05);
        }

        @media (max-width: 500px) {
            .project-container > div {
                width: 250px;
                height: 320px;
            }

            .project-container img {
                width: 250px;
                height: 320px;
            }

            .project-info {
                left: calc(50% - 125px) !important;
                top: calc(50% + 180px) !important;
                text-align: center;
            }

            .project-info-content {
                width: 250px !important;
                height: 320px !important;
            }
        }

        .project-info {
            position: absolute;
            top: calc(50% - 200px);
            left: calc(50% + 180px);
            transition: transform 0.3s ease;
        }

        .project-info:hover {
            transform: translateY(-10px);
        }

        .project-info-content {
            width: 300px;
            height: 400px;
            background: rgb(26, 26, 26);
            border-radius: 12px;
            border: 1px solid #343230;
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            box-sizing: border-box;
            transition: all 0.3s ease;
        }

        .project-info-content:hover {
            background: rgb(26, 26, 26);
            border-color: #343230;
            transform: translateY(-10px)
        }

        .project-info h2 {
            font-size: 28px;
            font-weight: 700;
            letter-spacing: -2px;
            line-height: 1.2;
            margin: 0 0 20px 0;
            color: rgb(237, 214, 182);
            font-family: "Azeret Mono", monospace;
        }

        .project-info p {
            font-size: 14px;
            font-weight: 400;
            letter-spacing: -0.5px;
            line-height: 1.6;
            margin: 0;
            color: rgba(218, 197, 167, .6);
            font-family: "Azeret Mono", monospace;
        }

        .progress {
            position: fixed;
            left: 0;
            right: 0;
            height: 5px;
            background: rgb(237, 214, 182);
            bottom: 50px;
            transform: scaleX(0);
        }
    `}</style>
  )
}
