import { Shield, CheckCircle, Clock, Award, DollarSign, MapPin, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Safety-First Execution",
      description: "All operations follow strict safety protocols and compliance standards"
    },
    {
      icon: CheckCircle,
      title: "Verified Labour Teams",
      description: "Background-checked, trained professionals for every assignment"
    },
    {
      icon: Clock,
      title: "Fast Deployment",
      description: "Quick response times with on-time delivery for urgent requirements"
    },
    {
      icon: Award,
      title: "Multi-Industry Experience",
      description: "Proven track record across logistics, manufacturing, and energy sectors"
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "Clear, upfront costs with no hidden charges or surprises"
    },
    {
      icon: MapPin,
      title: "Pan-India Availability",
      description: "Service coverage across major industrial hubs in India"
    },
    {
      icon: Headphones,
      title: "24/7 Support Desk",
      description: "Round-the-clock assistance for all your workforce needs"
    }
  ];

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose LC Industrial Services?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Your trusted partner for reliable, professional industrial workforce solutions
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-colors">
                <CardContent className="p-6 text-center">
                  <reason.icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                  <h3 className="text-xl font-bold mb-2 text-primary-foreground">
                    {reason.title}
                  </h3>
                  <p className="text-primary-foreground/80">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;