import { refs } from '../js/refs';
import Notiflix from 'notiflix';

export function resetMarkup() {
  refs.listWithCountryEl.innerHTML = '';
}
export function createMarkupWithCountry(countries) {
  const markup = refs.listWithCountryEl;

  if (countries.length > 10) {
    resetMarkup();
    Notiflix.Notify.failure(
      'Таких стран слишком много, поконкретней пожалуйста'
    );
    return;
  }
  if (countries.length >= 2 && countries.length <= 10) {
    markup.innerHTML = countries
      .map(({ name, flags }) => {
        return `<li><img
       src="${flags.svg}"
       alt="${name.official}"
       width="40">
       <span>${name.official}</span>
              </li>`;
      })
      .join('');
    return;
  }
  if (countries.length === 1) {
    markup.innerHTML = countries
      .map(({ name, flags, capital, population, languages }) => {
        return `<li ><img 
           src="${flags.svg}"
           alt="${name.official}"
           width="40">
           <span style="font-size: 50px">${name.official}</span>
           <p><span>Capital:</span> ${capital.join(', ')}</p>
           <p><span>Population:</span> ${population}</p>
            <p><span>Languages:</span> ${Object.values(languages).join(
              ', '
            )}</p></li>`;
      })
      .join('');
    return;
  }
  Notiflix.Notify.failure('Как это вообще произошло ??');
}
