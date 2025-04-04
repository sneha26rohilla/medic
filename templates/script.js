// script.js
document.addEventListener("DOMContentLoaded", function() {
    const feed = document.getElementById("feed");

    // 7 Food Recipes from BBC Good Food
    const foodItems = [
        {
            title: "Sweet Potato & Spinach Bake",
            description: "A hearty, nutrient-rich bake with fiber-packed sweet potatoes and iron-rich spinach. This dish boosts energy, aids digestion, and supports immunity. Topped with a light, cheesy crust, it's both nourishing and satisfying.",
            image: "images/sweet potato and spinach bake.webp",
            link: "https://www.bbcgoodfood.com/recipes/sweet-potato-spinach-bake"
        },
        {
            title: "Healthy Tikka Masala",
            description: "A lighter take on the classic, swapping heavy cream for Greek yogurt or coconut milk. Packed with protein and anti-inflammatory spices like turmeric and cumin, this dish is rich in flavor without excess fat.",
            image: "images/healthy tikka masala.webp",
            link: "https://www.bbcgoodfood.com/recipes/healthy-tikka-masala"
        },
        
        {
            title: "Indian Potato Pie",
            description: "A spiced, golden-crusted pie with creamy mashed potatoes and aromatic Indian spices. Potassium-rich potatoes and fiber-filled crust make it a comforting yet wholesome meal.",
            image: "images/indian potato pie.webp",
            link: "https://www.bbcgoodfood.com/recipes/indian-potato-pie"
        },
        {
            title: "Traditional Indian Diet & Science - ResearchGate",
            description: `Indian cuisine blends Ayurvedic wisdom with science, using spices and plant-based diets to support digestion, immunity, and overall health. `,
            image: "images/Traditional.jpeg",
            link: "https://www.researchgate.net/publication/358263345_TRADITIONAL_DIETARY_PATTERN_OF_INDIAN_FOOD_AND_ITS_SCIENTIFIC_BASIS_AN_OVERVIEW"
        },
        {
            title: "Ginger Chai – The Perfect Winter Comfort Tea",
            description: 
            "A warm, antioxidant-rich tea that boosts immunity, aids digestion, and fights seasonal infections. Perfect for staying cozy and energized in winter.",
            image: "images/chai.jpg",
            link: "https://www.octavius.in/blogs/news/ginger-chai-the-perfect-winter-comfort-tea-for-warmth-and-immunity-boost"
        },
        
        {
            title: "Indian Cucumber Salad",
            description: "A light, cooling salad with crisp cucumbers, tangy lemon, and Indian spices. Hydrating and packed with antioxidants, it's a refreshing side for spicy meals.",
            image: "images/indian cucumber salad.webp",
            link: "https://www.bbcgoodfood.com/recipes/indian-cucumber-salad"
        },
        {
            title: "Indian Winter Soup",
            description: "A warming lentil soup infused with garlic, ginger, and turmeric for an immune boost. Rich in protein and fiber, it’s a perfect cozy meal on cold days.",
            image: "images/recipe-image-legacy-id-518468_11-10f1c7e.webp",
            link: "https://www.bbcgoodfood.com/recipes/indian-winter-soup"
        },
        {
            title: "Cheat’s Black Dhal",
            description: "A quick, creamy black lentil dhal rich in protein and fiber. Infused with garlic, ginger, and tomatoes, it’s a flavorful, nourishing dish for busy days.",
            image: "images/cheats-black-dhal-recipe-image-d9a05dd.webp",
            link: "https://www.bbcgoodfood.com/recipes/cheats-black-dhal"
        },
        {
            title: "Best Indian Diet Plan for Weight Loss - Healthline",
            description: `
            A balanced diet with whole grains, legumes, and lean proteins supports weight management, while Indian spices aid metabolism sustainably.`,
            image: "images/diet-plan.jpeg",
            link: "https://www.healthline.com/nutrition/indian-diet-weight-loss"
        },
        {
            title: "Dietary Patterns in India - PMC",
            description: `
            Indian diets vary by region, shaped by culture and geography. Dietary patterns influence health, with links to diabetes and heart disease. A systematic review analyzes long-term trends, highlighting their impact.
            `,
            image: "images/dietry pattern.jpeg",

            link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4890343/"
        },
        
        {
            title: "Khatti Dhal",
            description: "A tangy, tamarind-infused lentil dish balancing sweet, sour, and spicy flavors. Protein-packed and digestion-friendly, it's perfect with rice or roti.",
            image: "images/khatti-dhal-eee2059.webp",
            link: "https://www.bbcgoodfood.com/recipes/khatti-dhal"
        },
        {
            title: "Dietary Practices - Stanford Geriatrics",
            description: `
            Indian diets vary by culture and tradition, offering rich nutrients but posing risks like high-carb and sugar intake. Stanford research highlights their health impact.`,
            image: "images/practices.jpg",
            link: "https://geriatrics.stanford.edu/ethnomed/asian_indian/health_risk_patterns/diet.html"
        }
        
    ];
    
    
    // Display Food Cards
    function displayFoodItems() {
        foodItems.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("card");

            // Create card content
            card.innerHTML = `
                <div class="card-content">
                    <img src="${item.image}" alt="${item.title}">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
                <div class="buttons">
                    <button onclick="toggleLike(event, this)">🤍 Like</button>
                    <button onclick="toggleSave(event, this)">💾 Save</button>
                </div>
            `;

            // Clicking the card (except buttons) opens the article in a new tab
            card.querySelector(".card-content").addEventListener("click", () => {
                window.open(item.link, "_blank"); // Opens in a new tab
            });

            feed.appendChild(card);
        });
    }

    displayFoodItems();
});

// Toggle Like button
function toggleLike(event, button) {
    event.stopPropagation(); // Prevents card click event
    button.innerHTML = button.innerHTML.includes("❤️") ? "🤍 Like" : "❤️ Liked";
}

// Toggle Save button
function toggleSave(event, button) {
    event.stopPropagation(); // Prevents card click event
    button.innerHTML = button.innerHTML.includes("✅") ? "💾 Save" : "✅ Saved";
}
