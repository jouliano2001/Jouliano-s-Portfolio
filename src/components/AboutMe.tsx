import { AnimatedTestimonials } from "./UI/animated-testimonials";


function AboutMe() {
    const aboutMeTimeline = [
  {
    quote:
      "My journey began in the aviation industry, where I worked as an Aeronautical Maintenance Engineer. Working on complex aircraft systems honed my problem-solving skills and taught me the value of precision and safety.",
    name: "Engineering Foundation",
    designation: "Aeronautical Maintenance Engineer",
  },
  {
    quote:
      "Curiosity and passion for technology led me to explore the world of web development. I started learning HTML and CSS, amazed by how they could bring designs to life on the screen.",
    name: "First Steps",
    designation: "Learning HTML & CSS",
  },
  {
    quote:
      "JavaScript introduced interactivity into my projects, and TypeScript followed soon after — giving structure and confidence to my code. I felt myself gaining momentum as a developer.",
    name: "Interactive Thinking",
    designation: "JavaScript & TypeScript",
  },
  {
    quote:
      "React became my framework of choice. I built projects using Vite and Next.js, learned component-based architecture, and finally began seeing myself as a real developer.",
    name: "Building Interfaces",
    designation: "React (Vite & Next.js)",
  },
  {
    quote:
      "I dove into the backend with Node.js and Nest.js, mastering RESTful APIs and connecting to databases like MongoDB and MySQL — evolving into a full-stack developer.",
    name: "Full Stack Realization",
    designation: "Node.js, Nest.js, MongoDB, MySQL",
  },
  {
    quote:
      "Today, I combine my engineering discipline with creative development skills. From frontend design with Tailwind CSS and Framer Motion to deploying full-stack apps, I’m building for the web with passion and precision.",
    name: "Where I Stand",
    designation: "Full Stack Web Developer",
  },
];
  return (
    <div>
        <AnimatedTestimonials aboutMeTimeline={aboutMeTimeline} />
    </div>
  )
}

export default AboutMe