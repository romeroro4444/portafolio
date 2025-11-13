import React from "react";
import { FaEye, FaDownload } from "react-icons/fa";
import Toeic from "./../assets/CERTIFICADO TOEIC.pdf";
import RespSocial from "./../assets/Certificado_ 202510.2438 _ RESPONSABILIDAD SOCIAL.pdf";
import PowerBi from "./../assets/CERTIFICADO Toma mejores decisiones basadas en datos Power BI.pdf";

const certifications = [
  {
    id: 1,
    kind: "Certificación",
    title: "Certificado TOEIC B1",
    description:
      "Certificación de competencia en inglés a nivel intermedio (B1), validando habilidades para comunicarme en situaciones cotidianas y profesionales.",
    file: Toeic,
  },
  {
    id: 2,
    kind: "Curso",
    title: "Curso de Responsabilidad Social Universitaria - UNAB",
    description:
      "Formación sobre principios éticos, sostenibilidad e impacto social en el ámbito profesional y tecnológico.",
    file: RespSocial,
  },
  {
    id: 3,
    kind: "Certificado",
    title: "Toma mejores decisiones basadas en datos: Power BI - Santander X",
    description:
      "Curso enfocado en el uso de Power BI para transformar datos en información útil y visualizaciones interactivas, facilitando la toma de decisiones estratégicas basadas en análisis de datos.",
    file: PowerBi,
  },
];

const Certifications = ({ items = certifications }) => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-12">
      <h2 className="text-3xl font-extrabold text-[#EEEEEE] mb-6">
        Certificaciones y Cursos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((c) => (
          <article
            key={c.id}
            className="bg-[#2a3338] p-6 rounded-xl shadow-md flex flex-col"
          >
            <small className="text-xs text-[#00ADB5]">{c.kind}</small>
            <h3 className="mt-2 text-xl font-semibold text-[#EEEEEE]">
              {c.title}
            </h3>
            <p className="mt-3 text-sm text-[#cfcfcf] flex-1">
              {c.description}
            </p>

            <div className="mt-4 flex gap-3">
              <a
                href={c.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#00ADB5] text-[#222831] rounded-full text-sm font-medium"
                aria-label={`Ver ${c.title}`}
              >
                <FaEye /> Ver
              </a>

              <a
                href={c.file}
                download
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#222831] border border-[#2f3336] text-[#EEEEEE] rounded-full text-sm"
                aria-label={`Descargar ${c.title}`}
              >
                <FaDownload /> Descargar
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
