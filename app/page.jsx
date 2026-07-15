import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">

            <span className="text-xl font-medium">
              Backend Developer
            </span>

            <p className="text-accent mt-2 mb-4">
              Java • Spring Boot • Arquitectura Hexagonal • Angular
            </p>

            <h1 className="h1 mb-6">
              Hola, Soy <br />
              <span className="text-accent">
                Laura Barona Saavedra
              </span>
            </h1>

            <p className="max-w-[600px] mb-9 text-white/80 leading-8">
              Soy desarrolladora de software con formación en Ingeniería Mecatrónica y experiencia en el desarrollo de aplicaciones backend con Java y Spring Boot, así como interfaces web con Angular. Me interesa construir soluciones escalables aplicando arquitectura hexagonal, microservicios y buenas prácticas de desarrollo, mientras continúo fortaleciendo mis habilidades en tecnologías modernas.
            </p>

          </div>

          <div className="flex flex-col xl:flex-row items-center gap-8">
            <a
              href="/HdV_LBS.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Ver CV</span>
                <FiDownload className="text-xl" />
              </Button>
            </a>

            <div className="mb-8 xl:mb-0">
              <Social
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;