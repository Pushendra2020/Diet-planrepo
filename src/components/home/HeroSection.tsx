
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="hero-gradient py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your Personal
              <span className="text-diet-primary block mt-2">Diet Planner</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Create customized meal plans based on your goals, preferences, and dietary requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-diet-primary hover:bg-diet-primary/90 text-white"
                size="lg"
              >
                <Link to="/diet-plan">Create Diet Plan</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
              >
                <Link to="/calculators">Try Calculators</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/vegetarian-diet-plan-1296x728-feature.jpg"
              alt="Healthy Vegetarian Food" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
