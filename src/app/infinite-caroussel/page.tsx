"use client"
import { motion } from "framer-motion";
import Image from "next/image";

// https://www.youtube.com/watch?v=Ot4nZ6UjJLE
// https://medium.com/@caden0002/implementing-an-infinite-slider-in-react-with-tailwind-css-and-framer-motion-69173adb31a3

export default function Page() {
    const images = [
        "/caroussel/image-1.jpg",
        "/caroussel/image-2.jpg",
        "/caroussel/image-3.jpg",
        "/caroussel/image-4.jpg",
        "/caroussel/image-5.jpg",
        "/caroussel/image-6.jpg",
        "/caroussel/image-7.jpg",
        "/caroussel/image-8.jpg",
    ]

    return (
        <main className="mt-5">
            <motion.div 
                className="flex gap-4"
                animate={{
                    x: ['0%', '-100%'],
                    transition: {
                        ease: 'linear',
                        duration: 10,
                        repeat: Infinity,
                        repeatType: 'loop',
                        repeatDelay: 0,
                    },
                }}          
            >
            {[...images,...images].map((image, index) => (
                <div key={index} className="relative overflow-hidden h-[200px] min-w-[200px] rounded-xl" >
                    <Image src={image} alt={`image-${index}`} fill />
                </div>
            ))}
            </motion.div>
        </main>
    );
}
