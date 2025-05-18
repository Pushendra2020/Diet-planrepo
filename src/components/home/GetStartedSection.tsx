
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const GetStartedSection = () => {
  return (
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
  );
};

export default GetStartedSection;
