import { Phone, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingActionButtons = () => {
  const handleCall = () => {
    window.location.href = "tel:+919979623217";
  };

  const handleWhatsApp = () => {
    const message =
      "Hello! I would like to enquire about your industrial services.";
    window.open(
      `https://wa.me/919979623217?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleEnquire = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex gap-4 px-4 py-3 bg-white/90 backdrop-blur-md rounded-full shadow-xl border border-gray-200">
      
      {/* Phone */}
      <Button
        onClick={handleCall}
        className="flex items-center gap-2 px-4 py-2 rounded-full text-white bg-gradient-to-r from-blue-600 to-indigo-700 hover:scale-105 transition"
      >
        <Phone className="w-5 h-5" />
        <span className="text-sm font-medium">Phone</span>
      </Button>

      {/* WhatsApp */}
      <Button
        onClick={handleWhatsApp}
        className="flex items-center gap-2 px-4 py-2 rounded-full text-white 
        bg-gradient-to-r from-[#25D366] to-[#20BA59]
        hover:scale-105 transition"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-sm font-medium">WhatsApp</span>
      </Button>

      {/* Enquiry Form */}
      <Button
        onClick={handleEnquire}
        className="flex items-center gap-2 px-4 py-2 rounded-full text-white 
        bg-gradient-to-r from-blue-600 to-indigo-700
        hover:scale-105 transition"
      >
        <Mail className="w-5 h-5" />
        <span className="text-sm font-medium">Form</span>
      </Button>
    </div>
  );
};

export default FloatingActionButtons;
