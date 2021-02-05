'use strict';

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
const unitedStates = describeCountry('United States', 328, 'Washington D.C.');
const canada = describeCountry('Canada', 38, 'Ottowa');
const mexico = describeCountry('Mexico', 126, 'Mexico City');
console.log(unitedStates);
console.log(canada);
console.log(mexico);

function percentageOfWorld1(population) {
    return population / 7900 * 100;
}
const percentageUS = percentageOfWorld1(328);
const percentageCN = percentageOfWorld1(38);
const percentageMX = percentageOfWorld1(126);
console.log(percentageUS);
console.log(percentageCN);
console.log(percentageMX);
const percentageOfWorld2 = function (population) {
    return population / 7900 * 100;
}
console.log(percentageOfWorld2(328));
console.log(percentageOfWorld2(38));
console.log(percentageOfWorld2(126));

const percentageOfWorld3 = population => population / 7900 * 100;
console.log(percentageOfWorld3(328));
console.log(percentageOfWorld3(38));
console.log(percentageOfWorld3(126));

function describePopulation(country, population) {
    return `${country} has a population of ${population} million people, which is about ${percentageOfWorld1(population)}% of the world.`;
}
console.log(describePopulation('United States', 328));
console.log(describePopulation('Canada', 38));
console.log(describePopulation('Mexico', 126));