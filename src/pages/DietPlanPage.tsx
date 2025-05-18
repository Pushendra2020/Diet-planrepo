
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { generateMealPlan } from "@/utils/dietPlanGenerator";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Plan name must be at least 2 characters.",
  }),
  foodType: z.string().min(1, {
    message: "Please select a food type.",
  }),
  allergies: z.string(),
  mealsPerDay: z.string().min(1, {
    message: "Please select the number of meals per day.",
  }),
  currentBodyType: z.string().min(1, {
    message: "Please select your current body type.",
  }),
  dreamBodyType: z.string().min(1, {
    message: "Please select your dream body type.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const DietPlanPage = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      foodType: "",
      allergies: "",
      mealsPerDay: "",
      currentBodyType: "",
      dreamBodyType: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsGenerating(true);
    
    try {
      // Generate a meal plan based on user preferences
      const mealPlan = generateMealPlan(data);
      
      // Store the meal plan in local storage
      const existingPlans = JSON.parse(localStorage.getItem("dietPlans") || "[]");
      const newPlan = {
        id: Date.now().toString(),
        ...data,
        mealPlan,
        createdAt: new Date().toISOString(),
      };
      
      localStorage.setItem("dietPlans", JSON.stringify([...existingPlans, newPlan]));
      
      toast({
        title: "Diet Plan Generated!",
        description: "Your custom diet plan has been created successfully.",
      });
      
      // Redirect to saved plans page
      navigate("/saved-plans");
    } catch (error) {
      console.error("Error generating meal plan:", error);
      toast({
        title: "Error",
        description: "Failed to generate diet plan. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Create Your Diet Plan</h1>
          <p className="text-gray-600">
            Tell us about your preferences and goals to generate a personalized diet plan
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Diet Plan Preferences</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Plan Name</FormLabel>
                      <FormControl>
                        <Input placeholder="My Diet Plan" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="foodType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Food Type</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select food type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="vegetarian">Vegetarian</SelectItem>
                          <SelectItem value="vegan">Vegan</SelectItem>
                          <SelectItem value="non-vegetarian">Non-Vegetarian</SelectItem>
                          <SelectItem value="pescatarian">Pescatarian</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="allergies"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Allergies or Restrictions (optional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g., nuts, dairy, gluten"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mealsPerDay"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Meals Per Day</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select number of meals" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="3">3 meals</SelectItem>
                          <SelectItem value="4">4 meals</SelectItem>
                          <SelectItem value="5">5 meals</SelectItem>
                          <SelectItem value="6">6 meals</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="currentBodyType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Body Type</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select body type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="skinny">Skinny</SelectItem>
                            <SelectItem value="average">Average</SelectItem>
                            <SelectItem value="muscular">Muscular</SelectItem>
                            <SelectItem value="overweight">Overweight</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="dreamBodyType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Dream Body Type</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select body type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="lean">Lean</SelectItem>
                            <SelectItem value="toned">Toned</SelectItem>
                            <SelectItem value="muscular">Muscular</SelectItem>
                            <SelectItem value="athletic">Athletic</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-diet-primary hover:bg-diet-primary/90"
                  disabled={isGenerating}
                >
                  {isGenerating ? "Generating..." : "Generate Diet Plan"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DietPlanPage;
