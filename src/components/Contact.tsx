import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight, Clock, Shield, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contacto" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-cta opacity-5" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="w-16 h-16 rounded-2xl bg-gradient-cta flex items-center justify-center mx-auto mb-6"
          >
            <MessageCircle className="w-8 h-8 text-primary-foreground" />
          </motion.div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            ¿Hablamos?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Sesión inicial de 10 minutos para valorar si encaja con tu negocio. 
            Sin compromiso ni coste.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:roianalytic@hotmail.com">
                <Mail className="w-5 h-5" />
                roianalytic@hotmail.com
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Respuesta en 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Garantía 30 días</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span>Sin compromiso</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
