import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Wrench, Bus } from "lucide-react";

const CTASection = () => {
  const handleCTAClick = (service: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const serviceSelect = document.querySelector('select[name="service"]') as HTMLSelectElement;
        if (serviceSelect) {
          serviceSelect.value = service;
        }
      }, 100);
    }
  };

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow bg-background border-2 hover:border-accent">
              <Users className="w-16 h-16 mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-bold mb-3 text-foreground">
                Need Manpower?
              </h3>
              <p className="text-muted-foreground mb-4">
                Get skilled workforce deployed within 24-48 hours
              </p>
              <Button 
                onClick={() => handleCTAClick('Labour Supply')}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Request Manpower
              </Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow bg-background border-2 hover:border-accent">
              <Wrench className="w-16 h-16 mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-bold mb-3 text-foreground">
                Solar Installation?
              </h3>
              <p className="text-muted-foreground mb-4">
                Expert AC/DC wiring and solar panel fitting teams
              </p>
              <Button 
                onClick={() => handleCTAClick('Solar Plant Services')}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Hire Solar Technicians
              </Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow bg-background border-2 hover:border-accent">
              <Bus className="w-16 h-16 mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-bold mb-3 text-foreground">
                Transport Services?
              </h3>
              <p className="text-muted-foreground mb-4">
                Safe, reliable staff buses and employee transport
              </p>
              <Button 
                onClick={() => handleCTAClick('Staff Transport')}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Book Transport Services
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;