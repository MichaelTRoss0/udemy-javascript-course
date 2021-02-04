function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
const unitedStates = describeCountry('United States', 328, 'Washington D.C.');
const canada = describeCountry('Canada', 38, 'Ottowa');
const mexico = describeCountry('Mexico', 126, 'Mexico City');
console.log(unitedStates);
console.log(canada);
console.log(mexico);