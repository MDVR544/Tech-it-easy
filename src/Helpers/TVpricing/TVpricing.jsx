import {bestSellingTv} from "../../constants/inventory.js";

function tvPricing(){
    return `€${bestSellingTv.price},-`;
}
export default tvPricing;