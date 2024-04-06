"use client"
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
    <div className="flex flex-wrap items-center justify-center">
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1, type: "spring", bounce: 0.7 }}
            variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 }
            }}
            className="m-3"
        >
            <div className="flex items-center justify-center rounded-md border-2 border-gray-900 bg-blue-500 w-64 h-64">
                BOX
            </div>
        </motion.div>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 2, type: "spring", bounce: 0.7 }}
            variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 }
            }}
            className="m-3"
        >
            <div className="flex items-center justify-center rounded-md border-2 border-gray-900 bg-blue-500 w-64 h-64">
                BOX
            </div>
        </motion.div>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 3, type: "spring", bounce: 0.7 }}
            variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 }
            }}
            className="m-3"
        >
            <div className="flex items-center justify-center rounded-md border-2 border-gray-900 bg-blue-500 w-64 h-64">
                BOX
            </div>
        </motion.div>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 4, type: "spring", bounce: 0.7 }}
            variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 }
            }}
            className="m-3"
        >
            <div className="flex items-center justify-center rounded-md border-2 border-gray-900 bg-blue-500 w-64 h-64">
                BOX
            </div>
        </motion.div>
    </div>
    <div className="flex flex-wrap items-center justify-center">
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 }
            }}
            className="m-3"
        >
            <div className="flex items-center justify-center rounded-md border-2 border-gray-900 bg-blue-500 w-64 h-64">
                BOX
            </div>
        </motion.div>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 }
            }}
            className="m-3"
        >
            <div className="flex items-center justify-center rounded-md border-2 border-gray-900 bg-blue-500 w-64 h-64">
                BOX
            </div>
        </motion.div>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 3 }}
            variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 }
            }}
            className="m-3"
        >
            <div className="flex items-center justify-center rounded-md border-2 border-gray-900 bg-blue-500 w-64 h-64">
                BOX
            </div>
        </motion.div>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 4 }}
            variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 }
            }}
            className="m-3"
        >
            <div className="flex items-center justify-center rounded-md border-2 border-gray-900 bg-blue-500 w-64 h-64">
                BOX
            </div>
        </motion.div>
    </div>
    <div className="flex flex-wrap items-center justify-center">
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
                hidden: { opacity: 0, y: 100, rotate: 0 },
                visible: { opacity: 1, y: 0, rotate: -10 }
            }}
            className="m-3"
        >
            <div className="flex items-center justify-center rounded-md border-2 border-gray-900 bg-blue-500 w-64 h-64">
                BOX
            </div>
        </motion.div>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            variants={{
                hidden: { opacity: 0, y: 100, rotate: 0 },
                visible: { opacity: 1, y: 0, rotate: -10 }
            }}
            className="m-3"
        >
            <div className="flex items-center justify-center rounded-md border-2 border-gray-900 bg-blue-500 w-64 h-64">
                BOX
            </div>
        </motion.div>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 3 }}
            variants={{
                hidden: { opacity: 0, y: 100, rotate: 0 },
                visible: { opacity: 1, y: 0, rotate: -10 }
            }}
            className="m-3"
        >
            <div className="flex items-center justify-center rounded-md border-2 border-gray-900 bg-blue-500 w-64 h-64">
                BOX
            </div>
        </motion.div>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 4 }}
            variants={{
                hidden: { opacity: 0, y: 100, rotate: 0 },
                visible: { opacity: 1, y: 0, rotate: -10 }
            }}
            className="m-3"
        >
            <div className="flex items-center justify-center rounded-md border-2 border-gray-900 bg-blue-500 w-64 h-64">
                BOX
            </div>
        </motion.div>
    </div>
    <div className="flex flex-wrap items-center justify-center">
    <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
                hidden: { y: 100 },
                visible: { y: 0 }
            }}
            className="m-3"
        >
            <div className="flex items-center justify-center rounded-md border-2 border-gray-900 bg-blue-500 w-64 h-64">
                BOX
            </div>
        </motion.div>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            variants={{
                hidden: { y: 100 },
                visible: { y: 0 }
            }}
            className="m-3"
        >
            <div className="flex items-center justify-center rounded-md border-2 border-gray-900 bg-blue-500 w-64 h-64">
                BOX
            </div>
        </motion.div>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 3 }}
            variants={{
                hidden: { y: 100 },
                visible: { y: 0 }
            }}
            className="m-3"
        >
            <div className="flex items-center justify-center rounded-md border-2 border-gray-900 bg-blue-500 w-64 h-64">
                BOX
            </div>
        </motion.div>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 4 }}
            variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 }
            }}
            className="m-3"
        >
            <div className="flex items-center justify-center rounded-md border-2 border-gray-900 bg-blue-500 w-64 h-64">
                BOX
            </div>
        </motion.div>
    </div>
    <div className="flex flex-col items-center justify-between">
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 }
            }}
            className="mb-3"
        >
            <div className="flex items-center justify-center rounded-md border-2 border-gray-900 bg-blue-500 w-64 h-64">
                BOX
            </div>
        </motion.div>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 }
            }}
            className="mb-3"
        >
            <div className="flex items-center justify-center rounded-md border-2 border-gray-900 bg-blue-500 w-64 h-64">
                BOX
            </div>
        </motion.div>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
                hidden: { y: 100 },
                visible: { y: 0 }
            }}
            className="mb-3"
        >
            <div className="flex items-center justify-center rounded-md border-2 border-gray-900 bg-blue-500 w-64 h-64">
                BOX
            </div>
        </motion.div>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
                hidden: { y: 100 },
                visible: { y: 0 }
            }}
            className="mb-3"
        >
            <div className="flex items-center justify-center rounded-md border-2 border-gray-900 bg-blue-500 w-64 h-64">
                BOX
            </div>
        </motion.div>
    </div>
    </>
  );
}