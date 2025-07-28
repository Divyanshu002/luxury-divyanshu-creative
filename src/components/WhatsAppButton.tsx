import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number
    window.open('https://wa.me/+91XXXXXXXXXX?text=Hi! I am interested in your services', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-scale-in">
      <Button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-luxury hover:shadow-gold transition-all duration-300 hover:scale-110"
        size="icon"
      >
        <MessageCircle className="h-6 w-6 animate-bounce" />
      </Button>
      
      {/* Tooltip */}
      <div className="absolute bottom-16 right-0 bg-card/90 backdrop-blur-sm text-foreground px-3 py-2 rounded-lg text-sm whitespace-nowrap border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat on WhatsApp
      </div>
    </div>
  );
};

export default WhatsAppButton;