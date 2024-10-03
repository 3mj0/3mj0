const toggleDescription = (event) => {
    const description = event.target.nextElementSibling; 
    if (description) {
        description.style.display = (description.style.display === 'none' || description.style.display === '') ? 'block' : 'none';
    }
};

document.addEventListener('DOMContentLoaded', () => {
    
    const myRecipes = document.querySelectorAll('.myRecipes');
    recipeTitles.forEach(title => {
        title.addEventListener('click', toggleDescription);
    });
    const recipeLinks = document.querySelectorAll('a');
    recipeLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const myRecipes = event.target.textContent;
            alert(`You are about to view ${myRecipes}.`);
        });
    });
});