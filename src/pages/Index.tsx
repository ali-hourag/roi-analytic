import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sectors from "@/components/Sectors";
import WhyRoi from "@/components/WhyRoi";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Sectors />
        <WhyRoi />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
