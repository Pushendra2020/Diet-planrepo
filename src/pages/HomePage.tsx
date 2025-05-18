
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Calculator, 
  CalendarCheck, 
  Utensils, 
  Save,
  Heart,
  Apple,
  Weight
} from "lucide-react";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
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
                src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Healthy Food" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Everything You Need</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Our comprehensive tools help you understand your body and create the perfect diet plan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="card-hover">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-diet-primary/20 flex items-center justify-center mb-4">
                    <Calculator className="h-6 w-6 text-diet-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Fitness Calculators</h3>
                  <p className="text-gray-600">
                    Calculate your BMI, body fat percentage, and daily calorie needs.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="card-hover">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-diet-secondary/20 flex items-center justify-center mb-4">
                    <Utensils className="h-6 w-6 text-diet-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Custom Diet Plans</h3>
                  <p className="text-gray-600">
                    Get personalized meal plans based on your goals and preferences.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="card-hover">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-diet-accent/20 flex items-center justify-center mb-4">
                    <Save className="h-6 w-6 text-diet-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Save & Access Anywhere</h3>
                  <p className="text-gray-600">
                    Save your diet plans and access them anytime, anywhere.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-16 bg-diet-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Diet?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Take the first step towards a healthier lifestyle with our personalized diet planning tools.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                className="bg-diet-primary hover:bg-diet-primary/90"
                size="lg"
              >
                <Link to="/diet-plan">Create Your Diet Plan</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
              >
                <Link to="/calculators">Explore Calculators</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits of a Personalized Diet Plan</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Discover how a customized approach can transform your health and wellness journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <Heart className="h-5 w-5 text-red-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Improved Heart Health</h3>
              <p className="text-gray-600">
                Proper nutrition helps maintain healthy cholesterol levels and blood pressure.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Weight className="h-5 w-5 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Weight Management</h3>
              <p className="text-gray-600">
                Achieve and maintain your ideal weight with balanced meal planning.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <CalendarCheck className="h-5 w-5 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Consistent Energy</h3>
              <p className="text-gray-600">
                Keep energy levels stable throughout the day with proper nutrient timing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <Apple className="h-5 w-5 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Better Nutrition</h3>
              <p className="text-gray-600">
                Ensure you get all essential nutrients your body needs to function optimally.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                <Utensils className="h-5 w-5 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Meal Variety</h3>
              <p className="text-gray-600">
                Discover new healthy food options and avoid getting stuck in a food rut.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                <CalendarCheck className="h-5 w-5 text-teal-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Long-term Health</h3>
              <p className="text-gray-600">
                Build sustainable eating habits that support lifelong wellness.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
