import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_2sNEA951h1xOKEC3rDFFmguazH2sPWeHNcoKqYk3Z2cmiIipFxYy3X0NaufoiXUx';

const BASE_URL = 'https://api.thecatapi.com/v1/';
const END-POINT_COLECTION = 'breeds';
const END-POINT_SEARCH = 'images/search';

export function fetchBreeds() {
    return axios.get(`${BASE_URL}${END-POINT_COLECTION}`)
};

export function fetchCatByBreed(breedId) {
    return axios.get(`${BASE_URL}${END-POINT_SEARCH}?breed_ids=${breedId}&has_breeds=1`)
};