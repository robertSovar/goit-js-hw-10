import { fetchBreeds } from "./cat-api.js";
import { fetchCatByBreed } from "./cat-api.js";

 
document.addEventListener('DOMContentLoaded', () => {

    const selectBreedEl = document.querySelector('.breed-select');
    const loaderEL = document.querySelector('.loader');
    const errorEl = document.querySelector('.error');
    const catInfoEl = document.querySelector('.cat-info');

    loaderEL.style.display = 'none';
    errorEl.style.display = 'none';
    catInfoEl.style.display = 'none';

    try {
        const breeds = fetchBreeds();
        console.log(breeds);
        breeds.forEach(breed => {
            const option = document.createElement("option");
            option.value = breed.id;
            option.textContent = breed.name;
            selectBreedEl.appenChild(option)
        });
    }

    catch (error) {
     errorEl.style.display = 'none';
    }
});
