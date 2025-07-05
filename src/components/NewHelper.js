
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from "react"
import { Link } from 'react-router-dom'

const NewHelper = () => {
  const service = [
    {
      no: "01",
      name: "Web Design",
      info: "Focus on designing modern, visually appealing, and user-centric websites that stand out. Our goal is to create responsive designs, blending creativity with functionality, tailored for academic projects and beyond.",
    },
    {
      no: "02",
      name: "Web Development",
      info: "Learn to build dynamic and robust web applications with hands-on experience in the latest technologies. From responsive layouts to optimized performance.",
    },
    {
      no: "03",
      name: "Problem Solving",
      info: "Dive deep into problem-solving with a focus on data structures and algorithms. With experience solving 300+ DSA questions and building the confidence to tackle complex problems efficiently.",
    },
  ]

  return (
    <div className="w-full lg:w-full flex flex-col justify-start text-left lg:text-left p-8">
      <h6 className="text-2xl font-serif tracking-wide lg:text-start md:text-start text-center text-beige mb-8">
        INTERESTS
      </h6>
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-8 w-full">
        {service.map((serv, index) => (
          <TiltCard key={index} service={serv} />
        ))}
      </motion.div>
    </div>
  )
}

function TiltCard({ service }) {
  const ref = useRef(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

  const handleMouseMove = (e) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const buttonVariant = {
    hover: {
      scale: 1.1,
      boxShadow: "0px 0px 5px rgb(237, 214, 182)",
    },
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY: rotateY,
        rotateX: rotateX,
        transformStyle: "preserve-3d",
      }}
      className="bg-container w-full border border-bordercol mt-3 px-5 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10 rounded-lg cursor-pointer"
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 0px 8px rgb(237, 214, 182)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ ease: "easeOut", duration: 0.2 }}
    >
      <motion.div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="relative"
      >
        <p className="text-smalltext text-lg font-mono">{service.no}</p>
        <p className="text-smalltext text-2xl font-serif mt-2">{service.name}</p>
        <p className="text-smalltext text-sm font-light mt-3 leading-relaxed">{service.info}</p>
        <Link to={"/about"} >
        <motion.button
          className="lg:mt-5 md:mt-5 mt-4 bg-beige hover:opacity-80 px-3 py-1 lg:px-6 lg:py-2 md:px-6 md:py-2 font-normal text-slate-900 rounded transition-colors duration-200"
          variants={buttonVariant}
          whileHover="hover"
          style={{
            transform: "translateZ(20px)",
          }}
        >
          Know More..
        </motion.button>
        </Link>
      </motion.div>

      {/* Subtle background gradient for depth */}
      <div className="absolute inset-0 bg-container rounded-lg pointer-events-none" />
    </motion.div>
  )
}

export default NewHelper
