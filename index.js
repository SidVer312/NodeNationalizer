const fetch = require('node-fetch');

async function getData() {
    const myArgv = process.argv.slice(2);
    const name = myArgv[0];

    const url = await `https://api.nationalize.io/?name=${name}`;
    const response = await fetch(url);
    const data = await response.json();
    const nameData = data.name;
    const countryCode = data.country[0].country_id;
    const probability = data.country[0].probability.toFixed(4);

    console.log('The person '+ nameData + ' is ' + ' likely to be from country code ' + countryCode + ' with a probability of ' + probability);
}

getData();