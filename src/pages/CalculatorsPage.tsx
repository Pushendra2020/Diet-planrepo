
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BMICalculator from "@/components/calculators/BMICalculator";
import BodyFatCalculator from "@/components/calculators/BodyFatCalculator";
import CalorieCalculator from "@/components/calculators/CalorieCalculator";

const CalculatorsPage = () => {
  const [activeTab, setActiveTab] = useState("bmi");

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Fitness Calculators</h1>
          <p className="text-gray-600">
            Use our calculators to understand your body metrics and nutritional needs.
          </p>
        </div>

        <Tabs defaultValue="bmi" onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="bmi">BMI</TabsTrigger>
            <TabsTrigger value="bodyfat">Body Fat</TabsTrigger>
            <TabsTrigger value="calorie">Calorie Needs</TabsTrigger>
          </TabsList>
          
          <div className="mt-8">
            <TabsContent value="bmi" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Body Mass Index (BMI) Calculator</CardTitle>
                  <CardDescription>
                    Calculate your BMI to determine if you're at a healthy weight for your height.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <BMICalculator />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="bodyfat" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Body Fat Percentage Calculator</CardTitle>
                  <CardDescription>
                    Estimate your body fat percentage using measurements.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <BodyFatCalculator />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="calorie" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Daily Calorie Calculator</CardTitle>
                  <CardDescription>
                    Calculate your daily calorie needs based on your goal.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CalorieCalculator />
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default CalculatorsPage;
