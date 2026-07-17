"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { BsGithub } from "react-icons/bs";
import { FiExternalLink, FiCheck, FiChevronLeft, FiChevronRight } from "react-icons/fi";

import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        id: 1,
        num: "01",
        title: "Hogar360",
        subtitle: "Plataforma inmobiliaria full stack",
        category: "Full Stack",
        role: ["Backend Developer", "Frontend Developer"],
        architecture: "Arquitectura de Puertos y Adaptadores (Hexagonal) + Microservicios. Atomic Design + Arquitectura por módulos.",
        description:
            "Plataforma inmobiliaria orientada al mercado colombiano que permite publicar propiedades, agendar visitas y gestionar reservas. Compuesta por 3 microservicios backend en Java y una aplicación SPA en Angular, comunicados mediante JWT y OpenFeign.",
        features: [
            "Autenticación y autorización con JWT y roles (ADMIN / VENDEDOR).",
            "Gestión de propiedades con búsqueda avanzada y paginación dinámica (JPA Specifications).",
            "Sistema de publicación programada con tareas cron que activa propiedades automáticamente.",
            "Agendamiento de visitas con validación de propiedad vía Feign y control de superposición de horarios.",
            "Reserva de visitas con límite de 2 reservas por espacio y prevención de duplicados.",
            "Gestión de ubicaciones jerárquicas: Departamento → Ciudad → Sector.",
            "Frontend SPA con Atomic Design, Angular Material y internacionalización (i18n).",
            "Unit testing con JUnit 5, Mockito y JaCoCo para cobertura de código.",
        ],
        microservices: [
            "hogar360-houses-ms (8090) — Propiedades, categorías y ubicaciones",
            "hogar360-users-ms (8091) — Autenticación y gestión de usuarios",
            "hogar360-visits-ms (8092) — Visitas y reservas con OpenFeign",
        ],
        stack: [
            "Java",
            "Spring Boot",
            "Spring Security",
            "JWT",
            "Spring Data JPA",
            "Spring Cloud OpenFeign",
            "MySQL",
            "Angular",
            "Angular Material",
            "MapStruct",
            "Swagger",
            "Gradle",
            "Jest",
        ],
        images: [
            { src: "/assets/work/hogar360/hogar360.png", alt: "Hogar360 - Panel principal" },
            { src: "/assets/work/hogar360/hogar360-login.png", alt: "Hogar360 - Login" },
            { src: "/assets/work/hogar360/hogar360-dashboard-vendedor-categorias.png", alt: "Hogar360 - Panel vendedor" },
            { src: "/assets/work/hogar360/hogar360-dashboard-vendedor-ubicaciones.png", alt: "Hogar360 - Panel vendedor" },
            { src: "/assets/work/hogar360/hogar360-dashboard-vendedor-casas.png", alt: "Hogar360 - Panel vendedor" },
            { src: "/assets/work/hogar360/hogar360-dashboard-vendedor-visitas.png", alt: "Hogar360 - Panel vendedor" },
            { src: "/assets/work/hogar360/hogar360-dashboard-admin-categorias.png", alt: "Hogar360 - Panel admin" },
            { src: "/assets/work/hogar360/hogar360-dashboard-admin-ubicaciones.png", alt: "Hogar360 - Panel admin" },
            { src: "/assets/work/hogar360/hogar360-dashboard-admin-casas.png", alt: "Hogar360 - Panel admin" },
            { src: "/assets/work/hogar360/hogar360-dashboard-admin-usuarios.png", alt: "Hogar360 - Panel admin" },
            { src: "/assets/work/hogar360/hogar360-dashboard-admin-visitas.png", alt: "Hogar360 - Panel admin" },
            { src: "/assets/work/hogar360/hogar360-users.png", alt: "Hogar360 - Users MS" },
            { src: "/assets/work/hogar360/hogar360-houses.png", alt: "Hogar360 - Houses MS" },
            { src: "/assets/work/hogar360/hogar360-visits.png", alt: "Hogar360 - Visits MS" },
        ],
        repositories: [
            {
                name: "Frontend Angular",
                url: "https://github.com/larum99/hogar360-frontend",
            },
            {
                name: "Users MS",
                url: "https://github.com/larum99/hogar360-users-ms",
            },
            {
                name: "Houses MS",
                url: "https://github.com/larum99/hogar360-houses-ms",
            },
            {
                name: "Visits MS",
                url: "https://github.com/larum99/hogar360-visits-ms",
            },
        ],
    },
    {
        id: 2,
        num: "02",
        title: "Plazoleta",
        subtitle: "Plataforma de plazoleta de comidas backend",
        category: "Backend",
        role: ["Backend Developer"],
        architecture: "Arquitectura de Puertos y Adaptadores (Hexagonal) + Microservicios. Comunicación inter-servicios vía Spring Cloud OpenFeign.",
        description:
            "Plataforma de food court orientada al mercado colombiano que permite gestionar restaurantes, platos del menú, pedidos con ciclo de vida completo, empleados, notificaciones SMS y trazabilidad de auditoría. Compuesta por 4 microservicios backend en Java, dos bases de datos (MySQL y MongoDB) y notificaciones vía Twilio.",
        features: [
            "Autenticación y autorización con JWT y 4 roles (ADMINISTRADOR, PROPIETARIO, EMPLEADO, CLIENTE).",
            "Gestión de restaurantes con paginación dinámica y validación de NIT único.",
            "Gestión de platos del menú con activación/desactivación y filtrado por categoría y restaurante.",
            "Ciclo de vida completo de pedidos: PENDIENTE → EN_PREPARACIÓN → LISTO → ENTREGADO (o CANCELADO).",
            "Regla de negocio: un cliente solo puede tener un pedido activo a la vez.",
            "Código de verificación de 6 dígitos generado aleatoriamente y enviado por SMS al estar listo el pedido.",
            "Envío de notificaciones SMS vía Twilio (código de verificación y notificación de cancelación rechazada).",
            "Trazabilidad de auditoría con registro de cada cambio de estado del pedido en MongoDB.",
            "Métricas de eficiencia: tiempo promedio de preparación por empleado y ranking de desempeño.",
            "Asignación de empleados a restaurantes con validación de existencia vía Feign.",
            "JWT propagado entre microservicios mediante FeignClientInterceptor.",
            "Unit testing con JUnit 5, Mockito y JaCoCo para cobertura de código.",
        ],
        microservices: [
            "plazoleta-users-ms (8090) — Autenticación, usuarios y roles (MySQL)",
            "plazoleta-plazoleta-ms (8091) — Restaurantes, platos y pedidos (MySQL)",
            "plazoleta-messaging-ms (8092) — Notificaciones SMS vía Twilio",
            "plazoleta-traceability-ms (8093) — Trazabilidad y métricas de eficiencia (MongoDB)",
        ],
        stack: [
            "Java",
            "Spring Boot",
            "Spring Security",
            "JWT",
            "Spring Data JPA",
            "Spring Data MongoDB",
            "Spring Cloud OpenFeign",
            "MySQL",
            "MongoDB",
            "Twilio SDK",
            "MapStruct",
            "SpringDoc OpenAPI",
            "Gradle",
            "JUnit",
            "Mockito",
            "JaCoCo",
        ],
        images: [
            { src: "/assets/work/plazoleta/users-ms.png", alt: "Plazoleta - Users MS" },
            { src: "/assets/work/plazoleta/messaging-ms.png", alt: "Plazoleta - Messaging MS" },
            { src: "/assets/work/plazoleta/plazoleta-ms.png", alt: "Plazoleta - Plazoleta MS" },
            { src: "/assets/work/plazoleta/traceability-ms.png", alt: "Plazoleta - Traceability MS" },
        ],
        repositories: [
            {
                name: "Users MS",
                url: "https://github.com/larum99/plazoleta-users-ms",
            },
            {
                name: "Plazoleta MS",
                url: "https://github.com/larum99/plazoleta-plazoleta-ms",
            },
            {
                name: "Messaging MS",
                url: "https://github.com/larum99/plazoleta-messaging-ms",
            },
            {
                name: "Traceability MS",
                url: "https://github.com/larum99/plazoleta-traceability-ms",
            },
        ],
    },
];

