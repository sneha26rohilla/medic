// Function to generate diet recommendations based on user data
function generateDietRecommendations(userData) {
    // Base foods everyone should eat
    const baseFoods = [
      'Leafy greens', 'Berries', 'Nuts and seeds', 
      'Whole grains', 'Lean proteins', 'Legumes'
    ];
    
    const baseAvoid = [
      'Processed foods', 'Excess sugar', 'Artificial sweeteners', 
      'Trans fats', 'Excessive sodium'
    ];
    
    // Condition-specific recommendations
    const recommendations = {
      diabetes: {
        foods: ['High-fiber fruits', 'Non-starchy vegetables', 'Fatty fish', 'Cinnamon'],
        avoid: ['Sugary drinks', 'White bread', 'Pastries', 'Fruit juice', 'White rice']
      },
      heartDisease: {
        foods: ['Fatty fish', 'Oatmeal', 'Berries', 'Avocados', 'Olive oil', 'Walnuts'],
        avoid: ['Bacon', 'Hot dogs', 'Sausages', 'Fried foods', 'Saturated fats']
      },
      hypertension: {
        foods: ['Bananas', 'Leafy greens', 'Potatoes', 'Beets', 'Yogurt', 'Pistachios'],
        avoid: ['Canned soups', 'Frozen pizza', 'Processed meats', 'Pickles', 'Sauces']
      },
      obesity: {
        foods: ['Apples', 'Greek yogurt', 'Eggs', 'Green tea', 'Broccoli', 'Lean proteins'],
        avoid: ['Fast food', 'Sugary drinks', 'Refined grains', 'Candy', 'Ice cream']
      }
    };
    
    // Build recommendation based on user conditions
    let recommendedFoods = [...baseFoods];
    let foodsToAvoid = [...baseAvoid];
    
    // Add condition-specific recommendations
    userData.conditions.forEach(condition => {
      if (recommendations[condition]) {
        recommendedFoods = [...recommendedFoods, ...recommendations[condition].foods];
        foodsToAvoid = [...foodsToAvoid, ...recommendations[condition].avoid];
      }
    });
    
    // Remove duplicates
    recommendedFoods = [...new Set(recommendedFoods)];
    foodsToAvoid = [...new Set(foodsToAvoid)];
    
    // Generate a basic meal plan
    const mealPlan = generateMealPlan(userData, recommendedFoods, foodsToAvoid);
    
    // Generate health tips based on user's conditions
    const healthTips = generateHealthTips(userData);
    
    // Personalized summary
    const summary = generateSummary(userData);
    
    return {
      foods: {
        recommended: recommendedFoods,
        avoid: foodsToAvoid
      },
      mealPlan,
      summary,
      healthTips
    };
  }
  
  // Function to generate meal plan
  function generateMealPlan(userData, recommendedFoods, foodsToAvoid) {
    // Simple meal plan generation - in a real app, this would be more sophisticated
    return {
      breakfast: [
        'Oatmeal with berries and nuts',
        'Greek yogurt with honey and seeds',
        'Whole grain toast with avocado'
      ],
      lunch: [
        'Quinoa salad with vegetables and lean protein',
        'Lentil soup with whole grain bread',
        'Grilled chicken with roasted vegetables'
      ],
      dinner: [
        'Baked salmon with steamed vegetables',
        'Vegetable stir-fry with tofu',
        'Turkey and vegetable chili'
      ],
      snacks: [
        'Apple slices with almond butter',
        'Carrot sticks with hummus',
        'Mixed nuts and dried berries',
        'Greek yogurt with cinnamon'
      ]
    };
  }
  
  // Function to generate health tips
  function generateHealthTips(userData) {
    const commonTips = [
      'Stay hydrated by drinking at least 8 glasses of water daily',
      'Aim for at least 30 minutes of moderate exercise 5 days a week',
      'Practice mindful eating by slowing down during meals',
      'Get 7-9 hours of quality sleep each night'
    ];
    
    const conditionTips = {
      diabetes: [
        'Monitor your blood sugar regularly',
        'Eat at consistent times each day',
        'Choose foods with a low glycemic index'
      ],
      heartDisease: [
        'Limit sodium intake to less than 2,300mg per day',
        'Include omega-3 fatty acids in your diet',
        'Manage stress through meditation or deep breathing exercises'
      ],
      hypertension: [
        'Follow the DASH diet principles',
        'Limit alcohol consumption',
        'Reduce caffeine intake if sensitive'
      ],
      obesity: [
        'Focus on portion control',
        'Keep a food journal to track intake',
        'Incorporate strength training to build muscle mass'
      ]
    };
    
    let tips = [...commonTips];
    
    userData.conditions.forEach(condition => {
      if (conditionTips[condition]) {
        tips = [...tips, ...conditionTips[condition]];
      }
    });
    
    return tips.slice(0, 6); // Limit to 6 tips
  }
  
  // Function to generate summary
  function generateSummary(userData) {
    const ageGroup = userData.age < 30 ? 'young adult' : userData.age < 50 ? 'middle-aged adult' : 'older adult';
    
    let summary = `Based on your profile as a ${ageGroup}`;
    if (userData.conditions.length === 0) {
      return `Congratulations! As a ${ageGroup} with no health conditions, you're on a great path. This nutrition plan will help you maintain your health and well-being.`;
    }
    if (userData.conditions.length > 0) {
      const conditionText = userData.conditions.length === 1 
        ? `with ${formatCondition(userData.conditions[0])}` 
        : `with multiple health considerations including ${userData.conditions.map(formatCondition).join(' and ')}`;
      
      summary += ` ${conditionText}, we've created a nutrition plan to support your health goals.`;
    } else {
      summary += `, we've created a nutrition plan focused on general wellness and prevention.`;
    }
    
    return summary;
  }
  
  // Helper function to format condition names
  function formatCondition(condition) {
    const conditionNames = {
      diabetes: 'diabetes',
      heartDisease: 'heart disease',
      hypertension: 'hypertension',
      obesity: 'weight management needs'
    };
    
    return conditionNames[condition] || condition;
  }
  
  function displayRecommendations(recommendation) {
    if (conditions.includes('None')) {
      alert("🎉 Congratulations! You're in great health! Keep up the good work and maintain your healthy lifestyle. A balanced diet and regular exercise can help you stay fit and energetic. Kudos to you! 🌿");
    }
    document.getElementById('results-section').style.display = 'block';
    document.getElementById('form-section').style.display = 'none';
  
    const recommendedFoods = document.getElementById('recommended-foods');
    const avoidFoods = document.getElementById('avoid-foods');
    const summaryText = document.getElementById('summary-text');
    recommendedFoods.innerHTML = recommendation.foods.recommended.map(food => `<li>${food}</li>`).join('');
    avoidFoods.innerHTML = recommendation.foods.avoid.map(food => `<li>${food}</li>`).join('');

    summaryText.textContent = recommendation.summary;
  }
  

  