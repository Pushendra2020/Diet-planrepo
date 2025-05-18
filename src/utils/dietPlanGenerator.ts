
interface DietPlanPreferences {
  name: string;
  foodType: string;
  allergies: string;
  mealsPerDay: string;
  currentBodyType: string;
  dreamBodyType: string;
}

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

interface MealPlan {
  meals: Meal[];
  dailyNutrients: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}

// These are mock meal options for different diet types
const mealOptions = {
  vegetarian: {
    breakfast: [
      {
        name: "Greek Yogurt Parfait",
        foods: ["1 cup Greek yogurt", "1/2 cup mixed berries", "1/4 cup granola", "1 tbsp honey"],
        nutrients: { calories: 340, protein: 24, carbs: 48, fat: 8 }
      },
      {
        name: "Avocado Toast",
        foods: ["2 slices whole grain bread", "1 ripe avocado", "2 eggs (scrambled)", "Cherry tomatoes", "Salt and pepper to taste"],
        nutrients: { calories: 450, protein: 20, carbs: 40, fat: 25 }
      },
      {
        name: "Protein Smoothie Bowl",
        foods: ["1 scoop plant protein", "1 banana", "1/2 cup almond milk", "1 tbsp almond butter", "Topped with granola and fruit"],
        nutrients: { calories: 380, protein: 25, carbs: 50, fat: 10 }
      }
    ],
    lunch: [
      {
        name: "Mediterranean Salad",
        foods: ["2 cups mixed greens", "1/2 cup chickpeas", "1/4 cup feta cheese", "10 kalamata olives", "1 tbsp olive oil and lemon dressing"],
        nutrients: { calories: 380, protein: 15, carbs: 25, fat: 24 }
      },
      {
        name: "Lentil Soup with Bread",
        foods: ["1.5 cups lentil soup", "1 slice whole grain bread", "1 tbsp butter", "Side of mixed greens"],
        nutrients: { calories: 400, protein: 18, carbs: 48, fat: 15 }
      },
      {
        name: "Veggie Wrap",
        foods: ["Whole grain wrap", "2 tbsp hummus", "Roasted vegetables", "1/4 cup feta cheese", "Spinach"],
        nutrients: { calories: 390, protein: 14, carbs: 45, fat: 18 }
      }
    ],
    dinner: [
      {
        name: "Stir-Fried Tofu",
        foods: ["6oz firm tofu", "2 cups mixed vegetables", "1/2 cup brown rice", "2 tbsp stir-fry sauce"],
        nutrients: { calories: 420, protein: 22, carbs: 50, fat: 14 }
      },
      {
        name: "Stuffed Bell Peppers",
        foods: ["2 bell peppers", "1 cup quinoa", "1/2 cup black beans", "1/4 cup cheese", "Salsa"],
        nutrients: { calories: 430, protein: 18, carbs: 55, fat: 12 }
      },
      {
        name: "Eggplant Parmesan",
        foods: ["1 medium eggplant", "1/4 cup parmesan", "1/2 cup tomato sauce", "Side of whole wheat pasta"],
        nutrients: { calories: 450, protein: 16, carbs: 58, fat: 15 }
      }
    ],
    snack: [
      {
        name: "Protein Snack",
        foods: ["1 apple", "2 tbsp almond butter"],
        nutrients: { calories: 180, protein: 5, carbs: 20, fat: 10 }
      },
      {
        name: "Yogurt Parfait",
        foods: ["3/4 cup Greek yogurt", "1 tbsp honey", "1/4 cup berries"],
        nutrients: { calories: 160, protein: 15, carbs: 18, fat: 2 }
      },
      {
        name: "Trail Mix",
        foods: ["1/4 cup mixed nuts", "2 tbsp dried fruit", "1 tbsp dark chocolate chips"],
        nutrients: { calories: 210, protein: 6, carbs: 15, fat: 14 }
      }
    ]
  },
  vegan: {
    breakfast: [
      {
        name: "Tofu Scramble",
        foods: ["6oz firm tofu", "1/2 cup mixed vegetables", "1 slice whole grain toast", "1 tbsp nutritional yeast"],
        nutrients: { calories: 320, protein: 22, carbs: 30, fat: 12 }
      },
      {
        name: "Açai Bowl",
        foods: ["1 açai packet", "1 banana", "1/2 cup mixed berries", "2 tbsp almond butter", "1/4 cup granola"],
        nutrients: { calories: 420, protein: 10, carbs: 65, fat: 15 }
      },
      {
        name: "Overnight Chia Pudding",
        foods: ["1/4 cup chia seeds", "1 cup almond milk", "1 tbsp maple syrup", "Topped with fruits and nuts"],
        nutrients: { calories: 350, protein: 12, carbs: 40, fat: 18 }
      }
    ],
    lunch: [
      {
        name: "Buddha Bowl",
        foods: ["1/2 cup quinoa", "1/2 cup roasted chickpeas", "1 cup roasted vegetables", "2 tbsp tahini dressing"],
        nutrients: { calories: 400, protein: 15, carbs: 55, fat: 14 }
      },
      {
        name: "Lentil Salad",
        foods: ["1 cup cooked lentils", "1 cup mixed greens", "1/4 cup diced vegetables", "2 tbsp vinaigrette"],
        nutrients: { calories: 350, protein: 18, carbs: 40, fat: 12 }
      },
      {
        name: "Hummus Wrap",
        foods: ["Whole grain wrap", "1/4 cup hummus", "Sliced cucumbers", "Tomatoes", "Spinach"],
        nutrients: { calories: 380, protein: 12, carbs: 50, fat: 15 }
      }
    ],
    dinner: [
      {
        name: "Chickpea Curry",
        foods: ["1 cup chickpeas", "1 cup mixed vegetables", "Curry sauce", "1/2 cup brown rice"],
        nutrients: { calories: 450, protein: 16, carbs: 65, fat: 12 }
      },
      {
        name: "Stuffed Sweet Potato",
        foods: ["1 large sweet potato", "1/2 cup black beans", "1/4 cup corn", "2 tbsp vegan cheese", "Cilantro"],
        nutrients: { calories: 420, protein: 14, carbs: 70, fat: 8 }
      },
      {
        name: "Vegan Pasta",
        foods: ["1.5 cups whole wheat pasta", "1/2 cup tomato sauce", "1 cup sauteed vegetables", "2 tbsp nutritional yeast"],
        nutrients: { calories: 440, protein: 18, carbs: 75, fat: 6 }
      }
    ],
    snack: [
      {
        name: "Fruit Plate",
        foods: ["1 apple", "10 almonds"],
        nutrients: { calories: 160, protein: 4, carbs: 20, fat: 8 }
      },
      {
        name: "Energy Balls",
        foods: ["2 date and nut energy balls"],
        nutrients: { calories: 150, protein: 5, carbs: 18, fat: 7 }
      },
      {
        name: "Roasted Chickpeas",
        foods: ["1/2 cup roasted chickpeas", "Spices"],
        nutrients: { calories: 130, protein: 7, carbs: 22, fat: 2 }
      }
    ]
  },
  "non-vegetarian": {
    breakfast: [
      {
        name: "Protein Omelette",
        foods: ["3 eggs", "1/4 cup cheese", "Mixed vegetables", "1 slice whole grain toast"],
        nutrients: { calories: 420, protein: 28, carbs: 20, fat: 25 }
      },
      {
        name: "Breakfast Burrito",
        foods: ["2 scrambled eggs", "2 oz grilled chicken", "1/4 cup black beans", "Whole grain wrap", "Salsa"],
        nutrients: { calories: 480, protein: 35, carbs: 40, fat: 18 }
      },
      {
        name: "Protein Pancakes",
        foods: ["Protein pancake mix", "1 scoop protein powder", "1/4 cup Greek yogurt", "1/4 cup berries"],
        nutrients: { calories: 380, protein: 30, carbs: 42, fat: 8 }
      }
    ],
    lunch: [
      {
        name: "Grilled Chicken Salad",
        foods: ["5oz grilled chicken breast", "2 cups mixed greens", "1/4 cup cherry tomatoes", "1/4 cup cucumber", "2 tbsp vinaigrette"],
        nutrients: { calories: 400, protein: 40, carbs: 12, fat: 20 }
      },
      {
        name: "Turkey Wrap",
        foods: ["4oz turkey breast", "Whole grain wrap", "Lettuce", "Tomato", "1 tbsp mayo", "1 oz cheese"],
        nutrients: { calories: 420, protein: 35, carbs: 30, fat: 18 }
      },
      {
        name: "Tuna Salad Sandwich",
        foods: ["4oz tuna (canned in water)", "1 tbsp light mayo", "2 slices whole grain bread", "Lettuce", "Side of carrot sticks"],
        nutrients: { calories: 390, protein: 30, carbs: 35, fat: 12 }
      }
    ],
    dinner: [
      {
        name: "Grilled Salmon",
        foods: ["5oz grilled salmon", "1 cup steamed vegetables", "1/2 cup brown rice", "Lemon dill sauce"],
        nutrients: { calories: 450, protein: 35, carbs: 40, fat: 15 }
      },
      {
        name: "Lean Beef Stir Fry",
        foods: ["4oz lean beef strips", "2 cups mixed vegetables", "1/2 cup brown rice", "2 tbsp stir-fry sauce"],
        nutrients: { calories: 470, protein: 38, carbs: 45, fat: 14 }
      },
      {
        name: "Baked Chicken",
        foods: ["6oz chicken breast", "1 medium sweet potato", "1 cup roasted vegetables", "1 tbsp olive oil"],
        nutrients: { calories: 460, protein: 42, carbs: 38, fat: 12 }
      }
    ],
    snack: [
      {
        name: "Protein Shake",
        foods: ["1 scoop protein powder", "1 cup almond milk", "1/2 banana"],
        nutrients: { calories: 180, protein: 20, carbs: 15, fat: 3 }
      },
      {
        name: "Greek Yogurt",
        foods: ["1 cup Greek yogurt", "1 tbsp honey", "1/4 cup berries"],
        nutrients: { calories: 200, protein: 22, carbs: 20, fat: 2 }
      },
      {
        name: "Beef Jerky with Nuts",
        foods: ["1oz beef jerky", "15 almonds"],
        nutrients: { calories: 190, protein: 15, carbs: 5, fat: 12 }
      }
    ]
  },
  pescatarian: {
    breakfast: [
      {
        name: "Smoked Salmon Bagel",
        foods: ["1 whole grain bagel", "2oz smoked salmon", "1 tbsp cream cheese", "Capers", "Red onion"],
        nutrients: { calories: 380, protein: 22, carbs: 45, fat: 12 }
      },
      {
        name: "Greek Yogurt Bowl",
        foods: ["1 cup Greek yogurt", "1/4 cup granola", "1/2 cup mixed berries", "1 tbsp honey"],
        nutrients: { calories: 340, protein: 24, carbs: 48, fat: 8 }
      },
      {
        name: "Spinach and Feta Omelette",
        foods: ["3 eggs", "1 cup spinach", "1/4 cup feta cheese", "1 slice whole grain toast"],
        nutrients: { calories: 400, protein: 26, carbs: 18, fat: 24 }
      }
    ],
    lunch: [
      {
        name: "Tuna Salad",
        foods: ["4oz tuna (canned in water)", "2 cups mixed greens", "1/4 cup chickpeas", "10 cherry tomatoes", "2 tbsp olive oil dressing"],
        nutrients: { calories: 380, protein: 35, carbs: 20, fat: 16 }
      },
      {
        name: "Salmon Poke Bowl",
        foods: ["4oz raw salmon", "1/2 cup brown rice", "1/4 avocado", "1/4 cup cucumber", "Seaweed", "Soy sauce"],
        nutrients: { calories: 420, protein: 30, carbs: 40, fat: 14 }
      },
      {
        name: "Shrimp Tacos",
        foods: ["4oz grilled shrimp", "2 corn tortillas", "1/4 cup cabbage slaw", "2 tbsp salsa", "Lime"],
        nutrients: { calories: 350, protein: 28, carbs: 38, fat: 8 }
      }
    ],
    dinner: [
      {
        name: "Baked Cod",
        foods: ["5oz baked cod", "1 cup roasted vegetables", "1/2 cup quinoa", "Lemon herb sauce"],
        nutrients: { calories: 420, protein: 35, carbs: 38, fat: 10 }
      },
      {
        name: "Grilled Shrimp Skewers",
        foods: ["6oz grilled shrimp", "1 cup grilled vegetables", "1/2 cup brown rice", "1 tbsp olive oil"],
        nutrients: { calories: 400, protein: 36, carbs: 35, fat: 12 }
      },
      {
        name: "Seafood Pasta",
        foods: ["3oz mixed seafood (shrimp, scallops)", "1.5 cups whole wheat pasta", "1/2 cup tomato sauce", "Herbs"],
        nutrients: { calories: 450, protein: 32, carbs: 60, fat: 8 }
      }
    ],
    snack: [
      {
        name: "Trail Mix",
        foods: ["1/4 cup mixed nuts", "2 tbsp dried fruit"],
        nutrients: { calories: 180, protein: 6, carbs: 12, fat: 14 }
      },
      {
        name: "Cottage Cheese",
        foods: ["1/2 cup cottage cheese", "1/4 cup pineapple chunks"],
        nutrients: { calories: 140, protein: 16, carbs: 10, fat: 2 }
      },
      {
        name: "Rice Cakes with Tuna",
        foods: ["2 rice cakes", "2oz tuna salad"],
        nutrients: { calories: 160, protein: 15, carbs: 18, fat: 3 }
      }
    ]
  }
};

