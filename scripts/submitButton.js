import { addCustomOrder } from "./database.js";

document.addEventListener(
    "click",
(clickEvent) => {
    if(clickEvent.target.id === "submitOrderButton") {
        const customerOrderSuccess = addCustomOrder()

        if(!customerOrderSuccess){
            window.alert("Please select all options!")
        }
    }
}

)


 export const SubmitOrderButton = () => {
    return `
    <button id="submitOrderButton" class="">Submit Order</button>
    `
}

