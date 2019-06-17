const recipes = document.querySelector('.recipesApi');
const recipe = document.querySelectorAll('.recipe');

const search = document.querySelector('input[type="search"]');
const searchBtn = document.querySelector('button[type="search"]');
const loader = document.querySelector('#animated-gif');
const resultsFor = document.querySelector('.resultsFor')
// search.addEventListener('search', displayRecipes);
// searchBtn.addEventListener('click', displayRecipes);

function displayRecipes() {

  loader.style.display = 'block';
  var urlParams = new URLSearchParams(location.search);
  let value = urlParams.get('search');

  fetch(
      `https://api.edamam.com/search?q=${value}&app_id=80010e5d&app_key=a840721c6ce80a1b19aa39f1984cb906`
    )
    .then(res => res.json())
    .then(({
      hits
    }) => {
      loader.style.display = 'none';
      let output = '';
      let result = '';
      hits.forEach(({
        recipe
      }) => {
        // console.log(recipe)
        result = `Results For ${value} :`
        output += `
        
        <ul class='recipe' >
        <img src='${recipe.image}' />
        <li >${recipe.source}</li>
        <li>${recipe.label}</li>Ingredients:
         <li>${recipe.healthLabels}</li>
        </ul>
        `;
      });
      recipe.forEach(rec => rec.style.display = 'flex')
      recipes.innerHTML = output;
      resultsFor.innerHTML = result;
    });

}

displayRecipes();

// 1234