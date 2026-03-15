import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MessageCircle,
  Send,
  Clock,
  Shield,
} from "lucide-react";

const SECTOR_KEYS = ["jewelry", "hotels", "gyms", "ecommerce", "construction", "moving", "clinics", "other"] as const;

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sector: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const sectorLabel = formData.sector ? t(`contact.sectors.${formData.sector}`) : formData.sector;
    const subject = encodeURIComponent(`Consulta de ${formData.name} - ${sectorLabel}`);
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\nSector: ${sectorLabel}\n\nMensaje:\n${formData.message}`
    );
    window.location.href = `mailto:roianalytic@hotmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contacto" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-cta opacity-5" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
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
            {t("contact.title")}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-card border border-border/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t("contact.form.name")}</Label>
                  <Input
                    id="name"
                    placeholder={t("contact.form.namePlaceholder")}
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t("contact.form.email")}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t("contact.form.emailPlaceholder")}
                    required
                    maxLength={255}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">{t("contact.form.phone")}</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder={t("contact.form.phonePlaceholder")}
                    required
                    maxLength={20}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sector">{t("contact.form.sector")}</Label>
                  <Select
                    required
                    value={formData.sector}
                    onValueChange={(value) => setFormData({ ...formData, sector: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={t("contact.form.sectorPlaceholder")} />
                    </SelectTrigger>
                    <SelectContent>
                      {SECTOR_KEYS.map((key) => (
                        <SelectItem key={key} value={key}>
                          {t(`contact.sectors.${key}`)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{t("contact.form.message")}</Label>
                <Textarea
                  id="message"
                  placeholder={t("contact.form.messagePlaceholder")}
                  rows={4}
                  maxLength={1000}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <Button variant="hero" size="lg" type="submit" className="w-full">
                <Send className="w-5 h-5" />
                {t("contact.form.submit")}
              </Button>
            </form>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mt-6"
          >
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{t("contact.trust.response")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>{t("contact.trust.guarantee")}</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span>{t("contact.trust.noCommitment")}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
