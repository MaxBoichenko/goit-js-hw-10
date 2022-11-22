const URL = 'https://restcountries.com/v3.1/';
const paramsForFetch = ['name', 'capital', 'population', 'flags', 'languages'];

export default function fetchCountries(name) {
  return fetch(`${URL}name/${name}?fields=${paramsForFetch.join(',')}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}
