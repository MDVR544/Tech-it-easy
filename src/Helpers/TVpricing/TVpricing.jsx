import {bestSellingTv} from "../../constants/inventory.js";

export function tvPricingBestSelling(){
    return `€${bestSellingTv.price},-`;
}
export function tvPricing(tv){
    return `€${tv.price},-`;
}
