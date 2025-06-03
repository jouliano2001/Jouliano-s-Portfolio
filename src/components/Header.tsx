import image from "../assets/Jouliano.png"
import { BackgroundLines } from "./UI/background-lines"
import { ContainerTextFlip } from "./UI/container-text-flip"

function Header() {
  return (
    <div className="flex justify-between mx-35 p-15 align-middle items-center">
      <div className="flex flex-col items-center">
        <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
        <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#915eff] to-transparent"/>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-8xl text-[#4c1d95] font-extrabold">Jouliano</h1>
        <h2 className="text-7xl font-bold">Adel George</h2>
        <p className="text-2xl text-[#6b21a8] font-bold my-4">Full Stack Web Developer</p>
        <ContainerTextFlip
          words={["React", "Vite", "Next.JS", "Node.js","Nest.JS","MongoDB","MySQL"]}
        />
      </div>
      <div>
        <BackgroundLines className="relative">
          <img src={image} alt="Jouliano Adel's Picture" className="w-105 h-135 object-cover rounded-b-full"/>
        </BackgroundLines>
      </div>

    </div>
  )
}

export default Header