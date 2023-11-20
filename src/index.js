import { fetchBreeds, fetchCatByBreed } from "./cat-api.js";
import SlimSelect from 'slim-select';


const selectBreedEl = document.querySelector('.breed-select');
const loaderEL = document.querySelector('.loader');
const errorEl = document.querySelector('.error');
const catInfoEl = document.querySelector('.cat-info');

document.addEventListener('DOMContentLoaded', () => {


    selectBreedEl.style.display = 'none';
    loaderEL.classList.remove('loader');
    loaderEL.innerHTML =
     `<div>
        <span class="loader">
        </span>
        <span> Loading data, please wait...</span>
      </div>`;
    loaderEL.style.display = 'flex';
    loaderEL.style.fontSize = '25px';
    loaderEL.style.fontWeight = '700';
    errorEl.style.display = 'none';
    catInfoEl.style.display = 'none';
    
    
    const breeds = fetchBreeds();
    breeds.then (res => {
        res.map(breed => {
            const option = document.createElement("option");
            option.value = breed.id;
            option.textContent = breed.name;
            selectBreedEl.appendChild(option);
        }); 
        selectBreedEl.style.display = 'block';
    loaderEL.style.display = 'none';
        const slimSelect = new SlimSelect({
          select: '.breed-select',
          placeholder: 'Select a breed',
          allowDeselect: true,
          alwaysOn: false,
        });
        const slimContainer = document.querySelector('.ss-main');
        slimContainer.style.width = '20%';
        console.dir(slimContainer);
    });
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
                 <strong class="temperament">Temperament: </strong>${cat.breeds[0].temperament}
               </div>`;
               catInfoEl.style.display = 'flex';
               catInfoEl.style.gap = '10px';
               catInfoEl.style.paddingTop = '15px';
               catInfoEl.innerHTML = markup;
               loaderEL.style.display = 'none';
                    });
                });
            });
});

