import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Package, Users, Zap, Utensils, Bus } from "lucide-react";
import loadingImage from "@/assets/loading-unloading.jpg";
import labourImage from "@/assets/labour-supply.jpg";
import solarImage from "@/assets/solar-installation.jpg";
import canteenImage from "@/assets/canteen-facility.jpg";
import transportImage from "@/assets/staff-transport.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: Package,
      title: "Industrial Loading & Unloading",
      image: loadingImage,
      description: "Expert handling of edible oil tins, timber wood, drums, rice bags, sugar bags. Professional warehouse teams for efficient dock operations.",
      items: ["Edible Oil & Tins", "Timber Wood Handling", "Drums & Containers", "Rice & Sugar Bags", "Warehouse Operations"]
    },
    {
      icon: Users,
      title: "Labour Supply",
      image: labourImage,
      description: "Skilled and semi-skilled workforce available for immediate deployment. Verified, trained workers for shift-based operations.",
      items: ["Skilled Workers", "Semi-Skilled Labour", "Shift-Based Teams", "Urgent Deployment", "Verified & Trained"]
    },
    {
      icon: Zap,
      title: "Solar Plant AC/DC & Cable Fitting",
      image: solarImage,
      description: "Complete solar installation services including AC/DC wiring, solar plate fitting, cable laying, and commissioning support.",
      items: ["AC/DC Wiring", "Solar Plate Fitting", "Cable Laying", "System Commissioning", "Technical Support"]
    },
    {
      icon: Utensils,
      title: "Canteen Facility",
      image: canteenImage,
      description: "Hygienic, healthy, large-capacity corporate meal solutions. Professional staff dining and daily tiffin services.",
      items: ["Corporate Meals", "Hygienic Kitchen", "Large Capacity", "Daily Tiffin Service", "Staff Dining"]
    },
    {
      icon: Bus,
      title: "Staff Bus & Employee Transport",
      image: transportImage,
      description: "Safe and timely transportation solutions with buses, vans, and cars. Reliable routes for corporate mobility.",
      items: ["Employee Buses", "Van Services", "Company Cars", "Safe Routes", "Timely Operations"]
    }
  ];

  const handleEnquiry = (serviceName: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Pre-fill service in form if needed
      const serviceSelect = document.querySelector('select[name="service"]') as HTMLSelectElement;
      if (serviceSelect) {
        serviceSelect.value = serviceName;
      }
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Industrial Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive workforce and operational solutions tailored for industrial excellence
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-12">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden border-2 hover:border-primary transition-colors">
                <CardContent className="p-0">
                  <div className={`grid md:grid-cols-2 gap-6 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Image */}
                    <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                      <img 
                        src={service.image} 
                        alt={`${service.title} - LC Industrial Services`}
                        className="w-full h-full object-cover min-h-[300px]"
                      />
                    </div>

                    {/* Content */}
                    <div className={`p-6 md:p-8 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                      <service.icon className="w-12 h-12 text-primary mb-4" />
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {service.items.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Button 
                        onClick={() => handleEnquiry(service.title)}
                        className="bg-accent hover:bg-accent/90 text-accent-foreground w-fit"
                      >
                        Enquire Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;