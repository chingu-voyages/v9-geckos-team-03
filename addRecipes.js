let mainBtn = document.getElementById('mainBtn');
let recipeName = document.getElementById('recipeName');
let imageUrl = document.getElementById('imageUrl');
let providerName = document.getElementById('providerName');
let sourceUrl = document.getElementById('sourceUrl');
let ingredients = document.getElementById('ingredients');
let directions = document.getElementById('directions');
let submitBtn = document.getElementById('submitBtn');
let formContainer = document.getElementById('formContainer');
let closeBtn = document.getElementById('closeBtn');


//Function to toggle the 'Add Recipes' button to show and hide the 'Add recipe' form
function toggleVisibility(){
    let x = formContainer.style;
    if(x.display === "none" || x.display === ''){
        x.display="block";
    }else {
        x.display = "none";
    }
}

//Added click event to close the Add recipe div on clicking the 'x' icon
closeBtn.addEventListener('click', function() {
    formContainer.style.display = "none";
});

//function to submit the input form
function formSubmit(){
  create_cards();
  validateForm();
  toggleVisibility();
  resetForm();
  return false;
}

//function to create recipe cards
function create_cards() {
  let recipeNameValue = recipeName.value;
  // let imageUrlValue = imageUrl.value;
  let providerValue = providerName.value;
  let sourceUrlValue = sourceUrl.value;
  let ingredientsValue = ingredients.value;
  let directionsValue = directions.value;
  let recipeContainer =document.getElementById('recipeContainer')
  let recipeCardContent = document.createElement('div');
      recipeCardContent.classList.add('recipeCards');
      recipeContainer.appendChild(recipeCardContent);

  let imgContainer = document.createElement('div');
      recipeCardContent.appendChild(imgContainer);

  let recipeImg = document.createElement('img');
      // recipeImg.src = imageUrlValue;
      recipeImg.src = "./images/recipeCard.jpg";
      imgContainer.appendChild(recipeImg);

  let recipeDetailContainer = document.createElement('div');
      recipeDetailContainer.classList.add('recipeDetails');
      recipeCardContent.appendChild(recipeDetailContainer);

  let recipeCardName = document.createElement('h3');
      recipeDetailContainer.appendChild(recipeCardName);
      recipeCardName.innerHTML = recipeNameValue;

  let recipeProvider = document.createElement('p');
      recipeDetailContainer.appendChild(recipeProvider);

  let italicRecipeProvider = document.createElement('em');
      recipeProvider.appendChild(italicRecipeProvider);
      italicRecipeProvider.innerHTML = "Provided by " + providerValue;

  let buttonContainer = document.createElement('div');
      buttonContainer.classList.add('btn');
      recipeDetailContainer.appendChild(buttonContainer);

  let aFirstTag = document.createElement('a');
      aFirstTag.setAttribute('href',"");
      aFirstTag.setAttribute('class',"details");
      aFirstTag.innerHTML = "Details";
      buttonContainer.appendChild(aFirstTag);

  let aSecTag = document.createElement('a');
      aSecTag.setAttribute('href', sourceUrlValue);
      aSecTag.setAttribute('class', 'recipeUrl');
      aSecTag.setAttribute('target', '_blank');
      aSecTag.innerHTML = "Recipe URL";
      buttonContainer.appendChild(aSecTag);
}

//function to reset the form input values
function resetForm() {
    recipeName.value = '';
    providerName.value = '';
    sourceUrl.value = '';
    ingredients.value = '';
    directions.value = '';
}

//function to validate form
function validateForm() {
  let x = recipeName.value;
  let y = ingredients.value;
  let z = directions.value;

  if (x == "") {
    alert("Recipe Name must be filled out");
    recipeName.focus();
    return false;
  }
  if (y == "") {
    alert("Ingredients must be filled out");
    ingredients.focus();
    return false;
  }
  if (z == "") {
    alert("Directions must be filled out");
    directions.focus();
    return false;
  }
  return true;
}
