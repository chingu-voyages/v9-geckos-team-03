let mainBtn = document.getElementById('mainBtn');
let backBtn = document.getElementById('backBtn');
let recipeName = document.getElementById('recipeName');
let recipeCategory = document.getElementById('recipeCategory');
let ingredients = document.getElementById('ingredients');
let directions = document.getElementById('directions');
let submitBtn = document.getElementById('submitBtn');
let formContainer = document.getElementById('formContainer');
let closeBtn = document.getElementById('closeBtn');
let ul = document.getElementById("recipeContainer");
let li = ul.getElementsByTagName('li');
let deleteCard = document.getElementById('deleteCard');
let lastid = 0;
let edit = false;
let saveItemid = "";


//Function to toggle the 'Add Recipes' button to show and hide the 'Add recipe' form
function toggleVisibility(){

  let saveBtn = document.getElementById('submitSaveBtn');
  let addBtn = document.getElementById('submitBtn');
      saveBtn.style.display = 'none';
      submitBtn.style.display = 'block';

    let x = formContainer.style;
        if(x.display !== "none" ){
            x.display="none";
        }else {
            x.display = "block";
        }
}

//Added click event to close the Add recipe div on clicking the 'x' icon
closeBtn.addEventListener('click', function() {
    formContainer.style.display = "none";
    resetForm();
});

//function to submit the input form
function formSubmit(){
  if(!edit) {
    create_cards();
  }
  edit = false;
  validateForm();
  toggleVisibility();
  resetForm();
  return false;
}

//function to create recipe cards
function create_cards() {
  let recipeNameValue = recipeName.value;
  let recipeCatValue = recipeCategory.value;
  let ingredientsValue = ingredients.value;
  let directionsValue = directions.value;
  let recipeContainer =document.getElementById('recipeContainer');

  let recipeCardContent = document.createElement('li');
      recipeCardContent.classList.add('recipeCards');
      recipeCardContent.setAttribute('id','item'+lastid);
      recipeContainer.appendChild(recipeCardContent);

  let imgContainer = document.createElement('div');
      recipeCardContent.appendChild(imgContainer);

  let recipeImg = document.createElement('img');
      recipeImg.src = "./images/recipeCard.jpg";
      imgContainer.appendChild(recipeImg);

  let recipeDetailContainer = document.createElement('div');
      recipeDetailContainer.classList.add('recipeDetails');
      recipeCardContent.appendChild(recipeDetailContainer);

  let recipeCardName = document.createElement('h3');
      recipeCardName.setAttribute('id',"rName");
      recipeDetailContainer.appendChild(recipeCardName);
      recipeCardName.innerHTML = recipeNameValue;

  let recipeCardCategory = document.createElement('p');
      recipeCardCategory.setAttribute('id',"rCat");
      recipeCardCategory.setAttribute('class',"hideDiv");
      recipeDetailContainer.appendChild(recipeCardCategory);
      recipeCardCategory.innerHTML = recipeCatValue;

  let recipeCardIngredients = document.createElement('p');
      recipeCardIngredients.setAttribute('id',"rIngredients");
      recipeCardIngredients.setAttribute('class',"hideDiv");
      recipeDetailContainer.appendChild(recipeCardIngredients);
      recipeCardIngredients.innerHTML = ingredientsValue;

  let recipeCardDirections = document.createElement('p');
      recipeCardDirections.setAttribute('id',"rDirections");
      recipeCardDirections.setAttribute('class',"hideDiv");
      recipeDetailContainer.appendChild(recipeCardDirections);
      recipeCardDirections.innerHTML = directionsValue;

  let buttonContainer = document.createElement('div');
      buttonContainer.classList.add('btn');
      recipeDetailContainer.appendChild(buttonContainer);

  let aFirstTag = document.createElement('div');
      aFirstTag.setAttribute('href',"");
      aFirstTag.setAttribute('class',"details");
      aFirstTag.setAttribute('onClick','showModal("'+'item'+lastid+'")');
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
      deleteDiv.setAttribute('onClick','removeCard("'+'item'+lastid+'")');
      deleteDiv.classList.add('fas', 'fa-trash-alt', 'delete');
      deleteDiv.setAttribute('target', '');
      buttonContainer.appendChild(deleteDiv);

      lastid+=1;
}

