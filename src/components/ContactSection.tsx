import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    service: '',
    phone: '',
    location: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.service) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Phone validation
    if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit phone number.",
        variant: "destructive"
      });
      return;
    }

    // Construct WhatsApp message
    const message = `*New Enquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Company:* ${formData.company}%0A*Service Required:* ${formData.service}%0A*Phone:* ${formData.phone}%0A*Location:* ${formData.location}%0A*Message:* ${formData.message}`;
    
    // Send to WhatsApp
    window.open(`https://wa.me/919979623217?text=${message}`, '_blank');
    
    toast({
      title: "Enquiry Sent!",
      description: "We'll get back to you shortly.",
    });

    // Reset form
    setFormData({
      name: '',
      company: '',
      service: '',
      phone: '',
      location: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get Your Workforce Solution Today
            </h2>
            <p className="text-lg text-muted-foreground">
              Contact LC Patel at Shree Ganesh Enterprise for immediate assistance with your industrial workforce needs
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-2 space-y-6">
              <Card className="p-6 bg-primary text-primary-foreground">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-lg mb-2">LC Patel</p>
                    <p className="opacity-90">Shree Ganesh Enterprise</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+919979623217" className="hover:underline">
                        +91 99796 23217
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:lcpatel1981@gmail.com" className="hover:underline break-all">
                        lcpatel1981@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-sm opacity-90">
                        24, Krishna Kutir, Survey No 223,<br />
                        Meghpar Borichi, Taluka: Anjar,<br />
                        Dist: Kachchh, Pin 377110
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-sm opacity-75 mt-2">
                    <p>GSTIN: 24BCHPP3163R1Z1</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-primary-foreground/20">
                  <p className="text-sm opacity-90">
                    Available 24/7 for urgent requirements
                  </p>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              <Card className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2 text-foreground">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2 text-foreground">
                      Service Required *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                    >
                      <option value="">Select a service</option>
                      <option value="Industrial Loading & Unloading">Industrial Loading & Unloading</option>
                      <option value="Labour Supply">Labour Supply</option>
                      <option value="Solar Plant Services">Solar Plant AC/DC & Cable Fitting</option>
                      <option value="Canteen Facility">Canteen Facility</option>
                      <option value="Staff Transport">Staff Bus & Employee Transport</option>
                      <option value="Other">Other / Multiple Services</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="10-digit mobile number"
                    />
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium mb-2 text-foreground">
                      Location
                    </label>
                    <Input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="City, State"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    Send Enquiry via WhatsApp
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;