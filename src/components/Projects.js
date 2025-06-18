import { motion, LazyMotion, domAnimation } from 'framer-motion';
import epic from '../e2.jpg';
import apic from '../Assetmanagement.jpg';
import todo from '../todo.jpg';
import brain from '../brain.jpg';
import chatroom from '../chatroom.jpg';

const project = [
  {
    photo: brain,
    name: 'Second Brain',
    stacks: 'Tech Stacks: Nodejs , Expressjs , Mongodb , ReactJS, TailwindCSS',
    link: 'https://second-brain-frontend-alpha.vercel.app/',
  },
  {
    photo: chatroom,
    name: 'ChatRoom',
    stacks: 'Tech Stacks: Nodejs , Websocket , ReactJS, TailwindCSS',
    link: 'https://chat-room-frontennd.vercel.app/',
  },
  {
    photo: todo,
    name: 'TO-Do List',
    stacks: 'Tech Stacks: ReactJs , JavaScript , Nodejs, Expressjs ,Jwt',
    link: ' ',
  },
  {
    photo: epic,
    name: 'E-Commerce',
    stacks: 'Tech Stacks: ReactJS, TailwindCSS, Java, SpringBoot',
    link: 'https://capstone-two-xi.vercel.app/',
  },
  {
    photo: apic,
    name: 'Asset-Management',
    stacks: 'Tech Stacks: HTML, CSS, JavaScript, PHP, PhpMyAdmin',
    link: 'https://github.com/vikasas/Asset-Management',
  },
];

const Projects = () => {
  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-full md:p-10 lg:p-20 p-3 flex flex-col justify-center items-center text-center lg:text-left"
      >
        <h6 className="text-beige font-ballet tracking-wide text-2xl">
          PROJECTS
        </h6>

        <div className="w-5/6 flex flex-col justify-center items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-4"
          >
            {project.map((proj, index) => (
              <motion.a
                key={index}
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-item border border-bordercol bg-container p-4 rounded-lg shadow-md block will-change-transform"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="mb-4 w-full h-72 flex justify-center items-center overflow-hidden rounded-lg">
                  <img
                    src={proj.photo}
                    alt={proj.name}
                    loading="lazy"
                    className="w-full lg:h-full md:h-80 h-60 object-cover rounded-lg transform translate-z-0"
                  />
                </div>
                <div className="text-xl text-beige tracking-wider font-ballet mb-2">
                  {proj.name}
                </div>
                <div className="text-base text-smalltext tracking-wider font-small">
                  {proj.stacks}
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </LazyMotion>
  );
};

export default Projects;
