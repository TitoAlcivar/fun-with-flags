const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
const card = document.querySelector('section')
const infoCountry = async () => {
    const data = await fetch(`https://restcountries.com/v3.1/name/${id}`);
    const response = await data.json()

    const countryInfo = response.map(element => {
        return {
            img: element.flags,
            name: element.name,
            population: element.population,
            region: element.region,
            capital: element.capital,
            native: element.name.official,
            subregion: element.subregion,
            coin: element.currencies.name,
            languages: element.languages,
            border: element.borders
        }
    })
    countryInfo.forEach(element => {
        card.innerHTML += `<div class="country">
                           <img src=${element.img.png}>
                           <p>${element.name.common}</p>
                           <p>Native name:${element.native}</p>
                           <p>Population:${element.population}</p>
                           <p>Region: ${element.region}</p>
                           <p>Subregion:${element.subregion}</p>
                           <p>Capital: ${element.capital}</p>
                           <p>Currencies: ${element.coin}</p>
                           <p>Languages(s):${element.languages}</p>
                           <p>Border Countries:${element.borders}</p>
                           <a href="/index.html">
                           <button id="button">Back</button></a></div>`
    });
}
infoCountry()