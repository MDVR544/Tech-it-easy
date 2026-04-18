import {bestSellingTv} from "../../constants/inventory.js";


export function tvInformation(tv){
    return `${tv.brand} ${tv.type} ${tv.name}`;
}

export function tvInformationBestselling(){
        return `${bestSellingTv.brand} ${bestSellingTv.type} ${bestSellingTv.name}`;
    }



// export function tvInformation(){
//     inventory.map((tvInformation) =>{
//         return `${tvInformation.brand} ${tvInformation.type} ${tvInformation.name}`;
//     })
// }