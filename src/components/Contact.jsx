import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12 text-[#EEEEEE]"
    >
      <h2 className="text-2xl font-semibold mb-4">Información de Contacto</h2>
      <div className="bg-[#393E46] rounded-lg p-4 md:p-6">
        <ContactRow
          icon={<FaPhone className="text-[#00ADB5] w-5 h-5" />}
          label="Teléfono"
          value="+56 9 6915 0614"
        />

        <ContactRow
          icon={<FaEnvelope className="text-[#00ADB5] w-5 h-5" />}
          label="Email"
          value="romerorodrigorojas@gmail.com"
        />

        <ContactRow
          icon={<FaLinkedin className="text-[#00ADB5] w-5 h-5" />}
          label="LinkedIn"
          value="https://www.linkedin.com/in/rodrigo-romero-rojas-7a5a68290/"
        />

        <ContactRow
          icon={<FaGithub className="text-[#00ADB5] w-5 h-5" />}
          label="GitHub"
          value="https://github.com/romeroro4444"
        />
      </div>
    </section>
  );
};

function ContactRow({ icon, label, value }) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3 mb-3">
      <div className="shrink-0">{icon}</div>
      <div className="min-w-0">
        <p className="font-bold text-sm">{label}:</p>
        <p className="text-sm text-[#EEEEEE] break-words">{value}</p>
      </div>
    </div>
  );
}

export default Contact;
