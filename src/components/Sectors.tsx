import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Gem, Hotel, Dumbbell, ShoppingCart, HardHat, Truck, Stethoscope, Globe } from "lucide-react";

import sectorJoyerias from "@/assets/sector-joyerias.jpg";
import sectorHoteles from "@/assets/sector-hoteles.jpg";
import sectorGimnasios from "@/assets/sector-gimnasios.jpg";
import sectorEcommerce from "@/assets/sector-ecommerce.jpg";
import sectorConstruccion from "@/assets/sector-construccion.jpg";
import sectorMudanzas from "@/assets/sector-mudanzas.webp";
import sectorClinicas from "@/assets/sector-clinicas.jpg";

const sectorKeys = ["jewelry", "hotels", "gyms", "ecommerce", "construction", "moving", "clinics"] as const;
const sectorsData: { key: (typeof sectorKeys)[number]; icon: typeof Gem; image: string }[] = [
  { key: "jewelry", icon: Gem, image: sectorJoyerias },
  { key: "hotels", icon: Hotel, image: sectorHoteles },
  { key: "gyms", icon: Dumbbell, image: sectorGimnasios },
  { key: "ecommerce", icon: ShoppingCart, image: sectorEcommerce },
  { key: "construction", icon: HardHat, image: sectorConstruccion },
  { key: "moving", icon: Truck, image: sectorMudanzas },
  { key: "clinics", icon: Stethoscope, image: sectorClinicas },
];

const countryKeys = ["spain", "netherlands", "uae"] as const;
const countryFlags = ["🇪🇸", "🇳🇱", "🇦🇪"];

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
  const { t } = useTranslation();

  return (
    <section id="sectores" className="section-padding bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            {t("sectors.badge")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t("sectors.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("sectors.subtitle")}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {sectorsData.map((sector) => (
            <motion.div
              key={sector.key}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="h-full rounded-2xl bg-card shadow-card overflow-hidden border border-border/50 transition-shadow duration-300 group-hover:shadow-card-hover">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={sector.image}
                    alt={t(`sectors.items.${sector.key}.title`)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <sector.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold mb-2">{t(`sectors.items.${sector.key}.title`)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`sectors.items.${sector.key}.description`)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Premium & International */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <div className="rounded-2xl bg-card border border-border/50 shadow-card p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-cta flex items-center justify-center">
                    <Globe className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-2xl font-bold">{t("sectors.international.title")}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed max-w-lg">
                  {t("sectors.international.description")}
                </p>
              </div>
              <div className="flex gap-6">
                {countryKeys.map((key, idx) => (
                  <div key={key} className="flex flex-col items-center gap-2">
                    <span className="text-4xl">{countryFlags[idx]}</span>
                    <span className="text-sm font-medium text-foreground">{t(`sectors.countries.${key}`)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sectors;
