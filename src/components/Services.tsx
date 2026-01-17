import { motion } from "framer-motion";
import { Check, Search, Instagram, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Search,
    title: "Google Ads",
    price: "3.000€",
    period: "/mes",
    description: "Campañas de búsqueda con intención real de compra",
    features: [
      "Configuración profesional de la cuenta",
      "Investigación avanzada de palabras clave",
      "Seguimiento de llamadas y formularios",
      "Optimización semanal orientada a ROI",
      "Remarketing avanzado",
      "Informe quincenal de resultados",
    ],
    gradient: "bg-gradient-primary",
  },
  {
    icon: Instagram,
    title: "Meta Ads",
    price: "3.000€",
    period: "/mes",
    description: "Facebook e Instagram para captar leads cualificados",
    features: [
      "Configuración del Business Manager",
      "Campañas de leads y conversiones",
      "Segmentación específica por sector",
      "Optimización de creatividades",
      "A/B testing continuo",
      "Informe quincenal claro",
    ],
    gradient: "bg-gradient-secondary",
  },
  {
    icon: Zap,
    title: "Paquete Premium",
    price: "5.000€",
    period: "/mes",
    description: "Sistema completo multicanal Google + Meta",
    features: [
      "Google Ads + Meta Ads incluidos",
      "Estrategia multicanal integrada",
      "Remarketing avanzado cruzado",
      "Escalado progresivo basado en datos",
      "Análisis semanal estratégico",
      "Soporte prioritario",
    ],
    gradient: "bg-gradient-cta",
    featured: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const Services = () => {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="servicios" className="section-padding bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Nuestros servicios
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Soluciones de publicidad digital
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Estrategias personalizadas para cada tipo de negocio, 
            enfocadas 100% en generar ventas y rentabilidad.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`relative rounded-2xl p-8 ${
                service.featured
                  ? "bg-card shadow-card-hover border-2 border-primary/20 ring-1 ring-primary/10"
                  : "glass-card shadow-card"
              }`}
            >
              {service.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-cta text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                    Recomendado
                  </span>
                </div>
              )}

              <div className={`w-14 h-14 rounded-xl ${service.gradient} flex items-center justify-center mb-6`}>
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              <h3 className="font-display text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{service.description}</p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-display text-4xl font-bold">{service.price}</span>
                <span className="text-muted-foreground">{service.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center mt-0.5 shrink-0">
                      <Check className="w-3 h-3 text-secondary" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={service.featured ? "hero" : "outline"}
                className="w-full"
                onClick={scrollToContact}
              >
                Solicitar información
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          * Inversión publicitaria no incluida. Garantía de 30 días.
        </motion.p>
      </div>
    </section>
  );
};

export default Services;
