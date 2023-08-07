import { getShips } from "./database.js";
import { getHaulers } from "./database.js";

const ships = getShips();
const haulers = getHaulers();
const newArray = [];

const alphabetizeArrayOfShips = (shipsArray) => {
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
    shipsArray.forEach((ship) => {
      if (ship.name.toLowerCase().startsWith(letter)) {
        newArray.push(ship);
      }
    });
  }
  return newArray;
};
alphabetizeArrayOfShips(ships);

export const shipList = () => {
  let shipHTML = `<ul id="ships">`;
  for (const ship of newArray) {
    shipHTML += `<li data-id="${ship.id}" 
    data-type="ship"
    data-name="${ship.name}"
    data-haulerid="${ship.haulerid}">${ship.name}</li>`;
  }
  shipHTML += "</ul>";
  return shipHTML;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  let haulerName = "";
  if (itemClicked.dataset.type === "ship") {
    const shipHaulerId = itemClicked.dataset.haulerid;
    for (const hauler of haulers) {
      if (hauler.id === parseInt(shipHaulerId)) {
        haulerName = hauler.name;
      }
    }
    itemClicked.innerHTML = `${itemClicked.dataset.name} is being hauled by ${haulerName}.`;
  }
});
