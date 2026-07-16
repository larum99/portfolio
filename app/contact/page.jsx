"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Teléfono",
    description: "(+57) 317 214 1441",
  },
  {
    icon: <FaEnvelope />,
    title: "Correo Electrónico",
    description: "laura.barona@uao.edu.co",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "País",
    description: "Colombia",
  },
]

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
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                <h3 className="text-4xl text-accent text-center">Contáctame</h3>
                <p></p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input type="firstname" placeholder="Nombre"/>
                  <Input type="lastname" placeholder="Apellidos"/>
                  <Input type="email" placeholder="Correo Electrónico"/>
                  <Input type="phone" placeholder="Teléfono"/>
                </div>
                <Textarea className="h-[200px]"
                placeholder="Deja tu mensaje aquí."/>
                <Button size="md" className="mx-auto justify-center max-w-40 px-5 py-2">Enviar</Button>
              </form>
          </div> */}
          <div className="flex-1 flex justify-center items-center order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item) => {
                return (
                  <li key={item.title} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center ">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default contact;