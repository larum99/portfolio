"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

import { Tooltip, TooltipConten, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link"
import Image from "next/image"
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: "01",
        category: "frontend",
        title: "Blog",
        description: "Diseño de blog basado en el grupo K/DA. Se usan conceptos como CSS GRID, Flexbox y la biblioteca llamada ScrollReveal.",
        stack:
            [{ name: "Html 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
        image: "/assets/work/B.PNG",
        github: "https://github.com/larum99/html-css",
    },
    {
        num: "02",
        category: "Lógica de Programación",
        title: "Teatro Apolo",
        description: "Gestión de reservas de puestos en la salas del Teatro Apolo mediante un programa en Python",
        stack:
            [{ name: "Python" }],
        image: "/assets/work/T_A.PNG",
        github: "https://github.com/pio-grupo-6/reserva-sala-cine/tree/626a3b79275220a1dba57ffda1362086f460829d",
    },
    {
        num: "03",
        category: "frontend",
        title: "Teatro Apolo",
        description: "Diseño de página web para gestión de reservas en una sala de cine del Teatro Apolo",
        stack:
            [{ name: "Html 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
        image: "/assets/work/T_A_F.PNG",
        github: "https://github.com/Yansury/Teatro-Apolo/tree/956cee42e3bdcde6639aa4063222d771ab4d3b6d",
    },
    {
        num: "04",
        category: "Full Stack MERN",
        title: "Teatro Apolo",
        description: "Página web para gestión de reservas en una sala de cine del Teatro Apolo",
        stack:
            [{ name: "Express" }, { name: "MongoDB" }, { name: "NodeJS" }, { name: "NextJS" }],
        image: "/assets/work/T_A_V.PNG",
        github: "https://github.com/larum99/teatro_apolo_mern",
        deploy: "https://teatro-apolo-mern-frontend.vercel.app",
    },
    {
        num: "05",
        category: "Full Stack MERN",
        title: "Gestión de Productos",
        description: "Página web para gestión de Productos",
        stack:
            [{ name: "Express" }, { name: "MongoDB" }, { name: "NodeJS" }, { name: "NextJS" }],
        image: "/assets/work/Captura2.PNG",
        github: "https://github.com/larum99/products-crud",
        deploy: "https://products-crud-mern-frontend.vercel.app",
    },
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        //get current slide index
        const currentIndex = swiper.activeIndex;
        //update project stat based on current slide index
        setProject(projects[currentIndex]);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px
        ]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">Proyecto {project.category}</h2>
                            <p className="text-white/60">{project.description}</p>
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return <li key={index} className="text-xl text-accent">{item.name}
                                        {/* to remove the last comma */}
                                        {index !== project.stack.length - 1 && ","}</li>
                                })}
                            </ul>
                            <div className=""></div>
                        </div>
                        <div className="flex items-center gap-4 mt-6">
                            <Link href={project.github}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                        </TooltipTrigger>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                            {project.deploy && (
                                <Link href={project.deploy}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <FiExternalLink className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            )}
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}>
                            {projects.map((project, index) => {
                                return <SwiperSlide key={index} className="w-full">
                                    <div className="h-[460px] relative group flex  justify-center items-center">

                                        <div className="relative w-full h-full">
                                            <Image src={project.image}
                                                fill
                                                className="object-contain"
                                                alt="">

                                            </Image>
                                        </div>
                                    </div></SwiperSlide>;
                            })}
                            {/* slider buttons */}
                            <WorkSliderBtns
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Work