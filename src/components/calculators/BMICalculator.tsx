
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Calculator } from "lucide-react";

interface BMIResult {
  bmi: number;
  category: string;
  color: string;
}

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState<BMIResult | null>(null);
  const [error, setError] = useState("");

  const calculateBMI = () => {
    // Clear previous errors
    setError("");
    
    // Validate inputs
    const heightValue = parseFloat(height);
    const weightValue = parseFloat(weight);

    if (isNaN(heightValue) || isNaN(weightValue)) {
      setError("Please enter valid height and weight values.");
      return;
    }

    if (heightValue <= 0 || weightValue <= 0) {
      setError("Height and weight must be greater than zero.");
      return;
    }

    // Calculate BMI: weight (kg) / (height (m))^2
    const heightInMeters = heightValue / 100; // Convert cm to meters
    const bmi = weightValue / (heightInMeters * heightInMeters);
    const roundedBMI = Math.round(bmi * 10) / 10;

    // Determine BMI category
    let category, color;
    if (bmi < 18.5) {
      category = "Underweight";
      color = "text-blue-600";
    } else if (bmi >= 18.5 && bmi < 25) {
      category = "Normal weight";
      color = "text-green-600";
    } else if (bmi >= 25 && bmi < 30) {
      category = "Overweight";
      color = "text-yellow-600";
    } else {
      category = "Obese";
      color = "text-red-600";
    }

    setResult({ bmi: roundedBMI, category, color });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="height">Height (cm)</Label>
          <Input
            id="height"
            type="number"
            placeholder="175"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="weight">Weight (kg)</Label>
          <Input
            id="weight"
            type="number"
            placeholder="70"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <Button 
        onClick={calculateBMI} 
        className="w-full bg-diet-primary hover:bg-diet-primary/90"
      >
        <Calculator className="mr-2 h-4 w-4" /> Calculate BMI
      </Button>

      {result && (
        <Alert>
          <div className="flex flex-col space-y-2">
            <AlertTitle className="text-xl">Your BMI is: <span className={result.color}>{result.bmi}</span></AlertTitle>
            <AlertDescription className="text-base">
              Category: <span className={result.color}>{result.category}</span>
              <div className="mt-2 text-gray-600 text-sm">
                <p><strong>BMI Categories:</strong></p>
                <p>Underweight: BMI less than 18.5</p>
                <p>Normal weight: BMI 18.5–24.9</p>
                <p>Overweight: BMI 25–29.9</p>
                <p>Obesity: BMI 30 or greater</p>
              </div>
            </AlertDescription>
          </div>
        </Alert>
      )}
    </div>
  );
};

export default BMICalculator;
