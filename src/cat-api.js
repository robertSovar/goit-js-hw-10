import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_9JseXOGGCFgzQKnj0Euj906Xb2AGlNH6wFwrtYc8oiiFbKMYXhC1t791Kgd2G5jc";

export function fetchBreeds() {
    const catList =  axios.get('https://api.thecatapi.com/v1/breeds')
    .then(response => response.data)
    .catch(error => { throw error});
    return catList
};


// export function fetchCatByBreed(breedId) {
//     const showData = axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
//     .then(response => response.data[0])
//     .catch(error => { throw error});
//     // console.log(showData);
//     return showData;
// }

