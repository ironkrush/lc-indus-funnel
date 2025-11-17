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
    <div className="max-w-4xl mx-auto">
      
      {/* Center Everything */}
      <div className="grid place-items-center text-center gap-6">
        
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Are These Challenges Slowing Down Your Operations?
        </h2>

        <div className="space-y-4 w-full">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="flex items-start gap-3 bg-background p-4 rounded-lg shadow-sm"
            >
              <problem.icon className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
              <p className="text-foreground text-left">{problem.text}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-lg text-muted-foreground font-medium">
          We solve these problems with trained, verified workforce and reliable execution.
        </p>

      </div>
    </div>
  </div>
</section>

  );
};

export default ProblemSection;