const Work = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(0);
    const project = projects[currentIndex];

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
        setSelectedImage(0);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
        setSelectedImage(0);
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
                {projects.length > 1 && (
                    <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2">
                        <button
                            onClick={goToPrevious}
                            className="shrink-0 flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 hover:bg-accent hover:text-primary transition-all duration-300"
                        >
                            <FiChevronLeft className="text-lg" />
                        </button>

                        {projects.map((p) => (
                            <button
                                key={p.id}
                                onClick={() => {
                                    setCurrentIndex(projects.indexOf(p));
                                    setSelectedImage(0);
                                }}
                                className={`shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                    p.id === project.id
                                        ? "bg-accent text-primary"
                                        : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white"
                                }`}
                            >
                                {p.num} — {p.title}
                            </button>
                        ))}

                        <button
                            onClick={goToNext}
                            className="shrink-0 flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 hover:bg-accent hover:text-primary transition-all duration-300"
                        >
                            <FiChevronRight className="text-lg" />
                        </button>
                    </div>
                )}

                <div className="flex flex-col xl:flex-row gap-10">
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
                                {project.role.map((r) => (
                                    <span
                                        key={r}
                                        className="px-4 py-1 rounded-full border border-accent text-accent"
                                    >
                                        {r}
                                    </span>
                                ))}
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">
                                    Arquitectura
                                </h3>
                                <p className="text-white/70">
                                    {project.architecture}
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">
                                    Descripción
                                </h3>
                                <p className="text-white/70 leading-7">
                                    {project.description}
                                </p>
                            </div>
                            {project.repositories?.length > 0 && (
                                <div>
                                    <h3 className="text-xl font-semibold mb-3">
                                        Repositorios
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {project.repositories.map((repo) => (
                                            <Link
                                                href={repo.url}
                                                target="_blank"
                                                key={repo.url}
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
                            {project.stack?.length > 0 && (
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">
                                        Tecnologías
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.stack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 rounded-full bg-accent/10 border border-accent text-accent text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {project.features?.length > 0 && (
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">
                                        Funcionalidades
                                    </h3>
                                    <ul className="space-y-2">
                                        {project.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="text-white/70"
                                            >
                                                <FiCheck className="inline mr-1 text-accent" />{feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {project.microservices?.length > 0 && (
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">
                                        Microservicios
                                    </h3>
                                    <ul className="space-y-2">
                                        {project.microservices.map((service) => (
                                            <li
                                                key={service}
                                                className="text-white/70"
                                            >
                                                <FiCheck className="inline mr-1 text-accent" />{service}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
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
                    <div className="w-full xl:w-1/2 flex flex-col gap-4">
                        <div className="relative h-[500px] rounded-xl overflow-hidden">
                            <Image
                                src={project.images[selectedImage].src}
                                fill
                                alt={project.images[selectedImage].alt}
                                className="object-contain"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent px-6 py-4">
                                <h2 className="text-2xl font-bold">{project.title}</h2>
                                <p className="text-white/60 text-sm">{project.images[selectedImage].alt}</p>
                            </div>
                        </div>
                        <div className="w-full max-w-[500px] mx-auto flex gap-3 overflow-x-auto flex-nowrap pb-2">
                            {project.images.map((img, index) => (
                                <button
                                    key={img.src}
                                    onClick={() => setSelectedImage(index)}
                                    className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                                        selectedImage === index
                                            ? "border-accent scale-105"
                                            : "border-white/10 opacity-50 hover:opacity-80"
                                    }`}
                                >
                                    <Image
                                        src={img.src}
                                        fill
                                        alt={img.alt}
                                        className="object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Work