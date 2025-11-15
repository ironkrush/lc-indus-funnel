import { AlertCircle, Clock, Users, Shield, TrendingDown } from "lucide-react";
import problemImage from "@/assets/problem-supply-chain.jpg";

const ProblemSection = () => {
  const problems = [
    { icon: Users, text: "Unskilled labour causing operational delays" },
    { icon: Clock, text: "Inconsistent manpower availability" },
    { icon: Shield, text: "Safety compliance issues and risks" },
    { icon: TrendingDown, text: "Slow loading/unloading turnarounds" },
    { icon: AlertCircle, text: "Lack of reliable solar plant wiring teams" },
    { icon: Users, text: "Poor canteen facilities for employees" },
    { icon: Clock, text: "Unmanaged employee transportation" },
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <img 
                src={problemImage} 
                alt="Industrial warehouse operations showing supply chain challenges" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Are These Challenges Slowing Down Your Operations?
              </h2>
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 bg-background p-4 rounded-lg shadow-sm"
                  >
                    <problem.icon className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">{problem.text}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-lg text-muted-foreground font-medium">
                We solve these problems with trained, verified workforce and reliable execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;