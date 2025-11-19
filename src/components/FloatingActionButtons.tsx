import { Phone, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingActionButtons = () => {
  const handleCall = () => {
    window.location.href = "tel:+919979623217";
  };

  const handleWhatsApp = () => {
    const message = "Hello! I would like to enquire about your industrial services.";
    window.open(`https://wa.me/919979623217?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleEnquire = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50 animate-fade-in">

  {/* Call */}
  <div className="flex flex-col items-center">
      <Button
        onClick={handleCall}
        size="icon"
        className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-scale-in"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </Button>
      <span className="text-xs mt-1 text-gray-700">Phone</span>
  </div>

  {/* WhatsApp */}
  <div className="flex flex-col items-center">
      <Button
        onClick={handleWhatsApp}
        size="icon"
        className="w-14 h-14 rounded-full bg-gradient-to-r from-[#25D366] to-[#20BA59] hover:from-[#20BA59] hover:to-[#1EA94F] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-scale-in"
        style={{ animationDelay: "100ms" }}
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
      <span className="text-xs mt-1 text-gray-700">WhatsApp</span>
  </div>

  {/* Enquire */}
  <div className="flex flex-col items-center">
      <Button
        onClick={handleEnquire}
        size="icon"
        className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-scale-in"
        style={{ animationDelay: "200ms" }}
        aria-label="Send enquiry"
      >
        <Mail className="w-6 h-6" />
      </Button>
      <span className="text-xs mt-1 text-gray-700">Form</span>
  </div>

</div>

  );
};

export default FloatingActionButtons;
