import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

type aboutMeTimeline = {
  quote: string;
  name: string;
  designation: string;
};
export const AnimatedTestimonials = ({
  aboutMeTimeline,
  autoplay = false,
}: {
  aboutMeTimeline: aboutMeTimeline[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % aboutMeTimeline.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + aboutMeTimeline.length) % aboutMeTimeline.length);
  };


  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className="mx-auto pb-35 max-w-sm px-4 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative">
        <div className="flex flex-col justify-between">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-black dark:text-white">
              {aboutMeTimeline[active].name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              {aboutMeTimeline[active].designation}
            </p>
            <motion.p className="my-5 text-lg text-gray-500 dark:text-neutral-300">
              {aboutMeTimeline[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
