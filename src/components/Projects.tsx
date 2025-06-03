import { CardBody, CardContainer, CardItem } from "./UI/3d-card";
import Project1 from '../assets/Home-Page-06-03-2025_01_59_PM.png'
import Project2 from '../assets/COMFORTY-06-03-2025_04_23_PM.png'


function Projects() {
  return (
    <div className="my-35">
      <div>
        <h1 className="flex items-center justify-center text-5xl font-extrabold ">Projects</h1>
      </div>
      <div className="flex flex-wrap justify-between mx-35">
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              GlitchMart
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              GlitchMart is a lightweight e-commerce site built without frameworks, featuring dynamic filtering, a persistent cart, and optimized, accessible design.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src={Project1}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Comforty
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Built a fast, furniture e-commerce site with React and Vite. Streamlined cart flows, smooth navigation, and reusable Tailwind components for efficient development.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src={Project2}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as="a"
                href="https://e-commerce-project-bunl.vercel.app/"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Visit now →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  )
}

export default Projects