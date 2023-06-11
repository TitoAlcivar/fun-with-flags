const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
const card = document.querySelector('section')
const infoCountry = async () => {
    const data = await fetch(`https://restcountries.com/v3.1/name/${id}`);
    const response = await data.json()
    
        card.innerHTML += `<div class="country">
                           <img src=${response[0].flags.png}>
                           <p>${response[0].name.common}</p>
                           <p>Native name:${response[0].name.official}</p>
                           <p>Population:${response[0].population}</p>
                           <p>Region: ${response[0].region}</p>
                           <p>Subregion:${response[0].subregion}</p>
                           <p>Capital: ${response[0].capital}</p>
                           <p>Currencies: ${Object.keys(response[0].currencies)}</p>
                           <p>Languages(s):${Object.values(response[0].languages)}</p>
                           <p>Border Countries:${response[0].borders}</p>
                           <a href="/index.html">
                           <button id="button">Back</button></a></div>`
  
}
infoCountry()