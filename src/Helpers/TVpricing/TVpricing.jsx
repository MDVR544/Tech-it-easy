import {inventory} from "../../constants/inventory.js";

function tvPricing(){
    return `€${inventory[0].price},-`;
}
export default tvPricing;