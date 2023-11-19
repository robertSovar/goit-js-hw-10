import { fetchBreeds, fetchCatByBreed } from "./cat-api.js";
import SlimSelect from 'slim-select';


const slimSelect = new SlimSelect({
//   select: '.breed-select'
});


const selectBreedEl = document.querySelector('.breed-select');
const loaderEL = document.querySelector('.loader');
const errorEl = document.querySelector('.error');
const catInfoEl = document.querySelector('.cat-info');

document.addEventListener('DOMContentLoaded', () => {

    selectBreedEl.style.display = 'none';
    loaderEL.style.display = 'block';
    loaderEL.style.fontSize = '25px';
    loaderEL.style.fontWeight = '700';
    errorEl.style.display = 'none';
    catInfoEl.style.display = 'none';

    try {

        setTimeout(() => {
            loaderEL.style.display = 'none';
            selectBreedEl.style.display = 'block';
        }, 1000);

        setTimeout(getCatList, 0);
        selectBreedEl.addEventListener('change', (e) => {
                const target = e.target.value;
                const catTarget = fetchCatByBreed(target);
                loaderEL.style.display = 'block';
                catTarget.then(res => {
                   res.find(cat => {
                     const markup =   `
                <img src="${cat.url}" alt="Image of ${cat.breeds[0].name}"  height = "300">
               <div class="container">
                 <h2 class="title">${cat.breeds[0].name} </h2>
                 <p class="description"> ${cat.breeds[0].description}</p>
                 <h3 class="temperament">Temperament:</h3> <p>${cat.breeds[0].temperament}</p>
               </div>`;
               catInfoEl.style.display = 'flex';
               catInfoEl.style.gap = '10px';
               catInfoEl.style.paddingTop = '15px';
               catInfoEl.innerHTML = markup;
               loaderEL.style.display = 'none';
                    });
                });
            });
    }

    catch (error) {
     errorEl.style.display = 'block';
    }
});

function getCatList() {
    const breeds = fetchBreeds();
    breeds.then (res => {
        res.map(breed => {
            const option = document.createElement("option");
            option.value = breed.id;
            option.textContent = breed.name;
            selectBreedEl.appendChild(option);
        }); 
    });
};



