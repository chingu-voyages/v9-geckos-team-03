const recipes = document.querySelector('.recipesApi');

// fetch('https://jsonplaceholder.typicode.com/posts?_page=0&_limit=10')
//     .then((res) => res.json())
//     .then((data) => {
//         let output = '';
//         data.forEach((recipe) => {
//             output += `

//         <ul class='recipe' >
//         <li >${recipe.id}</li>
//         <li>${recipe.title}</li>
//         <li>${recipe.body}</li>
//         </ul>
//         `;

//         });
//         recipes.innerHTML = output;
//     });
fetch('https://api.edamam.com/search?q=pizza&app_id=80010e5d&app_key=a840721c6ce80a1b19aa39f1984cb906')
    .then((res) => res.json())
    .then(({
        hits
    }) => {
        let output = '';
        hits.forEach(({
            recipe
        }) => {
            console.log(recipe)
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