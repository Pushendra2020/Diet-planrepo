
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

// These are mock meal options with Indian cuisine focus
const mealOptions = {
  vegetarian: {
    breakfast: [
      {
        name: "Masala Dosa with Chutney",
        foods: ["1 masala dosa", "2 tbsp coconut chutney", "1/4 cup sambar", "1 cup masala tea"],
        nutrients: { calories: 320, protein: 10, carbs: 50, fat: 9 }
      },
      {
        name: "Paneer Paratha",
        foods: ["2 paneer parathas", "1/2 cup curd/yogurt", "1 tbsp pickle", "1 cup masala chai"],
        nutrients: { calories: 450, protein: 18, carbs: 48, fat: 22 }
      },
      {
        name: "Poha with Vegetables",
        foods: ["1 cup poha", "1/4 cup mixed vegetables", "1 tbsp peanuts", "1 cup green tea"],
        nutrients: { calories: 280, protein: 8, carbs: 42, fat: 8 }
      }
    ],
    lunch: [
      {
        name: "Rajma Chawal",
        foods: ["1 cup rajma curry", "1 cup steamed rice", "1 cup vegetable salad", "1/2 cup curd/yogurt"],
        nutrients: { calories: 420, protein: 16, carbs: 65, fat: 8 }
      },
      {
        name: "Chole Bhature",
        foods: ["1 cup chole/chickpea curry", "2 bhaturas", "1/2 cup onion salad", "1 glass buttermilk"],
        nutrients: { calories: 550, protein: 18, carbs: 70, fat: 22 }
      },
      {
        name: "Dal Khichdi",
        foods: ["1.5 cup dal khichdi", "1 tbsp ghee", "1 cup raita", "1 papad"],
        nutrients: { calories: 380, protein: 15, carbs: 55, fat: 10 }
      }
    ],
    dinner: [
      {
        name: "Paneer Butter Masala with Roti",
        foods: ["1 cup paneer butter masala", "3 rotis", "1/2 cup cucumber salad", "1/2 cup jeera rice"],
        nutrients: { calories: 450, protein: 20, carbs: 45, fat: 22 }
      },
      {
        name: "Veg Biryani",
        foods: ["1.5 cups vegetable biryani", "1/2 cup raita", "1 papad", "1 cup masala chaas"],
        nutrients: { calories: 420, protein: 13, carbs: 60, fat: 14 }
      },
      {
        name: "Aloo Gobi with Dal and Rice",
        foods: ["1 cup aloo gobi sabzi", "1/2 cup dal tadka", "1 cup steamed rice", "1 cup vegetable salad"],
        nutrients: { calories: 440, protein: 14, carbs: 70, fat: 10 }
      }
    ],
    snack: [
      {
        name: "Masala Chai with Samosa",
        foods: ["1 cup masala chai", "1 samosa", "Green chutney"],
        nutrients: { calories: 240, protein: 5, carbs: 32, fat: 12 }
      },
      {
        name: "Dhokla",
        foods: ["2 pieces khaman dhokla", "Green chutney", "1 cup lemon water"],
        nutrients: { calories: 180, protein: 8, carbs: 24, fat: 6 }
      },
      {
        name: "Roasted Chana",
        foods: ["1/2 cup roasted chana", "1 cup masala chai", "Few curry leaves"],
        nutrients: { calories: 190, protein: 9, carbs: 22, fat: 8 }
      }
    ]
  },
  vegan: {
    breakfast: [
      {
        name: "Idli with Sambar",
        foods: ["3 idlis", "1/2 cup sambar", "2 tbsp coconut chutney", "1 cup herbal tea"],
        nutrients: { calories: 290, protein: 8, carbs: 54, fat: 4 }
      },
      {
        name: "Upma",
        foods: ["1 cup semolina upma", "1/4 cup mixed vegetables", "1 tbsp peanuts", "1 cup lemon water"],
        nutrients: { calories: 310, protein: 9, carbs: 52, fat: 7 }
      },
      {
        name: "Vegan Uttapam",
        foods: ["2 uttapams", "1/4 cup coconut chutney", "1/4 cup tomato chutney", "1 cup green tea"],
        nutrients: { calories: 340, protein: 10, carbs: 58, fat: 8 }
      }
    ],
    lunch: [
      {
        name: "Dal Tadka with Rice",
        foods: ["1 cup dal tadka", "1 cup steamed rice", "1 cup mixed vegetable salad", "1 roasted papad"],
        nutrients: { calories: 390, protein: 16, carbs: 70, fat: 6 }
      },
      {
        name: "Chana Masala with Roti",
        foods: ["1 cup chana masala", "3 rotis", "1/2 cup onion salad", "1 glass jaljeera"],
        nutrients: { calories: 420, protein: 18, carbs: 65, fat: 10 }
      },
      {
        name: "Vegan Pav Bhaji",
        foods: ["1.5 cups bhaji (no butter)", "2 pavs", "1/4 cup chopped onion", "Lemon wedges"],
        nutrients: { calories: 410, protein: 12, carbs: 75, fat: 8 }
      }
    ],
    dinner: [
      {
        name: "Mixed Vegetable Curry with Roti",
        foods: ["1 cup mixed vegetable curry", "3 rotis", "1 cup cucumber salad", "1 glass lemon water"],
        nutrients: { calories: 390, protein: 12, carbs: 68, fat: 9 }
      },
      {
        name: "Masoor Dal with Jeera Rice",
        foods: ["1 cup masoor dal", "1 cup jeera rice", "1 cup vegetable salad", "1 roasted papad"],
        nutrients: { calories: 410, protein: 18, carbs: 72, fat: 5 }
      },
      {
        name: "Aloo Methi with Ragi Roti",
        foods: ["1 cup aloo methi", "2 ragi rotis", "1/2 cup sliced cucumber", "1 glass buttermilk (plant-based)"],
        nutrients: { calories: 370, protein: 10, carbs: 65, fat: 8 }
      }
    ],
    snack: [
      {
        name: "Roasted Makhana",
        foods: ["1/2 cup roasted makhana (fox nuts)", "1 cup herbal tea"],
        nutrients: { calories: 150, protein: 4, carbs: 24, fat: 4 }
      },
      {
        name: "Fruit Chaat",
        foods: ["1 cup mixed fruit chaat", "1 tsp chaat masala", "Few mint leaves"],
        nutrients: { calories: 120, protein: 2, carbs: 28, fat: 1 }
      },
      {
        name: "Bhel Puri",
        foods: ["1 cup bhel puri", "1 glass nimbu pani (lemon water)"],
        nutrients: { calories: 220, protein: 6, carbs: 38, fat: 6 }
      }
    ]
  },
  "non-vegetarian": {
    breakfast: [
      {
        name: "Keema Paratha",
        foods: ["2 keema parathas", "1/2 cup curd/yogurt", "1 tbsp pickle", "1 cup masala chai"],
        nutrients: { calories: 480, protein: 24, carbs: 42, fat: 26 }
      },
      {
        name: "Egg Bhurji with Paratha",
        foods: ["2 eggs bhurji", "2 plain parathas", "1/4 cup mint chutney", "1 cup masala chai"],
        nutrients: { calories: 460, protein: 22, carbs: 38, fat: 24 }
      },
      {
        name: "Chicken Sandwich",
        foods: ["1 chicken tikka sandwich", "1/4 cup mint chutney", "1 cup masala chai"],
        nutrients: { calories: 390, protein: 28, carbs: 30, fat: 16 }
      }
    ],
    lunch: [
      {
        name: "Chicken Biryani",
        foods: ["1.5 cups chicken biryani", "1/2 cup raita", "1 papad", "1/4 cup onion salad"],
        nutrients: { calories: 520, protein: 30, carbs: 58, fat: 18 }
      },
      {
        name: "Fish Curry with Rice",
        foods: ["1 cup fish curry", "1 cup steamed rice", "1/2 cup cucumber salad", "1 glass buttermilk"],
        nutrients: { calories: 450, protein: 32, carbs: 50, fat: 12 }
      },
      {
        name: "Mutton Curry with Roti",
        foods: ["1 cup mutton curry", "3 rotis", "1/2 cup onion salad", "1 roasted papad"],
        nutrients: { calories: 510, protein: 35, carbs: 45, fat: 22 }
      }
    ],
    dinner: [
      {
        name: "Tandoori Chicken with Naan",
        foods: ["2 pieces tandoori chicken", "2 butter naan", "1/4 cup mint chutney", "1/2 cup onion salad"],
        nutrients: { calories: 580, protein: 40, carbs: 46, fat: 24 }
      },
      {
        name: "Egg Curry with Rice",
        foods: ["2 egg curry", "1 cup steamed rice", "1 cup vegetable salad", "1 papad"],
        nutrients: { calories: 460, protein: 24, carbs: 58, fat: 16 }
      },
      {
        name: "Butter Chicken with Roti",
        foods: ["1 cup butter chicken", "3 rotis", "1/2 cup cucumber raita", "1/4 cup onion salad"],
        nutrients: { calories: 550, protein: 38, carbs: 42, fat: 26 }
      }
    ],
    snack: [
      {
        name: "Chicken Tikka",
        foods: ["4 pieces chicken tikka", "1/4 cup mint chutney", "1 cup masala chai"],
        nutrients: { calories: 240, protein: 28, carbs: 4, fat: 12 }
      },
      {
        name: "Egg Pakora",
        foods: ["4 egg pakoras", "Green chutney", "1 cup masala chai"],
        nutrients: { calories: 280, protein: 16, carbs: 18, fat: 16 }
      },
      {
        name: "Chicken Cutlet",
        foods: ["2 chicken cutlets", "1/4 cup tomato ketchup", "1 glass nimbu pani"],
        nutrients: { calories: 320, protein: 22, carbs: 24, fat: 14 }
      }
    ]
  },
  pescatarian: {
    breakfast: [
      {
        name: "Fish Kheema with Paratha",
        foods: ["1/2 cup fish kheema", "2 plain parathas", "1/2 cup curd/yogurt", "1 cup masala chai"],
        nutrients: { calories: 420, protein: 26, carbs: 40, fat: 18 }
      },
      {
        name: "Poha with Prawns",
        foods: ["1 cup poha", "1/4 cup cooked prawns", "1 tbsp peanuts", "1 cup green tea"],
        nutrients: { calories: 340, protein: 18, carbs: 40, fat: 10 }
      },
      {
        name: "Idli with Fish Sambar",
        foods: ["3 idlis", "1/2 cup fish sambar", "2 tbsp coconut chutney", "1 cup herbal tea"],
        nutrients: { calories: 350, protein: 20, carbs: 48, fat: 6 }
      }
    ],
    lunch: [
      {
        name: "Fish Curry with Rice",
        foods: ["1 cup fish curry", "1 cup steamed rice", "1/2 cup cucumber salad", "1 glass buttermilk"],
        nutrients: { calories: 450, protein: 32, carbs: 50, fat: 12 }
      },
      {
        name: "Prawn Biryani",
        foods: ["1.5 cups prawn biryani", "1/2 cup raita", "1 papad", "1/4 cup onion salad"],
        nutrients: { calories: 480, protein: 28, carbs: 60, fat: 14 }
      },
      {
        name: "Fish Thali",
        foods: ["1 fried fish piece", "1/2 cup dal", "1 cup rice", "1/2 cup vegetable sabzi", "1 papad"],
        nutrients: { calories: 520, protein: 30, carbs: 65, fat: 16 }
      }
    ],
    dinner: [
      {
        name: "Grilled Fish with Lemon Rice",
        foods: ["1 piece grilled fish", "1 cup lemon rice", "1/2 cup cucumber raita", "1 papad"],
        nutrients: { calories: 420, protein: 28, carbs: 48, fat: 12 }
      },
      {
        name: "Fish Tikka with Roti",
        foods: ["6 pieces fish tikka", "2 rotis", "1/4 cup mint chutney", "1/2 cup onion salad"],
        nutrients: { calories: 380, protein: 32, carbs: 32, fat: 14 }
      },
      {
        name: "Prawn Curry with Appam",
        foods: ["1 cup prawn curry", "2 appams", "1/4 cup coconut chutney", "1/2 cup vegetable salad"],
        nutrients: { calories: 440, protein: 26, carbs: 52, fat: 12 }
      }
    ],
    snack: [
      {
        name: "Fish Pakora",
        foods: ["6 pieces fish pakora", "Green chutney", "1 cup masala chai"],
        nutrients: { calories: 260, protein: 18, carbs: 20, fat: 12 }
      },
      {
        name: "Prawn Cutlets",
        foods: ["2 prawn cutlets", "1/4 cup tomato ketchup", "1 glass nimbu pani"],
        nutrients: { calories: 240, protein: 16, carbs: 22, fat: 10 }
      },
      {
        name: "Fish Fingers",
        foods: ["6 fish fingers", "1/4 cup mint-yogurt dip", "1 cup lemon water"],
        nutrients: { calories: 280, protein: 22, carbs: 18, fat: 12 }
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
