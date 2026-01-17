import { motion } from "framer-motion";
import { Stethoscope, Truck, GraduationCap, Store, Briefcase, Building2 } from "lucide-react";

const sectors = [
  {
    icon: Stethoscope,
    title: "Clínicas Dentales",
    description: "Captación de pacientes para implantes, ortodoncia y tratamientos de alta rentabilidad.",
    treatments: ["Implantes dentales", "Invisalign", "Estética dental"],
  },
  {
    icon: Truck,
    title: "Empresas de Mudanzas",
    description: "Generación de llamadas y contactos de clientes listos para contratar.",
    treatments: ["Mudanzas locales", "Mudanzas nacionales", "Mudanzas urgentes"],
  },
  {
    icon: GraduationCap,
    title: "Coaches e Infoproductores",
    description: "Leads cualificados para sesiones de venta y programas high ticket.",
    treatments: ["Mentorías", "Cursos online", "Programas premium"],
  },
  {
    icon: Store,
    title: "E-commerce",
    description: "Campañas de conversión directa para tiendas online.",
    treatments: ["Shopping Ads", "Remarketing", "Performance Max"],
  },
  {
    icon: Briefcase,
    title: "Servicios Profesionales",
    description: "Captación de clientes para abogados, asesores y consultores.",
    treatments: ["Leads cualificados", "Llamadas directas", "Formularios"],
  },
  {
    icon: Building2,
    title: "Inmobiliarias",
    description: "Generación de contactos interesados en compra y alquiler.",
    treatments: ["Captación vendedores", "Compradores", "Inversores"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Sectors = () => {
  return (
    <section id="sectores" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Sectores
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Especialización por industria
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trabajamos con sectores donde Google Ads genera mayor impacto. 
            Conocemos las palabras clave y la intención de compra de cada uno.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {sectors.map((sector) => (
            <motion.div
              key={sector.title}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="group glass-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-gradient-primary transition-all duration-300">
                <sector.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>

              <h3 className="font-display text-lg font-bold mb-2">{sector.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{sector.description}</p>

              <div className="flex flex-wrap gap-2">
                {sector.treatments.map((treatment) => (
                  <span
                    key={treatment}
                    className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                  >
                    {treatment}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Sectors;
