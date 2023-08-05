import { getHaulers } from "./database.js";
import { getShips } from "./database.js";

const haulers = getHaulers();
const shippingShips = getShips();
const haulerArray = [];

export const haulerList = () => {
  let haulerHTML = `<ul id="haulers">`;
  for (const hauler of haulers) {
    haulerHTML += `<li 
    data-id="${hauler.id}" 
    data-type="hauler"
    data-name="${hauler.name}">
    ${hauler.name}</li>`;
  }
  haulerHTML += "</ul>";
  return haulerHTML;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  let counter = 0;
  if (itemClicked.dataset.type === "hauler") {
    const haulerID = itemClicked.dataset.id;
    for (const ship of shippingShips) {
      if (parseInt(haulerID) === ship.haulerid) {
        counter++;
        haulerArray.push(ship.name);
      }
    }
    itemClicked.innerHTML = `This hauler is carrying ${counter} shipping ships.`;
    console.log(haulerArray.join());
  }
});

export const getHaulerArray = () => {
  return haulerArray;
};
