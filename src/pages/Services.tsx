import ServicesSection from "@/components/ServicesSection";
import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";

const Services = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background pt-20">
        <ServicesSection />
      </div>
      <WhatsAppButton />
    </>
  );
};

export default Services;