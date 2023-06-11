const data = "https://restcountries.com/v3.1/all"
const card = document.querySelector('section')

const countries = async (url) => {
    const data = await fetch(url)
    const response = await data.json()
console.log(response);

    const countriesdata = response.map(element => {
        return { img: element.flags,
                 name: element.name, 
                 population: element.population, 
                 region: element.region, 
                 capital: element.capital }
    })
    console.log(countriesdata);
    countriesdata.forEach(element => {
        card.innerHTML += `<div class="country">
                           <img src=${element.img.png}>
                           <p>${element.name.common}</p>
                           <p>Population:${element.population}</p>
                           <p>Region: ${element.region}</p>
                           <p>Capital: ${element.capital}</p>
                           <a href="./pages/pages.html?id=${element.name.common}">
                           <button id="button">More</button><a/></div>`
        
    });

}

countries(data)