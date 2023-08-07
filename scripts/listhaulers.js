import { getHaulers } from "./database.js";
import { getShips } from "./database.js";

const haulers = getHaulers();
const shippingShips = getShips();
const newArray = [];

const alphabetizeArrayOfHaulers = (haulersArray) => {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  for (const letter of alphabet) {
    haulersArray.forEach((hauler) => {
      if (hauler.name.toLowerCase().startsWith(letter)) {
        newArray.push(hauler);
      }
    });
  }
  return newArray;
};

alphabetizeArrayOfHaulers(haulers);

export const haulerList = () => {
  let haulerHTML = `<ul id="haulers">`;
  for (const hauler of newArray) {
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
      }
    }
    itemClicked.innerHTML = `The ${itemClicked.dataset.name} is carrying ${counter} shipping ships.`;
  }
});
