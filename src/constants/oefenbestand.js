import {bestSellingTv, inventory} from './inventory.js';

function showOutcomeInConsole() {
// Opdracht 1a: Gebruik een array-methode om een array te maken met daarin alle tv-type namen.
// Log de uitkomst in de console.
    const tvNames = inventory.map((tvName) => {
        return (tvName.name);
    })
    console.log(tvNames);

// Opdracht 1b: Gebruik een array-methode om alle informatie te verzamelen van de tv's die
// volledig uitverkocht zijn. Log de uitkomst in de console.
    const leftOverStock = inventory.filter((Stock) => {
        return Stock.originalStock - Stock.sold === 0;
    })
    console.log(leftOverStock);

    // Opdracht 1c: Gebruik een array-methode om de informatie van het tv-type 'NH3216SMART' op te halen.
    const tvType = inventory.find((tvType)=> {
        return tvType.type === 'NH3216SMART';
    })
    console.log(tvType);

// Opdracht 1d: Gebruik een array-methode om een lijst te maken van de merk- en tv-namen waarbij aangegeven wordt
// of deze geschikt zijn voor sport-kijkers (een verversingssnelheid van 100Hz of hoger).
// Doe dit in het format { name: 'Toshiba HD TV', suitable: false }. Log de uitkomst in de console.
    const suitableForSports = inventory.map((tv) => {
        if (tv.refreshRate >= 100) {
        return `name: '${tv.brand} ${tv.name}', suitable: true `
    } else{
        return `name: '${tv.brand} ${tv.name}', suitable: false `
        }
    })
    console.log(suitableForSports);
// Opdracht 1e (uitdaging): Gebruik array-methoden om alle informatie te verzamelen van de tv's
// die beschikbaar zijn in schermgroottes van 65 inch en groter.
const bigTvs = inventory.filter((tv) =>{
    for (let i = 0; i < tv.length; i++) {
        let sizes = tv.availableSizes
        return sizes[i] > 65
    }
})
console.log(bigTvs);
}
export default showOutcomeInConsole;

// let tv = bestSellingTv;
// let tvDimensionsInches = tv.availableSizes;
//
// let tvDimensions = '';
//
// for (let i = 0; i < tv.availableSizes.length; i++) {
//     let size = tvDimensionsInches;
//     let cm = Math.round(size[i] * 2.54);
//
//     tvDimensions += `${size[i]} inches (${cm}cm)`;
//
//     if (i !== tvDimensionsInches.length - 1) {
//         tvDimensions += ' | ';
//     }







// Opdracht 1f (uitdaging): Gebruik array-methoden om alle informatie te verzamelen van de tv's
// die over ambilight beschikken. Log de uitkomst in de console.



