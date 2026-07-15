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
        id: 1,
        num: "01",

        title: "Plazoleta",
        subtitle: "Sistema de gestión de pedidos basado en microservicios",

        category: "Backend",

        role: "Backend Developer",

        architecture: "Arquitectura Hexagonal + Microservicios",

        description:
            "Sistema para la gestión de restaurantes y pedidos, desarrollado con una arquitectura distribuida basada en microservicios, aplicando principios SOLID y Clean Architecture.",

        features: [
            "Autenticación y autorización mediante JWT.",
            "Gestión de usuarios y propietarios.",
            "Administración de restaurantes y platos.",
            "Creación y seguimiento de pedidos.",
            "Notificaciones y trazabilidad del proceso.",
        ],

        microservices: [
            "Gestión de Usuarios",
            "Gestión de Pedidos",
            "Notificaciones",
            "Trazabilidad",
        ],

        stack: [
            "Java",
            "Spring Boot",
            "Spring Data JPA",
            "MySQL",
            "Docker",
            "Swagger",
            "JWT",
            "Gradle",
        ],

        image: "/assets/work/plazoleta.png",

        repositories: [
            {
                name: "Gestión de Usuarios",
                url: "",
            },
            {
                name: "Gestión de Pedidos",
                url: "",
            },
            {
                name: "Notificaciones",
                url: "",
            },
            {
                name: "Trazabilidad",
                url: "",
            },
        ],

        deploy: "",
    },

    {
        id: 2,
        num: "02",

        title: "Hogar360",

        subtitle: "Plataforma inmobiliaria",

        category: "Full Stack",

        role: "Backend Developer",

        architecture: "Arquitectura Hexagonal + Microservicios",

        description:
            "Aplicación inmobiliaria desarrollada mediante microservicios y frontend en Angular para la gestión de propiedades y publicaciones.",

        features: [],

        microservices: [
            "Gestión de Propiedades",
            "Publicaciones",
            "Usuarios",
        ],

        frontend: "Angular",

        stack: [
            "Java",
            "Spring Boot",
            "Angular",
            "MySQL",
            "Docker",
            "Swagger",
        ],

        image: "/assets/work/hogar360.png",

        repositories: [
            {
                name: "Frontend Angular",
                url: "",
            },
            {
                name: "Gestión de Propiedades",
                url: "",
            },
            {
                name: "Publicaciones",
                url: "",
            },
            {
                name: "Usuarios",
                url: "",
            },
        ],
    },

    {
        id: 3,
        num: "03",

        title: "Proyecto Final Generation",

        subtitle: "Sistema empresarial basado en microservicios",

        category: "Backend",

        role: "Backend Developer",

        architecture: "Microservicios",

        description:
            "Proyecto desarrollado durante el Bootcamp Full Stack Jr. Java de Generation Colombia.",

        features: [],

        microservices: [],

        stack: [],

        image: "/assets/work/generation.png",

        repositories: [],
    },

    {
        id: 4,
        num: "04",

        title: "Teatro Apolo",

        subtitle: "Sistema de reservas",

        category: "Full Stack MERN",

        role: "Full Stack Developer",

        architecture: "MERN",

        description:
            "Aplicación web para la gestión de reservas de salas de cine.",

        features: [
            "Autenticación",
            "Gestión de funciones",
            "Reserva de asientos",
        ],

        stack: [
            "MongoDB",
            "Express",
            "React",
            "Node.js",
            "Next.js",
        ],

        image: "/assets/work/teatro.png",

        repositories: [
            {
                name: "Repositorio",
                url: "",
            },
        ],

        deploy: "",
    },

    {
        id: 5,
        num: "05",

        title: "AWS Cloud",

        subtitle: "Despliegue de aplicaciones en AWS",

        category: "Cloud",

        role: "Backend Developer",

        architecture: "AWS",

        description:
            "Proyecto orientado al despliegue y administración de aplicaciones utilizando servicios de AWS.",

        features: [],

        stack: [
            "AWS",
            "Docker",
            "EC2",
            "RDS",
            "ECR",
        ],

        image: "/assets/work/aws.png",

        repositories: [
            {
                name: "Repositorio",
                url: "",
            },
        ],
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
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: 0.4,
                    ease: "easeIn",
                },
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-10">

                    {/* ========= INFORMACIÓN ========= */}

                    <div className="w-full xl:w-1/2">

                        <div className="flex flex-col gap-6">

                            <div className="text-8xl font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>

                            <div>
                                <h2 className="text-5xl font-bold">
                                    {project.title}
                                </h2>

                                <p className="text-accent text-xl mt-2">
                                    {project.subtitle}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3">

                                <span className="px-4 py-1 rounded-full bg-accent text-primary font-medium">
                                    {project.category}
                                </span>

                                <span className="px-4 py-1 rounded-full border border-accent text-accent">
                                    {project.role}
                                </span>

                            </div>

                            {/* Arquitectura */}

                            <div>

                                <h3 className="text-xl font-semibold mb-2">
                                    Arquitectura
                                </h3>

                                <p className="text-white/70">
                                    {project.architecture}
                                </p>

                            </div>

                            {/* Descripción */}

                            <div>

                                <h3 className="text-xl font-semibold mb-2">
                                    Descripción
                                </h3>

                                <p className="text-white/70 leading-7">
                                    {project.description}
                                </p>

                            </div>

                            {/* Funcionalidades */}

                            {project.features?.length > 0 && (

                                <div>

                                    <h3 className="text-xl font-semibold mb-2">
                                        Funcionalidades
                                    </h3>

                                    <ul className="space-y-2">

                                        {project.features.map((feature, index) => (

                                            <li
                                                key={index}
                                                className="text-white/70"
                                            >
                                                ✔ {feature}
                                            </li>

                                        ))}

                                    </ul>

                                </div>

                            )}

                            {/* Microservicios */}

                            {project.microservices?.length > 0 && (

                                <div>

                                    <h3 className="text-xl font-semibold mb-2">
                                        Microservicios
                                    </h3>

                                    <div className="flex flex-wrap gap-2">

                                        {project.microservices.map((service, index) => (

                                            <span
                                                key={index}
                                                className="px-3 py-1 rounded-full bg-white/10 text-accent text-sm"
                                            >
                                                {service}
                                            </span>

                                        ))}

                                    </div>

                                </div>

                            )}

                            {/* Tecnologías */}

                            {project.stack?.length > 0 && (

                                <div>

                                    <h3 className="text-xl font-semibold mb-2">
                                        Tecnologías
                                    </h3>

                                    <div className="flex flex-wrap gap-2">

                                        {project.stack.map((tech, index) => (

                                            <span
                                                key={index}
                                                className="px-3 py-1 rounded-full bg-accent/10 border border-accent text-accent rounded-full text-sm"
                                            >
                                                {tech}
                                            </span>

                                        ))}

                                    </div>

                                </div>

                            )}

                            {/* Repositorios */}

                            {project.repositories?.length > 0 && (

                                <div>

                                    <h3 className="text-xl font-semibold mb-3">
                                        Repositorios
                                    </h3>

                                    <div className="flex flex-wrap gap-3">

                                        {project.repositories.map((repo, index) => (

                                            <Link
                                                href={repo.url}
                                                target="_blank"
                                                key={index}
                                            >

                                                <button
                                                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-accent hover:text-primary transition-all duration-300"
                                                >

                                                    <BsGithub />

                                                    {repo.name}

                                                </button>

                                            </Link>

                                        ))}

                                    </div>

                                </div>

                            )}

                            {/* Demo */}

                            {project.deploy && (

                                <Link
                                    href={project.deploy}
                                    target="_blank"
                                >

                                    <button
                                        className="mt-2 flex items-center gap-2 px-5 py-3 rounded-lg bg-accent text-primary hover:bg-accent/80 transition-all"
                                    >

                                        <FiExternalLink />

                                        Ver Demo

                                    </button>

                                </Link>

                            )}

                        </div>

                    </div>

                    {/* ========= IMAGEN ========= */}

                    <div className="w-full xl:w-1/2">

                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px]"
                            onSlideChange={handleSlideChange}
                        >

                            {projects.map((item) => (

                                <SwiperSlide key={item.id}>

                                    <div className="relative h-[500px] rounded-xl overflow-hidden">

                                        <Image
                                            src={item.image}
                                            fill
                                            alt={item.title}
                                            className="object-contain"
                                        />

                                    </div>

                                </SwiperSlide>

                            ))}

                            <WorkSliderBtns
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                            />

                        </Swiper>

                    </div>

                </div>
            </div>
        </motion.div>
    );
};

export default Work