const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = (countries) => {
    //console.log(displayCountries);
    const countryDiv = document.getElementById('countries')
    countries.forEach(country => {
        //console.log(country);
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
        <h1>${country.name.common}</h1>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name.common}')">Show Details</button>
        `;
        countryDiv.appendChild(div);
    })
}

const loadCountryByName = (name) => {
     const url = `https://restcountries.com/v3.1/name/${name}`
     fetch(url)
     .then(res => res.json())
     .then(data => displayCountriDetails(data[0]))
}

const displayCountriDetails = (country) => {
     console.log(country);
     const countryDetailsDiv = document.getElementById('county-details');
     countryDetailsDiv.innerHTML = `
     <h1>${country.name.common}</h1>
     <p>${country.population}</p>
     <img width="250px" src="${country.flags.png}" alt="">
     `
}