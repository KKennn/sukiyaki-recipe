let recipe = {
    "name": "Sukiyaki Recipe",
    "description": "Cozy up at your get-together with friends and family with this homemade Japanese sukiyaki recipe, served with seared marbled beef and a variety of vegetables cooked in a soy sauce broth.",
    "author": "Nami",
    "cookTime": "20 mins",
    "prepTime": "10 mins",
    "totalTime": "30 mins",
    "servings": "4",
    "source": "justonecookbook.com",
    "image": "sukiyaki.jpg",
    "ingredients": [
        "1/2 packages udon noodles (typically added to the soup at the end of the meal)",
        "1/2 head napa cabbage (about 10 leaves or 1.8 oz or 690 g)",
        "1/2 bunch shungiku (Tong Ho/Garland Chrysanthemum) (7 oz or 200 g)",
        "1 Negi (long green onion) (leek or 3 green onions)",
        "1 package enoki mushrooms",
        "8 shiitake mushrooms (carve decorative shapes)",
        "1 package Yaki Tofu (Broiled Tofu) (9 oz or 255 g)",
        "1/3 carrot (for decoration, optional)",
        "1 package shirataki noodles (or cellophane noodles, yam noodles; 1 bag = 7 oz or 198 g)",
        "1 Tbsp neutral-flavored oil (vegetable, canola, etc)",
        "1 lb thinly sliced beef (chuck or rib eye) (454 g; or slice your own meat, see Notes)",
        "1 Tbsp brown sugar",
        "1-1.5 cup dashi (Japanese soup stock; click to learn more) (to dilute the sauce) (or water)",
        "1 cup sake (240 ml)",
        "1 cup mirin (240 ml)",
        "1/4 cup sugar (60 ml)",
        "1 cup soy sauce (240 ml)"
    ],
    "instructions": [
        "Combine 1 cup sake, 1 cup mirin, ¼ cup sugar, and 1 cup soy sauce in a small saucepan and bring it to a boil. Once boiling, turn off the heat and set aside. This Sukiyaki sauce can be stored in an air-tight container in the refrigerator for up to a month.",
        "If your udon is frozen, cook it in boiling water until loosen. Remove from heat and soak in iced water to prevent overcooking them. Drain and transfer to a plate.",
        "Prepare sukiyaki ingredients. Cut napa cabbage into 2” (5 cm) wide then cut in half right at the middle of the white part.",
        "Cut shungiku into 2” (5 cm) wide, and slice Tokyo negi. Discard the bottom part of enoki and tear into smaller bundles.",
        "Discard the shiitake stem and decorate the top of shiitake if you like.",
        "Discard the shiitake stem and decorate the top of shiitake if you like.",
        "If you like, you can slice some carrots and then stamp them into a floral shape for decoration.",
        "Drain and rinse the shirataki noodles. Put all the ingredients on one big platter for the table or into smaller individual servings.",
        "Set a portable gas cook top at the dining table and heat a cast iron sukiyaki pot (or any pot) on medium heat. When it’s hot, add 1 Tbsp. cooking oil.",
        "Place some of sliced beef to sear and sprinkle 1 Tbsp. brown sugar. Flip and cook the meat. You can pour a little bit of Sukiyaki Sauce over the meat and enjoy the sweet and nicely caramelized meat now, or continue to next step and eat it later.",
        "Pour 1 ⅓ cup of Sukiyaki Sauce and 1 cup dashi (or water) in the pot, or until ⅔ of the ingredients are submerged in the sauce.",
        "Place some of the ingredients in the pot (except for udon). Put the lid on and bring to a boil. Once boiling, turn the heat and simmer until the ingredients are cooked through.",
        "Once the food is cooked, you can start enjoying them. Keep adding more ingredients and sauce as you eat from the pot. If the sauce is too salty, add dashi to dilute. If the vegetables diluted the sauce too much, then add more sukiyaki sauce.",
    ]
}

document.getElementById("name").innerText = recipe.name;
document.getElementById("image").src = recipe.image;
document.getElementById("description").innerText = recipe.description;
document.getElementById("prep-time").innerText = recipe.prepTime;
document.getElementById("cook-time").innerText = recipe.cookTime;
document.getElementById("total-time").innerText = recipe.totalTime;
document.getElementById("servings").innerText = recipe.servings;
document.getElementById("author").innerText = recipe.author;
document.getElementById("source").innerText = recipe.source;

for (let i = 0; i < recipe.ingredients.length; i++) {
    document.getElementById("ingredients").innerHTML += "<li>" + recipe.ingredients[i] + "</li>";
}

for (let i = 0; i < recipe.instructions.length; i++) {
    document.getElementById("instructions").innerHTML += "<li>" + recipe.instructions[i] + "</li>";
}