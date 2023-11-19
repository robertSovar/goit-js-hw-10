import axios from "axios";
import Notiflix from "notiflix";

axios.defaults.headers.common["x-api-key"] = "live_9JseXOGGCFgzQKnj0Euj906Xb2AGlNH6wFwrtYc8oiiFbKMYXhC1t791Kgd2G5jc";

export function fetchBreeds() {
    const catList =  axios.get('https://api.thecatapi.com/v1/breeds')
    .then(response => response.data)
    .catch(error => { 
        error = Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!')
    });
    return catList;
};


export function fetchCatByBreed(breedId) {
    const showData = axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => response.data)
    .catch(error => { 
        error = Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!')
    });
    console.log(showData);
    return showData;
}

