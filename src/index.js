import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import fetchCountries from './js/fetchCountries';
import refs from './js/refs';
import { createMarkupWithCountry, resetMarkup } from './js/createMarkup';

const DEBOUNCE_DELAY = 300;

refs.inputForSearch.addEventListener(
  'input',
  debounce(inputForFetch, DEBOUNCE_DELAY)
);

function inputForFetch(event) {
  let valueInInput = event.target.value.trim().toLowerCase();

  if (!valueInInput) {
    resetMarkup();
    Notiflix.Notify.failure('Введите пожалуйста что-нибудь');
    return;
  }

  fetchCountries(valueInInput)
    .then(countries => {
      createMarkupWithCountry(countries);
    })
    .catch(error => {
      resetMarkup();
      Notiflix.Notify.failure(
        'Что-то пошло не так, возможно такой страны не существует :('
      );
    });
}
