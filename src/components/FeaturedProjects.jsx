import React from "react";
import tuexperto from "./../assets/TuExperto.webp";
import PawsAdopt from "./../assets/PawsAdopt.webp";
import Biblioteca from "./../assets/Biblioteca.webp";

const sampleProjects = [
  {
    id: 1,
    title: "Red de Servicios de Profesionales ",
    description:
      "Plataforma para conectar profesionales independientes con clientes, facilitando la publicación de servicios y gestión de solicitudes. ",
    image: tuexperto,
    tags: ["React", "Node.js", "PostgreSQL", "JWT"],
  },
  {
    id: 2,
    title: " Plataforma de Adopción de Mascotas",
    description:
      "Aplicación web que permite publicar, buscar y adoptar mascotas. Incluye autenticación, manejo de perfiles y comunicación entre usuarios.",
    image: PawsAdopt,
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 3,
    title: "Sistema de Biblioteca",
    description:
      "Sistema web colaborativo para la gestión de libros, mangas y videos, con funcionalidades CRUD y filtrado dinámico.",
    image: Biblioteca,
    tags: ["React", "Node.js "],
  },
];

const FeaturedProjects = ({ projects = sampleProjects }) => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-8 py-2">
      <h2 className="text-3xl font-extrabold text-[#EEEEEE] mb-6">
        Proyectos Destacados
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article
            key={p.id}
            className="bg-[#1f2932] rounded-xl overflow-hidden shadow-lg flex flex-col"
          >
            <div className="h-56 md:h-64 w-full overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold text-[#EEEEEE] mb-1">
                {p.title}
              </h3>
              <p className="text-sm text-[#cfcfcf] mb-4 flex-1">
                {p.description}
              </p>

              <div className="pt-2">
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-[#222831] text-[#00ADB5] px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
