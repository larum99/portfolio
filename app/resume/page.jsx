"use client";

import {
    FaAws,
    FaCss3Alt,
    FaDocker,
    FaGitAlt,
    FaHtml5,
    FaJava,
    FaReact,
    FaNodeJs
} from "react-icons/fa";

import {
    SiAngular,
    SiGithub,
    SiGradle,
    SiJavascript,
    SiMongodb,
    SiMysql,
    SiPostman,
    SiSpringboot,
    SiSwagger,
    SiTypescript,
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { motion } from "framer-motion";

const education = {
    title: "Mi Formación",
    description:
        "Mi formación combina una base en ingeniería con una especialización continua en desarrollo de software, fortaleciendo mis conocimientos mediante estudios formales, bootcamps y experiencia práctica.",

    items: [
        {
            institution: "Generation Colombia",
            degree: "Bootcamp Full Stack Jr. Java",
            duration: "Mayo 2026 - Actualidad",
            description:
                "Bootcamp intensivo orientado al desarrollo Full Stack con Java, Spring Boot, HTML, CSS y JS; complementado con metodologías ágiles y habilidades para el entorno profesional.",
        },
        {
            institution: "SENA",
            degree: "Tecnólogo en Análisis y Desarrollo de Software",
            duration: "Agosto 2025 - Actualidad",
            description:
                "Programa tecnológico enfocado en el análisis, diseño, desarrollo e implementación de soluciones de software siguiendo buenas prácticas de desarollo de software.",
        },
        {
            institution: "Pragma",
            degree: "Bootcamp Java & Angular",
            duration: "Marzo 2025 - Junio 2025",
            description:
                "Durante 13 semanas desarrollé un reto práctico utilizando Java y Angular, aplicando arquitectura por capas, APIs REST, bases de datos y control de versiones con Git.",
        },
        {
            institution: "Politécnico Internacional de Occidente (PIO)",
            degree: "Técnico Laboral como Asistente en Desarrollo de Software",
            duration: "Septiembre 2024 - Septiembre 2025",
            description:
                "Formación enfocada en programación, bases de datos, desarrollo web y fundamentos de desarrollo de software.",
        },
        {
            institution: "Universidad Autónoma de Occidente",
            degree: "Ingeniería Mecatrónica",
            duration: "Enero 2017 - octubre 2023",
            description:
                "Formación en automatización, electrónica y programación, fortaleciendo el pensamiento analítico, la resolución de problemas y el diseño de soluciones tecnológicas.",
        },
    ],
};
const experience = {
    title: "Experiencia Profesional",
    description:
        "He participado en proyectos de desarrollo de software aplicando tecnologías backend y frontend, trabajando en equipo y siguiendo buenas prácticas de desarrollo.",

    items: [
        {
            company: "Pragma",
            position: "Practicante de Desarrollo de Software",
            duration: "Junio 2025 - Enero 2026",
            description:
                "Participé en el desarrollo de aplicaciones utilizando Java, Spring Boot y Angular. Trabajé con arquitectura hexagonal, microservicios, APIs REST, Git, AWS, nodejs y metodologías ágiles en proyectos empresariales.",
        },
    ],
};

const skills = {
    title: "Tecnologías y Herramientas",
    description:
        "Estas son las principales tecnologías y herramientas que he utilizado en proyectos académicos y profesionales.",

    categories: [
        {
            title: "Backend",
            skills: [
                {
                    icon: <FaJava />,
                    name: "Java",
                },
                {
                    icon: <SiSpringboot />,
                    name: "Spring Boot",
                },
                {
                    icon: <FaNodeJs />,
                    name: "Nodejs",
                },
            ],
        },

        {
            title: "Frontend",
            skills: [
                {
                    icon: <SiAngular />,
                    name: "Angular",
                },
                {
                    icon: <FaReact />,
                    name: "React",
                },
                {
                    icon: <SiTypescript />,
                    name: "TypeScript",
                },
                {
                    icon: <SiJavascript />,
                    name: "JavaScript",
                },
                {
                    icon: <FaHtml5 />,
                    name: "HTML5",
                },
                {
                    icon: <FaCss3Alt />,
                    name: "CSS3",
                },
            ],
        },

        {
            title: "Bases de datos",
            skills: [
                {
                    icon: <SiMysql />,
                    name: "MySQL",
                },
                {
                    icon: <SiMongodb />,
                    name: "MongoDB",
                },
            ],
        },

        {
            title: "Cloud y Herramientas",
            skills: [
                {
                    icon: <FaGitAlt />,
                    name: "Git",
                },
                {
                    icon: <SiGithub />,
                    name: "GitHub",
                },
                {
                    icon: <FaAws />,
                    name: "AWS",
                },
                {
                    icon: <SiPostman />,
                    name: "Postman",
                },
                {
                    icon: <SiSwagger />,
                    name: "Swagger",
                },
                {
                    icon: <SiGradle />,
                    name: "Gradle",
                },
            ],
        },
    ],
};

const resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <Tabs
                    defaultValue="education"
                    className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="education">Educación</TabsTrigger>
                        <TabsTrigger value="experience">Experiencia</TabsTrigger>
                        <TabsTrigger value="skills">Habilidades</TabsTrigger>
                    </TabsList>

                    <div className="h-[900px] w-full">
                        <TabsContent value="education" className="w-full h-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item) => {
                                            return (
                                                <li
                                                    key={item.degree}
                                                    className="bg-[#27272c] h-auto py-6 px-8 rounded-xl flex flex-col gap-3"
                                                >
                                                    <span className="text-accent text-sm font-medium">
                                                        {item.duration}
                                                    </span>

                                                    <h3 className="text-xl font-semibold">
                                                        {item.degree}
                                                    </h3>

                                                    <p className="text-white/60">
                                                        {item.institution}
                                                    </p>

                                                    {item.description && (
                                                        <p className="text-white/70 text-sm leading-6">
                                                            {item.description}
                                                        </p>
                                                    )}
                                                </li>
                                            )
                                        })}
                                    </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="experience" className="w-full h-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">

                                <h3 className="text-4xl font-bold">
                                    {experience.title}
                                </h3>

                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>

                                <ul className="grid grid-cols-1 gap-[30px]">

                                    {experience.items.map((item) => (
                                        <li
                                            key={item.position}
                                            className="bg-[#27272c] rounded-xl px-8 py-8 flex flex-col gap-3"
                                        >
                                            <span className="text-accent">
                                                {item.duration}
                                            </span>

                                            <h3 className="text-2xl font-semibold">
                                                {item.position}
                                            </h3>

                                            <p className="text-white/60">
                                                {item.company}
                                            </p>

                                            <p className="text-white/80">
                                                {item.description}
                                            </p>

                                        </li>
                                    ))}

                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">

                                <div className="text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">
                                        {skills.title}
                                    </h3>

                                    <p className="max-w-[650px] text-white/60 mt-4">
                                        {skills.description}
                                    </p>
                                </div>

                                <div className="space-y-10">

                                    {skills.categories.map((category) => (

                                        <div key={category.title}>

                                            <h4 className="text-2xl font-semibold text-accent mb-5">
                                                {category.title}
                                            </h4>

                                            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">

                                                {category.skills.map((skill) => (

                                                    <li key={skill.name}>
                                                        <TooltipProvider delayDuration={100}>
                                                            <Tooltip>

                                                                <TooltipTrigger className="w-full h-[140px] bg-[#27272c] rounded-xl flex justify-center items-center group transition-all duration-300 cursor-default hover:border hover:border-accent">

                                                                    <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                        {skill.icon}
                                                                    </div>

                                                                </TooltipTrigger>

                                                                <TooltipContent>
                                                                    <p>{skill.name}</p>
                                                                </TooltipContent>

                                                            </Tooltip>
                                                        </TooltipProvider>
                                                    </li>

                                                ))}

                                            </ul>

                                        </div>

                                    ))}

                                </div>

                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default resume;