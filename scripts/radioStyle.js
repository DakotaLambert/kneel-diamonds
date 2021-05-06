import { getRingStyles, setRingStyle } from "./database.js";

const ringStyles = getRingStyles()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "ringStyle") {
            setRingStyle(parseInt(event.target.value))
        }
    }
)

export const styleRadioButton = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = ringStyles.map(style => {
        return `<li>
            <input type="radio" name="ringStyle" value="${style.id}" /> ${style.type}
        </li>`
    })


    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}