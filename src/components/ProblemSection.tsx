import { AlertCircle, Clock, Users, Shield, TrendingDown } from "lucide-react";

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
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 max-w-2xl">
          Are These Challenges Slowing Down Your Operations?
        </h2>

        <div className="space-y-4 w-full max-w-xl">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-background p-4 rounded-lg shadow-sm mx-auto justify-center"
            >
              <problem.icon className="w-5 h-5 text-destructive flex-shrink-0" />
              <p className="text-foreground text-left">{problem.text}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-lg text-muted-foreground font-medium max-w-xl">
          We solve these problems with trained, verified workforce and reliable execution.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
