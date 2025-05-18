
import { Calculator, Utensils, Save } from "lucide-react";
import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  const features = [
    {
      icon: Calculator,
      title: "Fitness Calculators",
      description: "Calculate your BMI, body fat percentage, and daily calorie needs.",
      iconBgColor: "bg-diet-primary/20",
      iconColor: "text-diet-primary"
    },
    {
      icon: Utensils,
      title: "Custom Diet Plans",
      description: "Get personalized meal plans based on your goals and preferences.",
      iconBgColor: "bg-diet-secondary/20",
      iconColor: "text-diet-secondary"
    },
    {
      icon: Save,
      title: "Save & Access Anywhere",
      description: "Save your diet plans and access them anytime, anywhere.",
      iconBgColor: "bg-diet-accent/20",
      iconColor: "text-diet-accent"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Everything You Need</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Our comprehensive tools help you understand your body and create the perfect diet plan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard 
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              iconBgColor={feature.iconBgColor}
              iconColor={feature.iconColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