//function to reset the form input values
function resetForm() {
    recipeName.value = '';
    recipeCategory.value ='';
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

// //Click on details button to open the modal
function showModal(itemid){

    let modal = document.getElementById("myModal");
        modal.style.display = "block";

    //Create the modal Content
    let modalContent = document.createElement('div');
        modalContent.classList.add("modalContent");
        modalContent.setAttribute('id',"modalContent");
        modal.appendChild(modalContent);

    let span = document.createElement('span');
        span.setAttribute('id',"modClose");
        modalContent.appendChild(span);

    let iTag = document.createElement('i');
        iTag.classList.add('fas','fa-times','close');
        span.appendChild(iTag);

    let h1 = document.createElement('h1');
        h1.classList.add('mainText');
        modalContent.appendChild(h1);

    let em = document.createElement('em');
        em.setAttribute('id',"modRecName");
        em.innerHTML = '';
        h1.appendChild(em);

    let h3Ingredients = document.createElement('h3');
        h3Ingredients.setAttribute('id',"modRecIngredients");
        h3Ingredients.classList.add('modalHeadings');
        h3Ingredients.innerHTML = 'Ingredients';
        modalContent.appendChild(h3Ingredients);

    let pIngredients = document.createElement('p');
        pIngredients.setAttribute('id',"modIngredients");
        pIngredients.innerHTML = '';
        h3Ingredients.appendChild(pIngredients);

    let h3Directions = document.createElement('h3');
        h3Directions.setAttribute('id',"modRecDirections");
        h3Directions.classList.add('modalHeadings');
        h3Directions.innerHTML = 'Directions';
        modalContent.appendChild(h3Directions);

    let pDirections = document.createElement('p');
        pDirections.setAttribute('id',"modDirections");
        pDirections.innerHTML = '';
        h3Directions.appendChild(pDirections);


        const lis = [...document.querySelectorAll('#recipeContainer li')];

        let item = document.getElementById(itemid);

            em.innerHTML = item.getElementsByTagName("h3")[0].innerHTML;

        let pModIngredients = document.getElementById('modIngredients')
            pModIngredients.innerHTML = item.getElementsByClassName("hideDiv")[1].innerHTML;

        let pModDirections = document.getElementById('modDirections')
            pModDirections.innerHTML = item.getElementsByClassName("hideDiv")[2].innerHTML;

        // Get the <span> element that closes the modal
          let modCloseBtn = document.getElementById("modClose");
              modCloseBtn.addEventListener('click', function() {
                  modal.style.display = "none";
                  myModal.removeChild(modalContent);
              });

        // When the user clicks anywhere outside of the modal, close it
          window.onclick = function(event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
          }

    return false;
}



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

//click on edit icon to edit the recipe cards
function editCard(itemid) {
      edit = true;
      formContainer.style.display = 'block';
  let saveBtn = document.getElementById('submitSaveBtn');
  let addBtn = document.getElementById('submitBtn');
      saveBtn.style.display = 'block';
      submitBtn.style.display = 'none';

  let item = document.getElementById(itemid);
      saveItemid = itemid;

    //Getting the values back to form container
    recipeName.value = item.getElementsByTagName("h3")[0].innerHTML;
    recipeCategory.value = item.getElementsByClassName("hideDiv")[0].innerHTML;
    ingredients.value = item.getElementsByClassName("hideDiv")[1].innerHTML;
    directions.value = item.getElementsByClassName("hideDiv")[2].innerHTML;
} 

//Setting values on clicking save button back to recipe card
function saveForm(){
    let item = document.getElementById(saveItemid);
          item.getElementsByTagName("h3")[0].innerHTML = recipeName.value;
          item.getElementsByClassName("hideDiv")[0].innerHTML= recipeCategory.value;
          item.getElementsByClassName("hideDiv")[1].innerHTML= ingredients.value;
          item.getElementsByClassName("hideDiv")[2].innerHTML = directions.value;
}
