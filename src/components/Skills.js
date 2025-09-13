import { FaJava  } from "react-icons/fa";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiFigma, SiMysql , SiNodedotjs , SiExpress , SiMongodb , SiNextdotjs } from "react-icons/si";

const skills = [
  { name: "Java", icon: <FaJava /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "ReactJS", icon: <SiReact /> },
  {name : "NodeJS" , icon : <SiNodedotjs /> },
  {name : "ExpressJS" , icon : <SiExpress /> },
  {name : "Mongodb" , icon : <SiMongodb /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "Nextjs", icon: <SiNextdotjs/> },
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  
  
];

const Skills = () => {
  return (
    <div className="w-[90vw] flex justify-center">
      <div className="bg-background w-3/4 md:w-4/5 lg:w-3/5 text-beige py-10">
        <div className="overflow-hidden relative">
          <div className="flex animate-slide whitespace-nowrap">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-4 px-8 py-8 text-base md:text-lg font-semibold"
              >
                <span className="text-3xl sm:text-4xl">{skill.icon}</span>
                <span className="tracking-wider font-popins">{skill.name}</span>
              </div>
            ))}
            {skills.map((skill, index) => (
              <div
                key={`${index}-repeat`}
                className="flex items-center gap-4 px-6 py-4 text-base md:text-lg font-semibold"
              >
                <span className="text-3xl sm:text-4xl">{skill.icon}</span>
                <span className="hidden sm:block">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
