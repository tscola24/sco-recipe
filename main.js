var filter = document.getElementById("filter");
var dropdown;

filter.addEventListener("click", function () {

    if (dropdown && document.body.contains(dropdown)) {
        dropdown.remove();
        dropdown = null;
        return;
    }

    dropdown = document.createElement("select");
    dropdown.style.color = "black";
    dropdown.style.position = "fixed";
    dropdown.style.borderRadius = "20px";  
    dropdown.style.top = "40%";
    dropdown.style.right = "0";

    const options = ["none", "desserts", "dinners"];
    options.forEach(optionText => {
        const child = document.createElement("option");
        child.value = optionText.toLowerCase();
        child.innerText = optionText;
        dropdown.appendChild(child);
    });

    document.body.appendChild(dropdown);

    dropdown.addEventListener("change", function () {
        var selected = dropdown.value;
        var recipes = document.querySelectorAll(".recipe_card");
            recipes.forEach(recipe => {
            if (selected === "none" || recipe.getAttribute("data-category") === selected) {
                recipe.style.display = "flex";
            } 
            else {
                recipe.style.display = "none";
            }
            });
    });
});


var recipeButtons = document.querySelectorAll(".recipe_dropdown_button");
var recipeDropdowns = document.querySelectorAll(".recipe_dropdown");
recipeButtons.forEach(button=>{
    button.addEventListener("mouseover", function(){
        var value = button.getAttribute("data-category")
        recipeDropdowns.forEach(dropdown =>{
            if(dropdown.getAttribute("data-category")=== value)
            {
                    button.innerText = "Info v";
                    dropdown.style.display = "block";
            }

        });
    });
    button.addEventListener("mouseout", function(){
        var value = button.getAttribute("data-category")
        recipeDropdowns.forEach(dropdown =>{
            if(dropdown.getAttribute("data-category")=== value){
                    button.innerText = "Info ^";
                    dropdown.style.display = "none";
        }
    });
    });
});
    
  