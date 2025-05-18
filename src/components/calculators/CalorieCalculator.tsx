
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calculator } from "lucide-react";

interface CalorieResult {
  bmr: number;
  maintenance: number;
  target: number;
  macros: {
    protein: number;
    carbs: number;
    fat: number;
  };
}

const CalorieCalculator = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("moderate");
  const [goal, setGoal] = useState("maintain");
  const [result, setResult] = useState<CalorieResult | null>(null);
  const [error, setError] = useState("");

  const activityLevels = {
    sedentary: { label: "Sedentary (little or no exercise)", factor: 1.2 },
    light: { label: "Lightly active (light exercise 1-3 days/week)", factor: 1.375 },
    moderate: { label: "Moderately active (moderate exercise 3-5 days/week)", factor: 1.55 },
    active: { label: "Active (hard exercise 6-7 days/week)", factor: 1.725 },
    veryActive: { label: "Very active (very hard exercise & physical job)", factor: 1.9 }
  };

  const goals = {
    lose: { label: "Lose weight", factor: 0.8 },
    maintain: { label: "Maintain weight", factor: 1 },
    gain: { label: "Gain weight", factor: 1.15 }
  };

  const calculateCalories = () => {
    // Clear previous errors
    setError("");
    
    // Validate inputs
    const ageValue = parseInt(age);
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

    if (isNaN(ageValue) || isNaN(weightValue) || isNaN(heightValue)) {
      setError("Please enter valid values for age, weight, and height.");
      return;
    }

    if (ageValue <= 0 || weightValue <= 0 || heightValue <= 0) {
      setError("Age, weight, and height must be greater than zero.");
      return;
    }

    // Calculate BMR (Basal Metabolic Rate) using Mifflin-St Jeor Equation
    let bmr;
    if (gender === "male") {
      bmr = 10 * weightValue + 6.25 * heightValue - 5 * ageValue + 5;
    } else {
      bmr = 10 * weightValue + 6.25 * heightValue - 5 * ageValue - 161;
    }

    // Calculate total daily energy expenditure (TDEE)
    const activityFactor = activityLevels[activityLevel as keyof typeof activityLevels].factor;
    const maintenance = bmr * activityFactor;

    // Calculate target calories based on goal
    const goalFactor = goals[goal as keyof typeof goals].factor;
    const target = maintenance * goalFactor;

    // Calculate macronutrient distribution
    // Protein: 30%, Carbs: 40%, Fat: 30%
    const protein = Math.round((target * 0.3) / 4); // 4 calories per gram of protein
    const carbs = Math.round((target * 0.4) / 4);   // 4 calories per gram of carbs
    const fat = Math.round((target * 0.3) / 9);     // 9 calories per gram of fat

    setResult({
      bmr: Math.round(bmr),
      maintenance: Math.round(maintenance),
      target: Math.round(target),
      macros: {
        protein,
        carbs,
        fat
      }
    });
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
              <RadioGroupItem value="male" id="male-calorie" />
              <Label htmlFor="male-calorie">Male</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female-calorie" />
              <Label htmlFor="female-calorie">Female</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="age">Age (years)</Label>
            <Input
              id="age"
              type="number"
              placeholder="30"
              value={age}
              onChange={(e) => setAge(e.target.value)}
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
            <Label htmlFor="activity-level">Activity Level</Label>
            <Select
              value={activityLevel}
              onValueChange={setActivityLevel}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select activity level" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(activityLevels).map(([key, { label }]) => (
                  <SelectItem key={key} value={key}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="goal">Goal</Label>
            <Select
              value={goal}
              onValueChange={setGoal}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your goal" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(goals).map(([key, { label }]) => (
                  <SelectItem key={key} value={key}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <Button 
        onClick={calculateCalories} 
        className="w-full bg-diet-primary hover:bg-diet-primary/90"
      >
        <Calculator className="mr-2 h-4 w-4" /> Calculate Calories
      </Button>

      {result && (
        <Alert>
          <div className="flex flex-col space-y-3">
            <AlertTitle className="text-xl">Your Daily Calories</AlertTitle>
            <AlertDescription>
              <div className="space-y-2">
                <p><strong>Basal Metabolic Rate (BMR):</strong> {result.bmr} calories</p>
                <p><strong>Maintenance Calories:</strong> {result.maintenance} calories</p>
                <p><strong>Target Calories (based on goal):</strong> {result.target} calories</p>
                
                <div className="mt-4">
                  <p className="font-semibold">Recommended Daily Macros:</p>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    <div className="bg-green-100 p-3 rounded text-center">
                      <div className="text-lg font-medium">{result.macros.protein}g</div>
                      <div className="text-sm">Protein</div>
                    </div>
                    <div className="bg-blue-100 p-3 rounded text-center">
                      <div className="text-lg font-medium">{result.macros.carbs}g</div>
                      <div className="text-sm">Carbs</div>
                    </div>
                    <div className="bg-yellow-100 p-3 rounded text-center">
                      <div className="text-lg font-medium">{result.macros.fat}g</div>
                      <div className="text-sm">Fat</div>
                    </div>
                  </div>
                </div>
              </div>
            </AlertDescription>
          </div>
        </Alert>
      )}
    </div>
  );
};

export default CalorieCalculator;
