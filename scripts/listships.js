import { getShips } from "./database.js";
import { getHaulers } from "./database.js";

const ships = getShips();
const haulers = getHaulers();

export const shipList = () => {
  let shipHTML = `<ul id="ships">`;
  for (const ship of ships) {
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
    window.alert(
      `${itemClicked.dataset.name} is being hauled by ${haulerName}`
    );
  }
});
