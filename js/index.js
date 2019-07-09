const recipes = document.querySelector('.recipesApi');
const recipe = document.querySelectorAll('.recipe');
const search = document.querySelector('input[type="search"]');
const searchBtn = document.querySelector('button[type="search"]');
const loader = document.querySelector('#animated-gif');
const resultsFor = document.querySelector('.resultsFor');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const modalTitle = document.querySelector('.title-details');
const prgDetails = document.querySelector('.prg-details');
const footer = document.querySelector('footer');
const arrowBack = document.querySelector('.back');
const displaySomeRecipes = document.querySelector('#displaySomeRecipes');
const nav = document.querySelector('nav');
const closeNavButton = document.querySelector('.closeNavButton');



loader.style.display = 'block';
fetch(
    'https://api.edamam.com/search?q=pizza&app_id=80010e5d&app_key=a840721c6ce80a1b19aa39f1984cb906'
  )
  .then(resp => resp.json())
  .then(hits => {
    let output = '';

    hits.hits.forEach(hits => {
      output += `

      <ul class='recipe' >
      <img onclick="openModal('${
        hits.recipe.label
      }','${hits.recipe.ingredientLines}')"  class="recipe-img" src='${hits.recipe.image}' />
      <li onclick="openModal('${hits.recipe.label}','${hits.recipe.ingredientLines}')" class='recipe-title'>${
        hits.recipe.label
      }</li> <span>Health Labels:</span>
       <li class='healthLabels'>${hits.recipe.healthLabels}</li>
      </ul>
      `;
    });

    recipe.forEach(rec => (rec.style.display = 'flex'));
    displaySomeRecipes.innerHTML = output;
  });

function openModal(title, ingredients) {
  console.log(title, ingredients)
  modalTitle.innerHTML = title;
  prgDetails.innerHTML = ingredients;
  modal.style.display = 'flex';
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
close.addEventListener('click', () => {
  modal.style.display = 'none';
});

let hamburger = document.querySelector('.hamburger');

function toggleState() {
  hamburger.classList.toggle('active');
  nav.style.display = 'block';
}

hamburger.addEventListener('click', toggleState);
closeNavButton.addEventListener('click', () => {
  nav.style.display = 'none';
  hamburger.classList.toggle('active');
});
