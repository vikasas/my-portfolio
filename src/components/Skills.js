import { FaJava } from "react-icons/fa";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiFigma, SiSpringboot } from "react-icons/si";

const skills = [
  { name: "Java", icon: <FaJava /> },
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "ReactJS", icon: <SiReact /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Figma", icon: <SiFigma /> },
  // { name: "Spring Boot", icon: <SiSpringboot /> },
];

const Skills = () => {
  return (
    <div className="w-screen flex justify-center">
      <div className="bg-background w-11/12 md:w-4/5 lg:w-2/3 text-beige py-10">
        <div className="overflow-hidden relative">
          <div className="flex animate-slide whitespace-nowrap">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-4 px-6 py-4 text-base md:text-lg font-semibold"
              >
                <span className="text-3xl sm:text-4xl">{skill.icon}</span>
                <span className="hidden sm:block">{skill.name}</span>
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
