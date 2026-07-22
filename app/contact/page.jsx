"use client";

import PersonalCard from "@/components/PersonalCard";
import { motion } from "framer-motion";

const contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4, duration: 0.4,
          ease: "easeIn"
        }
      }}
      className="py-6">
      <div className="container mx-auto flex justify-center items-center min-h-[70vh]">
        <PersonalCard />
      </div>
    </motion.section>
  )
}

export default contact;
