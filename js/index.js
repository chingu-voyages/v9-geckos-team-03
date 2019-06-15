const recipes = document.querySelector('.recipesApi');
const search = document.querySelector('input[type="search"]');
const searchBtn = document.querySelector('button[type="search"]');
search.addEventListener('search', displayRecipes);
searchBtn.addEventListener('click', displayRecipes);

function displayRecipes() {
    let value = '';
    value = search.value != '' ? search.value : 'pizza';
    console.log(value);
    fetch(
            `https://api.edamam.com/search?q=${value}&app_id=80010e5d&app_key=a840721c6ce80a1b19aa39f1984cb906`
        )
        .then(res => res.json())
        .then(({
            hits
        }) => {
            let output = '';
            hits.forEach(({
                recipe
            }) => {
                // console.log(recipe)
                output += `
        <ul class='recipe' >
        <img src='${recipe.image}' />
        <li >${recipe.source}</li>
        <li>${recipe.label}</li>Ingredients:
         <li>${recipe.healthLabels}</li>
        </ul>
        `;
            });
            recipes.innerHTML = output;
        });
    recipes.scrollIntoView({
        behavior: 'smooth'
    });
}

displayRecipes();