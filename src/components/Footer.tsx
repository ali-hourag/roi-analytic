import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import logo from "@/assets/logo-roi-analytic.png";

const Footer = () => {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-12 border-t border-border bg-muted/20"
    >
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="flex items-center gap-4">
            <a href={lang ? `/${lang}#` : "#"}>
              <img src={logo} alt="ROI ANALYTIC" className="h-10 w-auto" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
