const loadCountry=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayCountry(data))
}

const displayCountry=country=>{
    const countryContainer=document.getElementById('all-country');
    // console.log(country)

    // for of loop
    /*for(const countries of country){
        console.log(countries)
    }*/

    // for each
    country.forEach(countries=>{
        console.log(countries);
        const div=document.createElement('div');
        div.classList.add('country');
        div.innerHTML=`
        <h1>Name: ${countries.name.common} </h1>
        <p>Capital: ${countries.capital ? countries.capital[0] : 'No Capital'}</p>
        `;
        countryContainer.appendChild(div)
    })

}

loadCountry();