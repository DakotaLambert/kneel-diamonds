import { getOrders, getMetals, getStyles, getSizes, getRingStyles } from "./database.js";

const buildOrderListItem = (order) => {
  
  //variable value is the return value of the function
  const metals = getMetals();
  const sizes = getSizes();
  const styles = getStyles();
  const ringStyles = getRingStyles();

  //invoking find method
  //iterating through the styles array with find method

  
  const foundStyle = styles.find((style) => {
    return style.id === order.styleId;
  });

  const foundSize = sizes.find((size) => {
    return size.id === order.sizeId;
  });

  const foundMetal = metals.find((metal) => {
    return metal.id === order.metalId;
  });
  
  const foundRingStyle = ringStyles.find((ringStyle) => {
    return ringStyle.id === order.ringStyleId
  })
  
  let totalCost = foundMetal.price + foundStyle.price + foundSize.price;
  
  if (foundRingStyle.id === 1) {
    totalCost 
  } else if ( foundRingStyle.id === 2) {
    totalCost *= 2
  } else if ( foundRingStyle.id === 3) {
    totalCost *= 4
  };

  const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return `<li>
    Order #${order.id} cost ${costString}
</li>`;
};

// Remember that the function you pass to find() must return true/false

export const Orders = () => {
  /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
  const orders = getOrders();

  let html = "<ul>";

  const listItems = orders.map((order) => buildOrderListItem(order));
                                //buildOrListItem
  html += listItems.join("");
  html += "</ul>";

  return html;
};
