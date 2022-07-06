const fetch = require('node-fetch');

async function getData() {
    const myArgv = process.argv.slice(2);
    const name = myArgv[0];

    const url = await `https://api.nationalize.io/?name=${name}`;
    const response = await fetch(url);
    const data = await response.json();
    

    if(data.country.length === 0){
        console.log("sorry! no data found!");
    }
    else{
        const countryCode = data.country[0].country_id;
        const probability = data.country[0].probability.toFixed(4);
        console.log('The person '+ name + ' is ' + 'most likely to be from the country ' + countryCode + ' with a probability of ' + probability);
    }

}

getData();
