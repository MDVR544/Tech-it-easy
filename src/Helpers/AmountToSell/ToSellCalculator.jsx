import totalSold from "../TotalSales/Soldcalculator.js";
import totalPurchased from "../totalPurchased/Purchasedcalculator.jsx";
import {inventory} from "../../constants/inventory.js";

function amountToSell() {
    return totalPurchased(inventory) - totalSold(inventory);
}
export default amountToSell;