import './App.css';
import {inventory} from "./constants/inventory.js";
import totalSold from "./Helpers/TotalSales/Soldcalculator.js"
import totalPurchased from "./Helpers/totalPurchased/Purchasedcalculator.jsx";
import amountToSell from "./Helpers/AmountToSell/ToSellCalculator.jsx";
import tvInformation from "./Helpers/TVname/TVname.jsx";
import tvPricing from "./Helpers/TVpricing/TVpricing.jsx";

//Opdracht 2a: Maak een helperfunctie die een string genereert voor de naam van één tv en deze teruggeeft
// in het format [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.
//
// Opdracht 2b: Maak een helperfunctie die de prijs van één tv als
// parameter verwacht (zoals 379 of 159) teruggeeft in het format €379,- of €159,-.
//
// Opdracht 2c: Maak een helperfunctie die een string genereert voor alle beschikbare schermgroottes van één tv.
// De functie geeft dit terug in het format:
//[schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc.
//Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm).
//Wanneer een tv vier schermgroottes heeft ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm).
// Rond altijd af op hele centimeters. Test goed of dit werkt met verschillende tv's!


function App() {
    function tvDimensionsCalculator(){
        let tvDimensions = 0
        // maak variabelen voor de tv sizes in inches
        // maak een variabelen voor de tv sizes in cm dus met een * 2.54 let op dat je eindigd op hele centimeters
        //

        for (let i = 0; i < inventory.length; i++) {

            tvDimensions = `${inventory[0].availableSizes}`;

        }


return tvDimensions;
    }


    return (
        <>
            <h1>Begin hier met met maken van de applicatie!</h1>
            <div className="informationCards">
                <div className="salesCard">
                    <p>Totaal verkocht:</p>
                    <p>{totalSold(inventory)}</p>
                </div>
                <div className="purchasedCard">
                    <p>Totaal ingekocht:</p>
                    <p>{totalPurchased(inventory)}</p>
                </div>
                <div className="toSellCard">
                    <p>Totaal nog te verkopen:</p>
                    <p>{amountToSell()}</p>
                </div>
            </div>
            <p>{tvInformation()}</p>
            <p>{tvPricing()}</p>
            <p>{tvDimensionsCalculator()}</p>
        </>
    )


}

export default App