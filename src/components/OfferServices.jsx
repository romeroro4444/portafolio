import React from "react";
import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaCogs,
  FaAndroid,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Desarrollo Web y Full Stack",
    desc: "Construcción de aplicaciones web completas desde el frontend hasta backend y base de datos con enfoque en mantenibilidad.",
    Icon: FaLaptopCode,
  },
  {
    id: 2,
    title: "Desarrollo de APIs REST",
    desc: "Diseño e integración de APIs REST para conectar servicios y aplicaciones con buenas prácticas de seguridad y escalabilidad.",
    Icon: FaServer,
  },
  {
    id: 3,
    title: "Desarrollo Android (Kotlin)",
    desc: "Implementación de funcionalidades móviles con Kotlin bajo arquitectura MVVM, integrando Retrofit y Room (SQLite).",
    Icon: FaAndroid,
  },
  {
    id: 4,
    title: "Gestión de Bases de Datos",
    desc: "Modelado e implementación de bases de datos relacionales y no relacionales como PostgreSQL, MongoDB, SQLite y SQL Server.",
    Icon: FaDatabase,
  },
  {
    id: 5,
    title: "Arquitectura y Mejora Continua",
    desc: "Aplicación de prácticas de arquitectura, versionado con GitFlow y mejora continua para soluciones tecnológicas escalables.",
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
