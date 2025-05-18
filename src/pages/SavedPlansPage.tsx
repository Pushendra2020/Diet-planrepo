
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import { Trash, Calendar, Utensils } from "lucide-react";

interface Meal {
  name: string;
  foods: string[];
  nutrients: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}

interface DietPlan {
  id: string;
  name: string;
  foodType: string;
  allergies: string;
  mealsPerDay: string;
  currentBodyType: string;
  dreamBodyType: string;
  mealPlan: {
    meals: Meal[];
    dailyNutrients: {
      calories: number;
      protein: number;
      carbs: number;
      fat: number;
    };
  };
  createdAt: string;
}

const SavedPlansPage = () => {
  const [plans, setPlans] = useState<DietPlan[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<DietPlan | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Get saved plans from local storage
    const savedPlans = JSON.parse(localStorage.getItem("dietPlans") || "[]");
    setPlans(savedPlans);
  }, []);

  const deletePlan = (id: string) => {
    const updatedPlans = plans.filter((plan) => plan.id !== id);
    localStorage.setItem("dietPlans", JSON.stringify(updatedPlans));
    setPlans(updatedPlans);
    
    toast({
      title: "Plan Deleted",
      description: "Your diet plan has been deleted successfully.",
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Your Saved Diet Plans</h1>
          <p className="text-gray-600">
            View, manage, and track your personalized diet plans
          </p>
        </div>

        {plans.length === 0 ? (
          <div className="text-center py-10">
            <div className="mb-4">
              <Utensils className="mx-auto h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-1">No diet plans yet</h3>
            <p className="text-gray-500 mb-6">
              You haven't created any diet plans. Start by generating a new plan.
            </p>
            <Button asChild className="bg-diet-primary hover:bg-diet-primary/90">
              <Link to="/diet-plan">Create Diet Plan</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {plans.map((plan) => (
              <Card key={plan.id} className="card-hover">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{plan.name}</CardTitle>
                      <CardDescription>
                        {plan.foodType} • {plan.mealsPerDay} meals per day
                      </CardDescription>
                    </div>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <Trash className="h-4 w-4 text-red-500" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete Diet Plan</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to delete "{plan.name}"? This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction 
                            className="bg-red-500 hover:bg-red-600"
                            onClick={() => deletePlan(plan.id)}
                          >
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Nutritional Summary</h4>
                      <div className="grid grid-cols-4 gap-2">
                        <div className="bg-gray-50 p-2 rounded text-center">
                          <div className="text-sm font-medium">{plan.mealPlan.dailyNutrients.calories}</div>
                          <div className="text-xs text-gray-500">Cal</div>
                        </div>
                        <div className="bg-gray-50 p-2 rounded text-center">
                          <div className="text-sm font-medium">{plan.mealPlan.dailyNutrients.protein}g</div>
                          <div className="text-xs text-gray-500">Protein</div>
                        </div>
                        <div className="bg-gray-50 p-2 rounded text-center">
                          <div className="text-sm font-medium">{plan.mealPlan.dailyNutrients.carbs}g</div>
                          <div className="text-xs text-gray-500">Carbs</div>
                        </div>
                        <div className="bg-gray-50 p-2 rounded text-center">
                          <div className="text-sm font-medium">{plan.mealPlan.dailyNutrients.fat}g</div>
                          <div className="text-xs text-gray-500">Fat</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Created on {formatDate(plan.createdAt)}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full bg-diet-secondary hover:bg-diet-secondary/90"
                    onClick={() => setSelectedPlan(plan)}
                  >
                    View Full Plan
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        {/* Modal for viewing full plan */}
        {selectedPlan && (
          <AlertDialog open={!!selectedPlan} onOpenChange={(open) => !open && setSelectedPlan(null)}>
            <AlertDialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-2xl">{selectedPlan.name}</AlertDialogTitle>
                <AlertDialogDescription className="text-base">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="badge bg-diet-primary/10 text-diet-primary px-2 py-1 rounded-full text-xs">
                      {selectedPlan.foodType}
                    </span>
                    <span className="badge bg-diet-secondary/10 text-diet-secondary px-2 py-1 rounded-full text-xs">
                      {selectedPlan.mealsPerDay} meals/day
                    </span>
                  </div>
                  <div className="mb-4">
                    {selectedPlan.allergies && (
                      <p><strong>Allergies/Restrictions:</strong> {selectedPlan.allergies}</p>
                    )}
                    <p><strong>Goal:</strong> {selectedPlan.currentBodyType} → {selectedPlan.dreamBodyType}</p>
                  </div>
                </AlertDialogDescription>
              </AlertDialogHeader>
              
              <div className="py-2">
                <h3 className="text-lg font-semibold mb-3">Daily Nutritional Totals</h3>
                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="bg-diet-light p-3 rounded text-center">
                    <div className="text-xl font-medium">{selectedPlan.mealPlan.dailyNutrients.calories}</div>
                    <div className="text-sm text-gray-600">Calories</div>
                  </div>
                  <div className="bg-green-100 p-3 rounded text-center">
                    <div className="text-xl font-medium">{selectedPlan.mealPlan.dailyNutrients.protein}g</div>
                    <div className="text-sm text-gray-600">Protein</div>
                  </div>
                  <div className="bg-blue-100 p-3 rounded text-center">
                    <div className="text-xl font-medium">{selectedPlan.mealPlan.dailyNutrients.carbs}g</div>
                    <div className="text-sm text-gray-600">Carbs</div>
                  </div>
                  <div className="bg-yellow-100 p-3 rounded text-center">
                    <div className="text-xl font-medium">{selectedPlan.mealPlan.dailyNutrients.fat}g</div>
                    <div className="text-sm text-gray-600">Fat</div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-3">Meal Plan</h3>
                <div className="space-y-6">
                  {selectedPlan.mealPlan.meals.map((meal, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">Meal {index + 1}: {meal.name}</h4>
                      <ul className="list-disc list-inside mb-3 text-gray-700">
                        {meal.foods.map((food, idx) => (
                          <li key={idx}>{food}</li>
                        ))}
                      </ul>
                      <div className="grid grid-cols-4 gap-2">
                        <div className="bg-gray-50 p-2 rounded text-center">
                          <div className="text-sm font-medium">{meal.nutrients.calories}</div>
                          <div className="text-xs text-gray-500">Cal</div>
                        </div>
                        <div className="bg-gray-50 p-2 rounded text-center">
                          <div className="text-sm font-medium">{meal.nutrients.protein}g</div>
                          <div className="text-xs text-gray-500">Protein</div>
                        </div>
                        <div className="bg-gray-50 p-2 rounded text-center">
                          <div className="text-sm font-medium">{meal.nutrients.carbs}g</div>
                          <div className="text-xs text-gray-500">Carbs</div>
                        </div>
                        <div className="bg-gray-50 p-2 rounded text-center">
                          <div className="text-sm font-medium">{meal.nutrients.fat}g</div>
                          <div className="text-xs text-gray-500">Fat</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <AlertDialogFooter>
                <AlertDialogCancel>Close</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </div>
    </div>
  );
};

export default SavedPlansPage;
