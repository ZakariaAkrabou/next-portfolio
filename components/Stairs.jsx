import { animate, motion } from "framer-motion";
import StairTransition from "./StairTransition";

const AnimateStair = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};
const reversIndex = (index) => {
  const totalStep = 6;
  return totalStep - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={AnimateStair}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reversIndex(index) * 0.1,
            }}
            className="h-full w-full bg-accent relative"
          />
        ); 
      })}
    </>
  );
};

export default Stairs;
