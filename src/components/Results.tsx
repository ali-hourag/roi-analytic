import { motion } from "framer-motion";
import { TrendingUp, Users, Target, Clock, Star, Shield } from "lucide-react";

const Results = () => {
  return (
    <section id="resultados" className="section-padding bg-muted/30 overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Caso de éxito
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Resultados que hablan
          </h2>
        </motion.div>

        {/* Success case card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="relative rounded-3xl bg-gradient-cta p-1">
            <div className="rounded-[22px] bg-card p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold">Mudanzas Express 365</h3>
                  <p className="text-muted-foreground">Sector Mudanzas</p>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-8">
                Tras la implementación del sistema de Google Ads, se consiguió un crecimiento sostenido 
                de llamadas cualificadas. En menos de 90 días, la empresa pasó a recibir una media de 
                35-50 solicitudes mensuales con alta intención de contratación.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold font-display text-gradient-primary mb-1">
                    -40%
                  </div>
                  <p className="text-sm text-muted-foreground">Coste por lead</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold font-display text-gradient-primary mb-1">
                    35-50
                  </div>
                  <p className="text-sm text-muted-foreground">Leads mensuales</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold font-display text-gradient-primary mb-1">
                    90
                  </div>
                  <p className="text-sm text-muted-foreground">Días de implementación</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold font-display text-gradient-primary mb-1">
                    Alta
                  </div>
                  <p className="text-sm text-muted-foreground">Intención de compra</p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why ROI Analytic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold">
            ¿Por qué ROI Analytic?
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: Target,
              title: "100% enfocados en ROI",
              description: "Cada decisión está orientada a generar retorno sobre la inversión.",
            },
            {
              icon: Users,
              title: "Disponibilidad limitada",
              description: "Trabajamos con pocos clientes por zona para evitar competencia.",
            },
            {
              icon: Clock,
              title: "Optimización continua",
              description: "Revisión y ajuste semanal de campañas para maximizar resultados.",
            },
            {
              icon: Star,
              title: "Especialización sectorial",
              description: "Conocemos las palabras clave y la intención de compra de cada sector.",
            },
            {
              icon: Shield,
              title: "Garantía de 30 días",
              description: "Si no cumplimos, devolvemos el 100% del coste de gestión.",
            },
            {
              icon: TrendingUp,
              title: "Resultados medibles",
              description: "Seguimiento real de llamadas, formularios y WhatsApp.",
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
                <h4 className="font-display font-semibold mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