// Generate a meal plan based on user preferences
export const generateMealPlan = (preferences: DietPlanPreferences): MealPlan => {
  const { foodType, mealsPerDay } = preferences;
  const meals: Meal[] = [];
  const numberOfMeals = parseInt(mealsPerDay);
  
  // Select appropriate meal options based on food type
  const dietType = foodType in mealOptions ? foodType : "vegetarian";
  const options = mealOptions[dietType as keyof typeof mealOptions];
  
  // Always include breakfast, lunch, and dinner
  meals.push(options.breakfast[Math.floor(Math.random() * options.breakfast.length)]);
  meals.push(options.lunch[Math.floor(Math.random() * options.lunch.length)]);
  meals.push(options.dinner[Math.floor(Math.random() * options.dinner.length)]);
  
  // Add snacks based on meals per day
  if (numberOfMeals > 3) {
    for (let i = 0; i < numberOfMeals - 3; i++) {
      meals.push(options.snack[Math.floor(Math.random() * options.snack.length)]);
    }
  }
  
  // Calculate total daily nutrients
  const dailyNutrients = meals.reduce((acc, meal) => {
    return {
      calories: acc.calories + meal.nutrients.calories,
      protein: acc.protein + meal.nutrients.protein,
      carbs: acc.carbs + meal.nutrients.carbs,
      fat: acc.fat + meal.nutrients.fat
    };
  }, { calories: 0, protein: 0, carbs: 0, fat: 0 });
  
  return {
    meals,
    dailyNutrients
  };
};
