document.getElementById('recipe-select').addEventListener('change', function () {
    const filename = this.value;
    if (!filename) return;

    const url = `/data/${filename}`;

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('Failed to fetch recipe');
            return response.json();
        })
        .then(recipe => {
            displayRecipe(recipe);
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('title').textContent = 'Could not load recipe.';
            document.getElementById('ingredients').innerHTML = '';
            document.getElementById('instructions').innerHTML = '';
        });
});

function displayRecipe(recipe) {
    document.getElementById('title').textContent = recipe.title;

    const ingredientsEl = document.getElementById('ingredients');
    ingredientsEl.innerHTML = '';
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsEl.appendChild(li);
    });

    const instructionsEl = document.getElementById('instructions');
    instructionsEl.innerHTML = '';
    recipe.instructions.forEach(step => {
        const li = document.createElement('li');
        li.textContent = step;
        instructionsEl.appendChild(li);
    });
}
