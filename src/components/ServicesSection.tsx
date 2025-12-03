import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Zap, Utensils, Bus, Droplet, Drum, TreePine, Car } from "lucide-react";
import labourImage from "@/assets/labour-supply.jpg";
import solarImage from "@/assets/solar-installation.jpeg";
import canteenImage from "@/assets/canteen-facility.jpeg";
import transportImage from "@/assets/staff-transport.jpeg";

// Placeholder images for new services - replace with actual images later
const edibleOilPlaceholder = "https://placehold.co/600x400/e2e8f0/1e293b?text=Edible+Oil+Loading";
const drumsPlaceholder = "https://placehold.co/600x400/e2e8f0/1e293b?text=Drums+Loading";
const woodenPlaceholder = "https://placehold.co/600x400/e2e8f0/1e293b?text=Wooden+Material";
const carTransportPlaceholder = "https://placehold.co/600x400/e2e8f0/1e293b?text=Car+Transport";

const ServicesSection = () => {
  const services = [
    {
      icon: Users,
      title: "Labour Supply Services",
      image: labourImage,
      description: "Professional skilled and semi-skilled workforce solutions for industrial operations across Gujarat. Verified, trained workers ready for immediate deployment with flexible shift-based arrangements.",
      items: ["Skilled Industrial Workers", "Semi-Skilled Labour Force", "24/7 Shift-Based Teams", "Immediate Deployment Available", "Background Verified & Trained Staff"]
    },
    {
      icon: Droplet,
      title: "Edible Oil 15kg Tin Loading & Unloading",
      image: edibleOilPlaceholder,
      description: "Specialized handling services for edible oil containers and 15kg tins. Expert loading and unloading operations ensuring safe transportation and zero spillage with trained personnel.",
      items: ["15kg Tin Handling", "Safe Loading Operations", "Zero Spillage Guarantee", "Quick Turnaround Time", "Warehouse to Truck Services"]
    },
    {
      icon: Drum,
      title: "Industrial Drums Loading Services",
      image: drumsPlaceholder,
      description: "Professional drum loading and unloading services for chemical, oil, and industrial containers. Specialized equipment and trained staff for safe handling of heavy drums and barrels.",
      items: ["Chemical Drum Handling", "Oil Barrel Loading", "Heavy Container Operations", "Safety Equipment Provided", "Dock to Warehouse Transfer"]
    },
    {
      icon: TreePine,
      title: "Wooden Material Handling Services",
      image: woodenPlaceholder,
      description: "Expert timber and wooden material loading services including planks, logs, furniture, and wooden pallets. Careful handling to prevent damage with experienced workforce.",
      items: ["Timber Log Handling", "Wooden Plank Loading", "Furniture Transportation", "Pallet Management", "Damage-Free Operations"]
    },
    {
      icon: Zap,
      title: "Solar Panel & Cable Fitting Services",
      image: solarImage,
      description: "Complete solar plant installation services including solar panel fitting, AC/DC wiring, cable laying, and system commissioning. Certified technicians for residential and commercial solar projects.",
      items: ["Solar Panel Installation", "AC/DC Wiring Services", "Cable Laying & Management", "System Commissioning", "Maintenance Support Available"]
    },
    {
      icon: Utensils,
      title: "Corporate Canteen Facility Management",
      image: canteenImage,
      description: "Hygienic and nutritious corporate meal solutions for industrial facilities. Large-capacity kitchen operations with professional staff for daily employee dining and tiffin services.",
      items: ["Hygienic Kitchen Operations", "Nutritious Meal Planning", "Large Capacity Catering", "Daily Tiffin Services", "Professional Cooking Staff"]
    },
    {
      icon: Bus,
      title: "Staff Bus Transport Services",
      image: transportImage,
      description: "Reliable employee transportation solutions with well-maintained buses for corporate and industrial facilities. Safe, timely, and comfortable commute services with experienced drivers.",
      items: ["Employee Bus Services", "Multiple Route Coverage", "Timely Pick-up & Drop", "Well-Maintained Vehicles", "Experienced Drivers"]
    },
    {
      icon: Car,
      title: "Staff Car Transport Services",
      image: carTransportPlaceholder,
      description: "Premium car transportation services for executives and staff. Comfortable, safe, and professional chauffeur-driven vehicles for corporate mobility and business travel needs.",
      items: ["Executive Car Services", "Professional Chauffeurs", "Comfortable Vehicles", "Flexible Scheduling", "Corporate Travel Solutions"]
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
              Complete Industrial Workforce & Logistics Solutions in Gujarat
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional labour supply, loading services, solar installation, canteen management, and staff transport solutions for industries across India
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
                        alt={`${service.title} - Shree Ganesh Enterprise`}
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