let mainBtn = document.getElementById('mainBtn');
let backBtn = document.getElementById('backBtn');
let recipeName = document.getElementById('recipeName');
let imageUrl = document.getElementById('imageUrl');
let providerName = document.getElementById('providerName');
let sourceUrl = document.getElementById('sourceUrl');
let ingredients = document.getElementById('ingredients');
let directions = document.getElementById('directions');
let submitBtn = document.getElementById('submitBtn');
let formContainer = document.getElementById('formContainer');
let closeBtn = document.getElementById('closeBtn');
let ul = document.getElementById("recipeContainer");
let li = ul.getElementsByTagName('li');
let deleteCard = document.getElementById('deleteCard');
let lastid = 0;


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
  let recipeCardContent = document.createElement('li');
      recipeCardContent.classList.add('recipeCards');
      recipeCardContent.setAttribute('id','item'+lastid);
      // lastid+=1;
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

  let editDiv = document.createElement('Div');
      editDiv.setAttribute('href', '');
      editDiv.classList.add('fas', 'fa-pencil-alt', 'edit');
      editDiv.setAttribute('onClick','editCard("'+'item'+lastid+'")');
      editDiv.setAttribute('target', '');
      buttonContainer.appendChild(editDiv);

  let deleteDiv = document.createElement('Div');
      deleteDiv.setAttribute('href', '');
      // deleteDiv.setAttribute('id', 'deleteCard');
      deleteDiv.setAttribute('onClick','removeCard("'+'item'+lastid+'")');
      deleteDiv.classList.add('fas', 'fa-trash-alt', 'delete');
      deleteDiv.setAttribute('target', '');
      buttonContainer.appendChild(deleteDiv);

      lastid+=1;
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

//function to add click event to search button
function clickSearch() {
  searchRecipes();
  if(searchInput.value === ""){
    backBtn.style.display = 'none';
    mainBtn.style.display = 'block';
  }else{
    backBtn.style.display = 'block';
    mainBtn.style.display = 'none';
  }

  return false;
}

//function to add/filter the search List
function searchRecipes() {
  // Declare variables
  let input, filter, ul, li, h3, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("recipeContainer");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    h3 = li[i].getElementsByTagName("h3")[0];
    txtValue = h3.textContent || h3.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
  return false;
}

//Add a click eventListener to back button
backBtn.addEventListener('click', function() {
  let ul = document.getElementById("recipeContainer");
  let li = ul.getElementsByTagName('li');
  for (i = 0; i < li.length; i++) {
    li[i].style.display = "";
  }
  backBtn.style.display = 'none';
  mainBtn.style.display = 'block';
  searchInput.value = "";
})

//Click on deleteIcon to delete a recipe card
function removeCard(itemid){
  //console.log('clicked');
  const lis = [...document.querySelectorAll('#recipeContainer li')];
  let item = document.getElementById(itemid);

    for (const li of lis) {
      li.addEventListener('click', function() {
        li.parentNode.removeChild(item);
      })
    }
}
