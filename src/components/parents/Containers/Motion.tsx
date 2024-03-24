import { motion } from "framer-motion";
import { IMotion } from "../../../types/interfaces/components/interfaces";

const Motion = ({ children }: IMotion) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default Motion;
