import React from "react";
import { FaBriefcase } from "react-icons/fa6";

const experiences = [
  {
    id: 1,
    role: "Soporte TI, C&C Consultores",
    company: "C&C Consultores",
    companyUrl: "https://consultorescyc.cl/",
    period: "dic. 2023 — ene. 2024",
    description:
      "Atención a usuarios, configuración de equipos y gestión de incidencias. Aprendizaje en resolución de problemas técnicos y administración básica de infraestructura. ",
  },
];

const WorkExperience = ({ items = experiences }) => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-8">
      <h2 className="text-2xl md:text-3xl font-extrabold text-[#EEEEEE] mb-6">
        Experiencia Laboral
      </h2>

      <div className="space-y-4">
        {items.map((item) => (
          <article
            key={item.id}
            className="bg-[#2a3338] rounded-lg p-4 flex gap-4 items-start"
          >
            <div className="shrink-0">
              <div className="w-12 h-12 rounded-md bg-[#222831] flex items-center justify-center text-[#00ADB5]">
                <FaBriefcase />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-[#EEEEEE]">
                    {item.role}
                  </h3>
                  <a
                    href={item.companyUrl}
                    className="text-sm text-[#00ADB5]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.company}
                  </a>
                </div>

                <div className="text-sm text-[#9aa0a6] ml-4">{item.period}</div>
              </div>

              <p className="mt-2 text-sm text-[#cfcfcf]">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
