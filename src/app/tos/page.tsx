"use client"

import { LoremIpsum } from "@/components/LoremIpsum";
import { motion, useScroll } from "framer-motion";

export default function Animation() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="fixed h-1 bg-blue-500 top-0 left-0 right-0 transform origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <h1 className="text-center text-xl font-bold mt-10 mb-5">
        Terms of Service
      </h1>
      <LoremIpsum />
    </>
  );
}