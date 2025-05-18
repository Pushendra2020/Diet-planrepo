
import { Heart, Weight, CalendarCheck, Apple, Utensils } from "lucide-react";
import BenefitItem from "./BenefitItem";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Improved Heart Health",
      description: "Proper nutrition helps maintain healthy cholesterol levels and blood pressure.",
      bgColor: "bg-red-100",
      iconColor: "text-red-500"
    },
    {
      icon: Weight,
      title: "Weight Management",
      description: "Achieve and maintain your ideal weight with balanced meal planning.",
      bgColor: "bg-green-100",
      iconColor: "text-green-500"
    },
    {
      icon: CalendarCheck,
      title: "Consistent Energy",
      description: "Keep energy levels stable throughout the day with proper nutrient timing.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-500"
    },
    {
      icon: Apple,
      title: "Better Nutrition",
      description: "Ensure you get all essential nutrients your body needs to function optimally.",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-500"
    },
    {
      icon: Utensils,
      title: "Meal Variety",
      description: "Discover new healthy food options and avoid getting stuck in a food rut.",
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600"
    },
    {
      icon: CalendarCheck,
      title: "Long-term Health",
      description: "Build sustainable eating habits that support lifelong wellness.",
      bgColor: "bg-teal-100",
      iconColor: "text-teal-500"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Benefits of a Personalized Diet Plan</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Discover how a customized approach can transform your health and wellness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <BenefitItem 
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              bgColor={benefit.bgColor}
              iconColor={benefit.iconColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
