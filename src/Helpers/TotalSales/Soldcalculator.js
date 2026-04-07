//Opdracht 1a: Hoeveel tv's zijn er al verkocht? Schrijf een helperfunctie die dit berekent. Log de uitkomst in de console.


function totalSold(inventory) {
    let totalSold = 0;

    for (let i = 0; i < inventory.length; i++) {

        totalSold += inventory[i].sold;
    }
    return totalSold;
}

export default totalSold;