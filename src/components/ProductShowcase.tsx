"use client";
import appScreen from "/CheatCode-Demo-Picture.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {

    const appImage = useRef<HTMLImageElement>(null);
    const { scrollYProgress } = useScroll({
        target: appImage,
        offset: ['start end', 'end end'],
    });
    const rotateX = useTransform(scrollYProgress, [0, 1], [25, 0]);
    const opacity = useTransform(scrollYProgress, [0, 1], [.5, 1]);
    return (
        <div className="py-24 sm:py-32 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-primary opacity-10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-luxury opacity-10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
            
            <div className="container">
                <h2 className="text-center text-6xl sm:text-7xl font-bold tracking-tighter mb-6 text-luxury animate-gradient">Intuitive interface
                </h2>
                <div className="max-w-2xl mx-auto">
                    <p className="text-2xl text-center mt-8 text-muted-foreground font-light">
                    Designed for clarity, built for speed — our interface keeps everything right where you need it.
                    </p>
                </div>
                <motion.div className="flex justify-center mt-20"
                    style={{
                        opacity: opacity,
                        rotateX: rotateX,
                        transformPerspective: "800px",
                    }}

                >
                    <img
                        src={appScreen}
                        alt="The product screenshot"
                        className="mt-16 rounded-1xl border-4 border-primary/30 hover:border-primary/60 hover:shadow-luxury transition-all duration-500 hover-lift animate-glow"
                        ref={appImage}
                    />
                </motion.div>
            </div>
        </div>
    );
};
