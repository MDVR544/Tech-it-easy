import './App.css';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import totalSold from "./Helpers/TotalSales/Soldcalculator.js"
import totalPurchased from "./Helpers/totalPurchased/Purchasedcalculator.jsx";
import amountToSell from "./Helpers/AmountToSell/ToSellCalculator.jsx";
import tvInformation from "./Helpers/TVname/TVname.jsx";
import tvPricing from "./Helpers/TVpricing/TVpricing.jsx";
import tvDimensionsCalculator from "./Helpers/TVDimensions/tvDimensionsCalculator.jsx";
import checkIcon from "./assets/check.png";
import minusIcon from"./assets/minus.png";
import showOutcomeInConsole from './constants/oefenbestand.js';




function App() {

    function mostSold(){
        console.log("Meest verkocht eerst")
    }
    function cheapestFirst(){
        console.log("Goedkoopste eerst")
    }
    function bestForSports(){
        console.log("Meest geschikt voor sport eerst")
    }

showOutcomeInConsole()

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
            <div className="bestSellingTV">
                <img src={bestSellingTv.sourceImg} alt="Afbeelding van TV"/>
                <p>{tvInformation()}</p>
                <p>{tvPricing()}</p>
                <p>{tvDimensionsCalculator()}</p>
                <p>
                    <img src={checkIcon} alt="Check icon"/> wifi
                    <img src={minusIcon} alt="Not icon"/> speech
                    <img src={checkIcon} alt="Check icon"/> hdr
                    <img src={checkIcon} alt="Check icon"/> bluetooth
                    <img src={minusIcon} alt="Not icon"/> ambilight
                </p>
            </div>
            <div className="buttons">
                <button type="button" onClick={mostSold}>Meest verkocht eerst</button>
                <button type="button" onClick={cheapestFirst}>Goedkoopste eerst</button>
                <button type="button" onClick={bestForSports}>Meest geschikt voor sport eerst</button>
            </div>
        </>
    )

}

export default App