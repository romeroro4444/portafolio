import React from "react";
import {
  FaLaptopCode,
  FaServer,
  FaReact,
  FaDatabase,
  FaCogs,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Desarrollo Web/Móvil Full Stack",
    desc: "Creación de aplicaciones completas, desde la interfaz de usuario hasta la lógica del servidor y la base de datos.",
    Icon: FaLaptopCode,
  },
  {
    id: 2,
    title: "Desarrollo de APIs REST",
    desc: "Diseño e implementación de APIs robustas, seguras y escalables para conectar servicios y aplicaciones.",
    Icon: FaServer,
  },
  {
    id: 3,
    title: "Desarrollo con React",
    desc: "Construcción de interfaces de usuario interactivas y dinámicas utilizando el ecosistema de React.",
    Icon: FaReact,
  },
  {
    id: 4,
    title: "Gestión de Bases de Datos",
    desc: "Modelado, implementación y administración de bases de datos relacionales y no relacionales.",
    Icon: FaDatabase,
  },
  {
    id: 5,
    title: "Optimización y Automatización",
    desc: "Mejora del rendimiento de aplicaciones y automatización de procesos para aumentar la eficiencia.",
    Icon: FaCogs,
  },
];

const OfferServices = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-2">
      <h2 className="text-3xl font-extrabold text-[#EEEEEE] mb-6">
        Servicios que Puedo Ofrecer
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ id, title, desc, Icon }) => (
          <div
            key={id}
            className="bg-[#2a3338] rounded-lg p-6 shadow-md min-h-[140px] flex flex-col"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-md bg-[#222831] flex items-center justify-center text-[#00ADB5] text-2xl">
                <Icon />
              </div>
              <h3 className="text-lg font-semibold text-[#EEEEEE]">{title}</h3>
            </div>

            <p className="mt-4 text-sm text-[#cfcfcf] flex-1">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferServices;
