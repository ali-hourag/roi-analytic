import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  Target,
  Clock,
  Star,
  Shield,
} from "lucide-react";

const WhyRoi = () => {
  return (
    <section id="why-roi-analytic" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Nuestra diferencia
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            ¿Por qué ROI ANALYTIC?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: Target,
              title: "100% enfocados en ROI",
              description:
                "Cada decisión está orientada a generar retorno sobre la inversión.",
            },
            {
              icon: Users,
              title: "Disponibilidad limitada",
              description:
                "Trabajamos con pocos clientes por zona para evitar competencia.",
            },
            {
              icon: Clock,
              title: "Optimización continua",
              description:
                "Revisión y ajuste diario de campañas para maximizar resultados.",
            },
            {
              icon: Star,
              title: "Especialización sectorial",
              description:
                "Conocemos las palabras clave y la intención de compra de cada sector.",
            },
            {
              icon: Shield,
              title: "Garantía de 30 días",
              description:
                "Si no cumplimos con lo acordado en el contrato, devolvemos el 100% del coste de gestión.",
            },
            {
              icon: TrendingUp,
              title: "Resultados medibles",
              description:
                "Seguimiento real de llamadas, formularios y WhatsApp.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex gap-4 p-5 rounded-xl bg-card shadow-card"
            >
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-semibold mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRoi;
