
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              <span className="text-diet-primary">Nutri</span>Plan
            </h3>
            <p className="text-gray-600 max-w-xs">
              Your personalized diet planning platform for a healthier lifestyle.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-diet-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/calculators" className="text-gray-600 hover:text-diet-primary">
                  Fitness Calculators
                </Link>
              </li>
              <li>
                <Link to="/diet-plan" className="text-gray-600 hover:text-diet-primary">
                  Generate Diet Plan
                </Link>
              </li>
              <li>
                <Link to="/saved-plans" className="text-gray-600 hover:text-diet-primary">
                  Saved Plans
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">
                <a href="mailto:info@nutriplan.com" className="hover:text-diet-primary">info@nutriplan.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} NutriPlan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
