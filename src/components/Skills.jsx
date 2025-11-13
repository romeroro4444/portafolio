import React from "react";
import {
  SiJavascript,
  SiPython,
  SiC,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiExpress,
  SiJsonwebtokens,
} from "react-icons/si";

const groups = [
  {
    title: "Lenguajes",
    icons: [
      { icon: SiJavascript, label: "JavaScript" },
      { icon: SiPython, label: "Python" },
      { icon: SiC, label: "C" },
    ],
  },
  {
    title: "Frontend",
    icons: [
      { icon: SiReact, label: "React" },
      { icon: SiHtml5, label: "HTML" },
      { icon: SiCss3, label: "CSS" },
      { icon: SiTailwindcss, label: "TailwindCSS" },
    ],
  },
  {
    title: "Backend",
    icons: [
      { icon: SiNodedotjs, label: "Node.js" },
      { icon: SiExpress, label: "Express" },
      { icon: SiJsonwebtokens, label: "JWT" },
    ],
  },
  {
    title: "Bases de datos",
    icons: [
      { icon: SiPostgresql, label: "PostgreSQL" },
      { icon: SiMongodb, label: "MongoDB" },
    ],
  },
  {
    title: "Control de versiones",
    icons: [
      { icon: SiGit, label: "Git" },
      { icon: SiGithub, label: "GitHub" },
    ],
  },
];

const Skills = () => {
  const softSkills = [
    "Responsabilidad y compromiso",
    "Creatividad e iniciativa",
    "Adaptabilidad y aprendizaje continuo",
    "Comunicación efectiva",
    "Trabajo en equipo y colaboración",
  ];

  const areasInterest = [
    "Desarrollo web y móvil",
    "Arquitecturas full stack",
    "Innovación y transformación digital",
    "Aplicaciones interactivas con enfoque en experiencia de usuario",
    "Integración de servicios y APIs",
  ];

  return (
    <section id="skills" className="max-w-7xl mx-auto px-8 mb-10">
      <h2 className="text-3xl font-extrabold text-[#EEEEEE] mb-6">
        Principales Habilidades
      </h2>
      <h2 className="text-2xl font-semibold text-[#EEEEEE] mb-6">
        {" "}
        Habilidades Técnicas
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((g) => (
          <div key={g.title} className="bg-[#1f2932] p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-[#EEEEEE] mb-4">
              {g.title}
            </h3>

            <div className="grid grid-cols-3 gap-4">
              {g.icons.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 flex items-center justify-center bg-[#111315] rounded-lg text-[#00ADB5] text-3xl">
                    <Icon />
                  </div>
                  <span className="text-sm text-[#cfcfcf] text-center">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-[#EEEEEE] mb-4">
          Habilidades blandas
        </h3>
        <div className="flex flex-wrap">
          {softSkills.map((s) => (
            <span
              key={s}
              className="inline-block bg-[#222831] border border-[#2f3336] text-[#EEEEEE] px-4 py-2 rounded-full mr-3 text-sm"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
