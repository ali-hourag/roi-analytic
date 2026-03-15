import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  TrendingUp,
  Users,
  Target,
  Clock,
  Star,
  Shield,
} from "lucide-react";

const whyRoiKeys = ["roi", "availability", "optimization", "specialization", "guarantee", "results"] as const;
const whyRoiIcons = [Target, Users, Clock, Star, Shield, TrendingUp];

const WhyRoi = () => {
  const { t } = useTranslation();

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
            {t("whyRoi.badge")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            {t("whyRoi.title")}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {whyRoiKeys.map((key, i) => {
            const Icon = whyRoiIcons[i];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-4 p-5 rounded-xl bg-card shadow-card"
              >
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold mb-1">
                    {t(`whyRoi.items.${key}.title`)}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {t(`whyRoi.items.${key}.description`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyRoi;
