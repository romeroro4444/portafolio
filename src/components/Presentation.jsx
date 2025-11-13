import React from "react";
import avatarImg from "../assets/IMG_0856.webp";
import { FaDownload, FaLinkedin, FaGithub } from "react-icons/fa";

// CV FILE
const cvUrl = new URL("../assets/CV_Rodrigo_Romero.docx", import.meta.url).href;
const cpUrl = new URL("../assets/Carta_de_Presentación.docx", import.meta.url)
  .href;
// Gmail
const gmailUrl =
  "https://mail.google.com/mail/?view=cm&fs=1&to=romerorodrigorojas@gmail.com";

const Presentation = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-8 py-12 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] md:gap-8 gap-6 items-start">
        <div>
          <h2 className="text-6xl md:text-7xl font-extrabold text-[#EEEEEE] leading-tight md:whitespace-nowrap">
            Hola, soy <span className="text-[#00ADB5]">Rodrigo</span>
          </h2>
          <p className="mt-3 text-[#EEEEEE] text-lg">
            Estudiante de Ingeniería en Computación e Informática
          </p>

          <p className="mt-5 text-[#cfcfcf] max-w-3xl leading-relaxed text-base">
            Apasionado por la tecnología y el desarrollo full-stack, enfocado en
            construir aplicaciones web modernas y de alto rendimiento.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="https://www.linkedin.com/in/rodrigo-romero-rojas-7a5a68290/"
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#2f3336] rounded-full text-sm text-[#EEEEEE] bg-[#2f3336]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
              LinkedIn
            </a>

            <a
              href="https://github.com/romeroro4444"
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#2f3336] rounded-full text-sm text-[#EEEEEE] bg-[#2f3336]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href={gmailUrl}
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#2f3336] rounded-full text-sm text-[#EEEEEE] bg-[#2f3336]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email (Gmail)
            </a>

            <a
              href={cvUrl}
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm md:text-base font-medium text-[#222831] bg-[#00ADB5] shadow-md"
              aria-label="Descargar Currículum Vítae"
            >
              Currículum Vítae
              <FaDownload />
            </a>
            <a
              href={cpUrl}
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm md:text-base font-medium text-[#222831] bg-[#00ADB5] shadow-md"
              aria-label="Descargar Carta de Presentación"
            >
              Carta de Presentación
              <FaDownload />
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center md:justify-end">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden ring-8 ring-[#222831] bg-white">
            <img
              src={avatarImg}
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="py-12">
        <h2 className="text-2xl md:text-2xl font-extrabold text-[#EEEEEE] leading-tight md:whitespace-nowrap">
          Perfil Profesional
        </h2>
        <div className="mt-3">
          <p className="text-[#EEEEEE] text-lg max-w-4xl text-justify">
            Soy estudiante de Ingeniería en Computación e Informática con una
            sólida formación técnica y una fuerte orientación hacia el
            desarrollo de software. Me especializo en la construcción de
            aplicaciones web y móviles, abarcando tanto el frontend como el
            backend, mediante el uso de tecnologías modernas como React,
            Node.js, MongoDB y PostgreSQL. Durante mi formación universitaria he
            desarrollado diversos proyectos que fortalecieron mis habilidades en
            trabajo colaborativo, resolución de problemas y diseño de soluciones
            escalables. Mi motivación se centra en seguir perfeccionando mis
            competencias como desarrollador full stack y aportar en entornos
            donde la innovación tecnológica y la mejora continua sean parte
            fundamental del trabajo. Destaco por mi responsabilidad,
            creatividad, aprendizaje rápido y capacidad de adaptación,
            cualidades que me permiten integrarme eficazmente en equipos
            multidisciplinarios y contribuir activamente al logro de los
            objetivos institucionales y de desarrollo tecnológico.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
