import BallCanvas from "../../src/components/UI/Ball";
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import typescript from '../assets/typescript.png'
import reactjs from '../assets/reactjs.png'
import tailwind from '../assets/tailwind.png'
import nodejs from '../assets/nodejs.png'
import mongodb from '../assets/mongodb.png'
import threejs from '../assets/threejs.svg'
import git from '../assets/git.png'
import vite from '../assets/Vite.js.svg'
import MySQL from '../assets/database_4248443.png'


const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "vite",
    icon: vite,
  },
  {
    name: "MySQL",
    icon: MySQL,
  },
];

const Skills = () => {
  return (
    <div className="m-auto w-[75vw]">
    <div className="flex justify-center my-20">
      <p className='text-5xl font-extrabold'>Technical Skills</p>
    </div>
    <div className='flex flex-wrap justify-center gap-10 my-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </div>
  )
}

export default Skills