document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Get DOM elements
    const dietForm = document.getElementById('diet-form');
    const formSection = document.getElementById('form-section');
    const resultsSection = document.getElementById('results-section');
    const resetButton = document.getElementById('reset-button');
    
    // Form inputs
    const ageInput = document.getElementById('age');
    const weightInput = document.getElementById('weight');
    const diabetesCheckbox = document.getElementById('diabetes');
    const heartDiseaseCheckbox = document.getElementById('heartDisease');
    const hypertensionCheckbox = document.getElementById('hypertension');
    const obesityCheckbox = document.getElementById('obesity');
    const noneCheckbox = document.getElementById('none');
    
    const checkboxes = [diabetesCheckbox, heartDiseaseCheckbox, hypertensionCheckbox, obesityCheckbox, noneCheckbox];
    
    // Prevent selecting "None" with other conditions
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function() {
        if (noneCheckbox.checked) {
          checkboxes.forEach(cb => {
            if (cb !== noneCheckbox) cb.checked = false;
          });
        } else {
          if (checkbox !== noneCheckbox && checkbox.checked) {
            noneCheckbox.checked = false;
          }
        }
      });
    });
    
    // Handle form submission
    dietForm.addEventListener('submit', function(e) {
      e.preventDefault();
    
      const age = parseInt(ageInput.value);
      const weight = parseInt(weightInput.value);
      const conditions = [];
    
      if (diabetesCheckbox.checked) conditions.push('diabetes');
      if (heartDiseaseCheckbox.checked) conditions.push('heartDisease');
      if (hypertensionCheckbox.checked) conditions.push('hypertension');
      if (obesityCheckbox.checked) conditions.push('obesity');
      if (noneCheckbox.checked) conditions.push('none');
    
      if (conditions.length === 0) {
        alert('Please select at least one health condition, or choose "None".');
        return;
      }
    
      // Generate diet recommendations
      const recommendation = generateDietRecommendations({ age, weight, conditions });
    

    
      // Display results
      displayResults(recommendation);
      document.getElementById('form-section').style.display = 'none';
      document.getElementById('results-section').style.display = 'block';
    });
    
    
    // Handle form submission
    dietForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Collect form data
      const formData = {
        age: parseInt(ageInput.value),
        weight: parseInt(weightInput.value),
        conditions: []
      };
      
      // Add selected conditions
      if (diabetesCheckbox.checked) formData.conditions.push('diabetes');
      if (heartDiseaseCheckbox.checked) formData.conditions.push('heartDisease');
      if (hypertensionCheckbox.checked) formData.conditions.push('hypertension');
      if (obesityCheckbox.checked) formData.conditions.push('obesity');
      
      // Generate diet recommendations
      const recommendation = generateDietRecommendations(formData);
      
      // Display results
      displayResults(recommendation);
      
      // Show results section, hide form section
      formSection.style.display = 'none';
      resultsSection.style.display = 'block';
      
      // Scroll to top smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Handle reset button click
    resetButton.addEventListener('click', function() {
      // Hide results section, show form section
      resultsSection.style.display = 'none';
      formSection.style.display = 'block';
      
      // Scroll to top smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Function to display results
    function displayResults(recommendation) {
      // Recommended foods
      const recommendedFoodsList = document.getElementById('recommended-foods');
      recommendedFoodsList.innerHTML = '';
      recommendation.foods.recommended.forEach(food => {
        const li = document.createElement('li');
        li.className = 'food-item';
        li.innerHTML = `<span class="food-icon">✓</span> ${food}`;
        recommendedFoodsList.appendChild(li);
      });
      
      // Foods to avoid
      const avoidFoodsList = document.getElementById('avoid-foods');
      avoidFoodsList.innerHTML = '';
      recommendation.foods.avoid.forEach(food => {
        const li = document.createElement('li');
        li.className = 'food-item';
        li.innerHTML = `<span class="food-icon">✗</span> ${food}`;
        avoidFoodsList.appendChild(li);
      });
      
      // Breakfast options
      const breakfastList = document.getElementById('breakfast-options');
      breakfastList.innerHTML = '';
      recommendation.mealPlan.breakfast.forEach(meal => {
        const li = document.createElement('li');
        li.className = 'food-item';
        li.innerHTML = `<span class="food-icon">•</span> ${meal}`;
        breakfastList.appendChild(li);
      });
      
      // Lunch options
      const lunchList = document.getElementById('lunch-options');
      lunchList.innerHTML = '';
      recommendation.mealPlan.lunch.forEach(meal => {
        const li = document.createElement('li');
        li.className = 'food-item';
        li.innerHTML = `<span class="food-icon">•</span> ${meal}`;
        lunchList.appendChild(li);
      });
      
      // Dinner options
      const dinnerList = document.getElementById('dinner-options');
      dinnerList.innerHTML = '';
      recommendation.mealPlan.dinner.forEach(meal => {
        const li = document.createElement('li');
        li.className = 'food-item';
        li.innerHTML = `<span class="food-icon">•</span> ${meal}`;
        dinnerList.appendChild(li);
      });
      
      // Snack options
      const snackList = document.getElementById('snack-options');
      snackList.innerHTML = '';
      recommendation.mealPlan.snacks.forEach(snack => {
        const li = document.createElement('li');
        li.className = 'food-item';
        li.innerHTML = `<span class="food-icon">•</span> ${snack}`;
        snackList.appendChild(li);
      });
      
      // Health tips
      const healthTipsList = document.getElementById('health-tips');
      healthTipsList.innerHTML = '';
      recommendation.healthTips.forEach(tip => {
        const li = document.createElement('li');
        li.className = 'food-item';
        li.innerHTML = `<span class="food-icon">💡</span> ${tip}`;
        healthTipsList.appendChild(li);
      });
      
      // Summary
      document.getElementById('summary-text').textContent = recommendation.summary;
    }
  });

  
  document.getElementById('diet-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Fetch values
    const age = parseInt(document.getElementById('age').value);
    const weight = parseInt(document.getElementById('weight').value);
    
    const conditions = [];
    document.querySelectorAll('.checkbox-input').forEach((checkbox) => {
      if (checkbox.checked) {
        conditions.push(checkbox.id);
      }
    });
  
    console.log('Age:', age, 'Weight:', weight, 'Conditions:', conditions);
  
    // Call your function from dietRecommendations.js
    const recommendation = generateDietRecommendations(age, weight, conditions);
    
    if (recommendation) {
      displayRecommendations(recommendation);
    } else {
      alert('No recommendation generated. Please try again.');
    }
  });
  

  