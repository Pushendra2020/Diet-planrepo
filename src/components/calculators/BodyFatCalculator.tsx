
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calculator } from "lucide-react";

interface BodyFatResult {
  bodyFat: number;
  category: string;
  color: string;
}

const BodyFatCalculator = () => {
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState("");
  const [waist, setWaist] = useState("");
  const [wrist, setWrist] = useState("");
  const [hip, setHip] = useState("");
  const [forearm, setForearm] = useState("");
  const [result, setResult] = useState<BodyFatResult | null>(null);
  const [error, setError] = useState("");

  const calculateBodyFat = () => {
    // Clear previous errors
    setError("");
    
    // Validate inputs
    const weightValue = parseFloat(weight);
    const waistValue = parseFloat(waist);
    
    if (isNaN(weightValue) || isNaN(waistValue)) {
      setError("Please enter valid measurements.");
      return;
    }

    if (weightValue <= 0 || waistValue <= 0) {
      setError("Measurements must be greater than zero.");
      return;
    }

    if (gender === "female") {
      const hipValue = parseFloat(hip);
      const wristValue = parseFloat(wrist);
      
      if (isNaN(hipValue) || isNaN(wristValue)) {
        setError("Please enter all required measurements.");
        return;
      }
      
      if (hipValue <= 0 || wristValue <= 0) {
        setError("Measurements must be greater than zero.");
        return;
      }
    }
    
    if (gender === "male" && !forearm) {
      setError("Please enter forearm measurement.");
      return;
    }

    let bodyFat;
    
    // Calculate Body Fat using Navy Method formulas
    if (gender === "male") {
      const forearmValue = parseFloat(forearm);
      
      // Men: 86.01 * log10(waist - neck) - 70.041 * log10(height) + 36.76
      // Simplified formula for this demo:
      bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(waistValue - forearmValue) + 0.15456 * Math.log10(weightValue)) - 450;
    } else {
      const wristValue = parseFloat(wrist);
      const hipValue = parseFloat(hip);
      
      // Women: 163.205 * log10(waist + hip - neck) - 97.684 * log10(height) - 78.387
      // Simplified formula for this demo:
      bodyFat = 495 / (1.29579 - 0.35004 * Math.log10(waistValue + hipValue - wristValue) + 0.22100 * Math.log10(weightValue)) - 450;
    }
    
    // Round to one decimal place
    const roundedBodyFat = Math.round(bodyFat * 10) / 10;
    
    // Determine category based on gender and body fat percentage
    let category, color;
    
    if (gender === "male") {
      if (roundedBodyFat < 6) {
        category = "Essential Fat";
        color = "text-blue-600";
      } else if (roundedBodyFat >= 6 && roundedBodyFat < 14) {
        category = "Athletes";
        color = "text-green-600";
      } else if (roundedBodyFat >= 14 && roundedBodyFat < 18) {
        category = "Fitness";
        color = "text-green-600";
      } else if (roundedBodyFat >= 18 && roundedBodyFat < 25) {
        category = "Average";
        color = "text-yellow-600";
      } else {
        category = "Obese";
        color = "text-red-600";
      }
    } else {
      if (roundedBodyFat < 16) {
        category = "Essential Fat";
        color = "text-blue-600";
      } else if (roundedBodyFat >= 16 && roundedBodyFat < 24) {
        category = "Athletes";
        color = "text-green-600";
      } else if (roundedBodyFat >= 24 && roundedBodyFat < 30) {
        category = "Fitness";
        color = "text-green-600";
      } else if (roundedBodyFat >= 30 && roundedBodyFat < 32) {
        category = "Average";
        color = "text-yellow-600";
      } else {
        category = "Obese";
        color = "text-red-600";
      }
    }
    
    setResult({ bodyFat: roundedBodyFat, category, color });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label>Gender</Label>
          <RadioGroup 
            value={gender} 
            onValueChange={setGender}
            className="flex space-x-4 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <Label htmlFor="male">Male</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <Label htmlFor="female">Female</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          
          <div className="space-y-2">
            <Label htmlFor="waist">Waist Circumference (cm)</Label>
            <Input
              id="waist"
              type="number"
              placeholder="80"
              value={waist}
              onChange={(e) => setWaist(e.target.value)}
            />
          </div>

          {gender === "male" ? (
            <div className="space-y-2">
              <Label htmlFor="forearm">Forearm Circumference (cm)</Label>
              <Input
                id="forearm"
                type="number"
                placeholder="30"
                value={forearm}
                onChange={(e) => setForearm(e.target.value)}
              />
            </div>
          ) : (
            <>
              <div className="space-y-2">
                <Label htmlFor="hip">Hip Circumference (cm)</Label>
                <Input
                  id="hip"
                  type="number"
                  placeholder="100"
                  value={hip}
                  onChange={(e) => setHip(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="wrist">Wrist Circumference (cm)</Label>
                <Input
                  id="wrist"
                  type="number"
                  placeholder="16"
                  value={wrist}
                  onChange={(e) => setWrist(e.target.value)}
                />
              </div>
            </>
          )}
        </div>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <Button 
        onClick={calculateBodyFat} 
        className="w-full bg-diet-primary hover:bg-diet-primary/90"
      >
        <Calculator className="mr-2 h-4 w-4" /> Calculate Body Fat
      </Button>

      {result && (
        <Alert>
          <div className="flex flex-col space-y-2">
            <AlertTitle className="text-xl">Your Body Fat: <span className={result.color}>{result.bodyFat}%</span></AlertTitle>
            <AlertDescription className="text-base">
              Category: <span className={result.color}>{result.category}</span>
              <div className="mt-2 text-gray-600 text-sm">
                <p><strong>Body Fat Categories ({gender === 'male' ? 'Men' : 'Women'}):</strong></p>
                {gender === 'male' ? (
                  <>
                    <p>Essential Fat: 2-5%</p>
                    <p>Athletes: 6-13%</p>
                    <p>Fitness: 14-17%</p>
                    <p>Average: 18-24%</p>
                    <p>Obese: 25%+</p>
                  </>
                ) : (
                  <>
                    <p>Essential Fat: 10-15%</p>
                    <p>Athletes: 16-23%</p>
                    <p>Fitness: 24-29%</p>
                    <p>Average: 30-31%</p>
                    <p>Obese: 32%+</p>
                  </>
                )}
              </div>
            </AlertDescription>
          </div>
        </Alert>
      )}
    </div>
  );
};

export default BodyFatCalculator;
