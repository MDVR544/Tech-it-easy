import './App.css';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import totalSold from "./Helpers/TotalSales/Soldcalculator.js"
import totalPurchased from "./Helpers/totalPurchased/Purchasedcalculator.jsx";
import amountToSell from "./Helpers/AmountToSell/ToSellCalculator.jsx";
import {tvInformation, tvInformationBestselling} from "./Helpers/TVname/TVname.jsx";
import {tvPricing, tvPricingBestSelling} from "./Helpers/TVpricing/TVpricing.jsx";
import {tvDimensionsCalculator} from "./Helpers/TVDimensions/tvDimensionsCalculator.jsx";
import checkIcon from "./assets/check.png";
import minusIcon from"./assets/minus.png";
import showOutcomeInConsole from './constants/oefenbestand.js';

// showOutcomeInConsole()



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
            <article className="tvArticle">
                <img src={bestSellingTv.sourceImg} alt="Afbeelding van TV"/>
                <p>{tvInformationBestselling()}</p>
                <p>{tvPricingBestSelling()}</p>
                <p>{tvDimensionsCalculator(bestSellingTv)}</p>
                <ul>
                    <li><img src={checkIcon} alt="Check icon"/> wifi</li>
                    <li><img src={minusIcon} alt="Not icon"/> speech</li>
                    <li><img src={checkIcon} alt="Check icon"/> hdr</li>
                    <li><img src={checkIcon} alt="Check icon"/> bluetooth</li>
                    <li><img src={minusIcon} alt="Not icon"/> ambilight</li>
                </ul>
            </article>
        <div>
            <ul className= "brandList">
                {inventory.map((tvBrand) => {
                return <li key={tvBrand.id}>{tvBrand.brand}</li>;
            })}
            </ul>
        </div>

            <article className="tvArticle">
                {inventory.map((tvInformationArticle) => {
                    return <li key={tvInformationArticle.id}>
                        <img src={tvInformationArticle.sourceImg} alt="Afbeelding van TV"/>
                        <p>{tvInformation(tvInformationArticle)}</p>
                        <p>{tvPricing(tvInformationArticle)}</p>
                        <p>{tvDimensionsCalculator(tvInformationArticle)}</p>
                    </li>
                    }
                )}
                {/*<ul>*/}
                {/*    <li><img src={checkIcon} alt="Check icon"/> wifi</li>*/}
                {/*    <li><img src={minusIcon} alt="Not icon"/> speech</li>*/}
                {/*    <li><img src={checkIcon} alt="Check icon"/> hdr</li>*/}
                {/*    <li><img src={checkIcon} alt="Check icon"/> bluetooth</li>*/}
                {/*    <li><img src={minusIcon} alt="Not icon"/> ambilight</li>*/}
                {/*</ul>*/}
            </article>


            <div className="buttons">
                <button type="button" onClick={mostSold}>Meest verkocht eerst</button>
                <button type="button" onClick={cheapestFirst}>Goedkoopste eerst</button>
                <button type="button" onClick={bestForSports}>Meest geschikt voor sport eerst</button>
            </div>
        </>
    )

}

export default App