import React from "react";
import { motion } from "framer-motion";

const TopDownPage = ({ children }) => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
};

export default TopDownPage;
