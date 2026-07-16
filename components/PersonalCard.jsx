import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const PersonalCard = () => {
    return (
        <div className="w-full max-w-[380px] rounded-2xl overflow-hidden bg-[#27272c] border border-transparent hover:border-accent transition-all duration-300">
            <Link
                href="https://www.linkedin.com/in/laura-barona-saavedra-backend-frontend-software-developer/"
                target="_blank"
                className="block"
            >
                <div className="h-[120px] bg-gradient-to-r from-accent via-accent/60 to-accent/30" />

                <div className="flex flex-col items-center px-6 pb-8">
                    <div className="relative w-[120px] h-[120px] -mt-[60px] mb-4 rounded-full border-4 border-[#27272c] overflow-hidden">
                        <Image
                            src="/assets/profile.png"
                            fill
                            alt="Laura Barona Saavedra"
                            className="object-cover"
                        />
                    </div>

                    <h2 className="text-2xl font-bold text-white">
                        Laura Barona Saavedra
                    </h2>

                    <p className="text-accent font-semibold mt-1">
                        Backend Developer
                    </p>

                    <p className="text-white/50 text-center mt-3 text-sm leading-relaxed">
                        Desarrolladora de software con experiencia en backend y conocimientos en frontend.
                    </p>
                </div>
            </Link>

            <div className="flex gap-3 px-6 pb-8 pt-5 border-t border-white/10 w-full justify-center">
                <Link
                    href="https://wa.me/573172141441?text=Hola%20Laura%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20contactarte."
                    target="_blank"
                    title="(+57) 317 214 1441"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-accent hover:text-primary transition-all duration-300"
                >
                    <FaWhatsapp className="text-lg" />
                </Link>
                <Link
                    href="mailto:laura.barona@uao.edu.co"
                    title="laura.barona@uao.edu.co"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-accent hover:text-primary transition-all duration-300"
                >
                    <FaEnvelope className="text-lg" />
                </Link>
                <Link
                    href="https://github.com/larum99"
                    target="_blank"
                    title="GitHub"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-accent hover:text-primary transition-all duration-300"
                >
                    <FaGithub className="text-lg" />
                </Link>
            </div>
        </div>
    );
};

export default PersonalCard;
